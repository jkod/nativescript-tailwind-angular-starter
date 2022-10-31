import { Component, Input } from "@angular/core";
import {
  CoreTypes,
  Label,
  Page,
  ScrollEventData,
  ScrollView,
} from "@nativescript/core";
import { ViewCommon } from "@nativescript/core/ui/core/view";

@Component({
  selector: "ns-scroller",
  templateUrl: "./scroller.component.html",
  styleUrls: ["./scroller.component.scss"],
})
export class ScrollerComponent {
  @Input("title") title: string;

  constructor(private page: Page) {
    page.actionBarHidden = true;
  }

  onScroll(
    event: ScrollEventData,
    scrollView: ScrollView,
    topView: ViewCommon,
    header: Label
  ) {
    if (scrollView.verticalOffset < 32) {
      if (!this.page.actionBarHidden) {
        this.page.actionBarHidden = true;
        topView
          .animate({
            opacity: 1,
            duration: 200,
            curve: CoreTypes.AnimationCurve.easeIn,
          })
          .catch(() => {});
        header
          .animate({
            opacity: 0,
            duration: 200,
            curve: CoreTypes.AnimationCurve.easeIn,
          })
          .catch(() => {});
      }
    } else {
      if (this.page.actionBarHidden) {
        topView
          .animate({
            opacity: 0,
            duration: 200,
            curve: CoreTypes.AnimationCurve.easeIn,
          })
          .catch(() => {});
        header
          .animate({
            opacity: 1,
            duration: 200,
            curve: CoreTypes.AnimationCurve.easeIn,
          })
          .catch(() => {});
        this.page.actionBarHidden = false;
      }
    }
  }
}
