import { Directive, HostListener } from "@angular/core";
import {
  Color,
  EventData,
  isAndroid,
  isIOS,
  Label,
  View,
} from "@nativescript/core";

@Directive({
  selector: "[tailwindShadow]",
})
export class TailwindShadowDirective {
  @HostListener("loaded", ["$event.object"])
  viewLoaded(args: View): void {
    const nsView = args as View;
    const nsColorShadow = new Color("black");

    if (isIOS) {
      const iosView = nsView.ios;
      iosView.layer.shadowColor = nsColorShadow.ios.CGColor;
      iosView.layer.shadowOpacity = 0.3;
      iosView.layer.shadowOffset = CGSizeMake(0, 5);
      iosView.layer.shadowRadius = 4;
      iosView.layer.backgroundColor = UIColor.whiteColor.CGColor;
      /*
      layer.shadowOffset = CGSizeMake(0, 1);
      layer.shadowOpacity = 1;
      layer.shadowRadius = 5;
      layer.cornerRadius = 20;
      */
    } 
  }

  private getTextAlignment(label: Label): number {
    switch (label.textAlignment) {
      case "center":
        return android.view.Gravity.CENTER_HORIZONTAL;
      case "right":
        return android.view.Gravity.RIGHT;
      case "initial":
      case "left":
      default:
        return android.view.Gravity.LEFT;
    }
  }
}
