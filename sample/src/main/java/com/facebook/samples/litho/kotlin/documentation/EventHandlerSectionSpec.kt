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

package com.facebook.samples.litho.kotlin.documentation

import com.facebook.litho.ClickEvent
import com.facebook.litho.annotations.OnEvent
import com.facebook.litho.sections.Children
import com.facebook.litho.sections.SectionContext
import com.facebook.litho.sections.annotations.GroupSectionSpec
import com.facebook.litho.sections.annotations.OnCreateChildren
import com.facebook.litho.sections.common.SingleComponentSection
import com.facebook.litho.widget.Text

// start_example
@GroupSectionSpec
object EventHandlerSectionSpec {

  @OnCreateChildren
  fun onCreateChildren(c: SectionContext): Children =
      Children.create()
          .child(
              SingleComponentSection.create(c)
                  .component(
                      Text.create(c)
                          .text("Say Hello")
                          .clickHandler(EventHandlerSection.onClick(c))
                          .build()))
          .build()

  @OnEvent(ClickEvent::class)
  fun onClick(c: SectionContext) {
    println("Hello World!")
  }
}
// end_example