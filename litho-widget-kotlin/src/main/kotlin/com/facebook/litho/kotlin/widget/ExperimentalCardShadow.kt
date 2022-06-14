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

package main.kotlin.com.facebook.litho.kotlin.widget

import android.content.Context
import com.facebook.litho.ComponentContext
import com.facebook.litho.ComponentScope
import com.facebook.litho.MeasureResult
import com.facebook.litho.MountableComponent
import com.facebook.litho.MountableWithStyle
import com.facebook.litho.SimpleMountable
import com.facebook.litho.Style
import com.facebook.litho.widget.CardShadowDrawable
import com.facebook.rendercore.RenderUnit

/**
 * A component that is able to render the card's shadow.
 *
 * @param shadowStartColor Start color for the shadow.
 * @param shadowEndColor End color for the shadow.
 * @param cornerRadius Corner radius for the card that shows the shadow.
 * @param shadowSize Size of the shadow.
 * @param shadowDx The x offset of the shadow.
 * @param shadowDy The y offset of the shadow.
 */
class ExperimentalCardShadow(
    private val shadowStartColor: Int? = null,
    private val shadowEndColor: Int? = null,
    private val cornerRadius: Float? = null,
    private val shadowSize: Float? = null,
    private val shadowDx: Float = CardShadowDrawable.UNDEFINED,
    private val shadowDy: Float = CardShadowDrawable.UNDEFINED,
    private val hideTopShadow: Boolean = false,
    private val hideBottomShadow: Boolean = false,
    private val shadowLeftSizeOverride: Float = CardShadowDrawable.UNDEFINED,
    private val shadowRightSizeOverride: Float = CardShadowDrawable.UNDEFINED,
    private val style: Style? = null
) : MountableComponent() {

  override fun ComponentScope.render(): MountableWithStyle {
    return MountableWithStyle(
        CardShadowMountable(
            shadowStartColor = shadowStartColor,
            shadowEndColor = shadowEndColor,
            cornerRadius = cornerRadius,
            shadowSize = shadowSize,
            shadowDx = shadowDx,
            shadowDy = shadowDy,
            hideTopShadow = hideTopShadow,
            hideBottomShadow = hideBottomShadow,
            shadowLeftSizeOverride = shadowLeftSizeOverride,
            shadowRightSizeOverride = shadowRightSizeOverride),
        style)
  }
}

internal class CardShadowMountable(
    private val shadowStartColor: Int?,
    private val shadowEndColor: Int?,
    private val cornerRadius: Float?,
    private val shadowSize: Float?,
    private val shadowDx: Float,
    private val shadowDy: Float,
    private val hideTopShadow: Boolean,
    private val hideBottomShadow: Boolean,
    private val shadowLeftSizeOverride: Float,
    private val shadowRightSizeOverride: Float,
) : SimpleMountable<CardShadowDrawable>() {

  override fun createContent(context: Context): CardShadowDrawable = CardShadowDrawable()

  override fun mount(c: Context, content: CardShadowDrawable, layoutData: Any?) {
    shadowStartColor?.let { content.setShadowStartColor(shadowStartColor) }
    shadowEndColor?.let { content.setShadowEndColor(shadowEndColor) }
    cornerRadius?.let { content.setCornerRadius(cornerRadius) }
    shadowSize?.let { content.setShadowSize(shadowSize) }
    content.setHideTopShadow(hideTopShadow)
    content.setHideBottomShadow(hideBottomShadow)
    content.setShadowLeftSizeOverride(shadowLeftSizeOverride)
    content.setShadowRightSizeOverride(shadowRightSizeOverride)
    content.setShadowDx(shadowDx)
    content.setShadowDy(shadowDy)
  }

  override fun unmount(c: Context, content: CardShadowDrawable, layoutData: Any?) {
    content.setCornerRadius(0f)
    content.setShadowSize(0f)
    content.setHideTopShadow(false)
    content.setHideBottomShadow(false)
    content.setShadowLeftSizeOverride(0f)
    content.setShadowRightSizeOverride(0f)
    content.setShadowDx(0f)
    content.setShadowDy(0f)
  }

  override fun measure(
      context: ComponentContext,
      widthSpec: Int,
      heightSpec: Int,
      previousLayoutData: Any?
  ): MeasureResult = MeasureResult.withEqualDimensions(widthSpec, heightSpec, null)

  override fun getRenderType(): RenderUnit.RenderType = RenderUnit.RenderType.DRAWABLE
}
