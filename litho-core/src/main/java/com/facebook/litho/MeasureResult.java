/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho;

import static com.facebook.litho.SizeSpec.AT_MOST;
import static com.facebook.litho.SizeSpec.EXACTLY;
import static com.facebook.litho.SizeSpec.UNSPECIFIED;

import android.util.Log;
import androidx.annotation.Nullable;
import com.facebook.infer.annotation.Nullsafe;
import com.facebook.litho.config.ComponentsConfiguration;

/** Encapsulates the measured size of a Mountable, and any layout data */
@Nullsafe(Nullsafe.Mode.LOCAL)
public class MeasureResult {

  public final int width;
  public final int height;
  public final @Nullable Object layoutData;

  public MeasureResult(final int width, final int height, final @Nullable Object layoutData) {
    this.width = width;
    this.height = height;
    this.layoutData = layoutData;
  }

  public MeasureResult(final int width, final int height) {
    this(width, height, null);
  }

  /**
   * Returns a {@link MeasureResult} to respect both size specs and try to keep both width and
   * height equal. This will only not guarantee equal width and height if these specs use modes and
   * sizes which prevent it.
   */
  public static MeasureResult withEqualDimensions(
      final int widthSpec, final int heightSpec, final @Nullable Object layoutData) {
    final int widthMode = SizeSpec.getMode(widthSpec);
    final int widthSize = SizeSpec.getSize(widthSpec);
    final int heightMode = SizeSpec.getMode(heightSpec);
    final int heightSize = SizeSpec.getSize(heightSpec);

    if (widthMode == UNSPECIFIED && heightMode == UNSPECIFIED) {
      if (ComponentsConfiguration.IS_INTERNAL_BUILD) {
        Log.d("MeasureResult", "Size set to {0, 0} because both width and height are UNSPECIFIED");
      }
      return new MeasureResult(0, 0, layoutData);
    }

    final int width;
    final int height;

    if (widthMode == EXACTLY) {
      width = widthSize;

      switch (heightMode) {
        case EXACTLY:
          height = heightSize;
          break;
        case AT_MOST:
          height = Math.min(widthSize, heightSize);
          break;
        case UNSPECIFIED:
        default:
          height = widthSize;
          break;
      }
    } else if (widthMode == AT_MOST) {
      switch (heightMode) {
        case EXACTLY:
          height = heightSize;
          width = Math.min(widthSize, heightSize);
          break;
        case AT_MOST:
          // if both are AT_MOST, choose the smaller one to keep width and height equal
          final int chosenSize = Math.min(widthSize, heightSize);
          width = chosenSize;
          height = chosenSize;
          break;
        case UNSPECIFIED:
        default:
          width = widthSize;
          height = widthSize;
          break;
      }
    } else {
      width = 0;
      height = 0;
    }

    return new MeasureResult(width, height);
  }
}
