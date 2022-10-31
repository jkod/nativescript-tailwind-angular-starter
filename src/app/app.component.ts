import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { Frame, isIOS } from "@nativescript/core";
import { ad } from "@nativescript/core/utils";
import Theme from "@nativescript/theme";

interface IState {
  sideDrawer: {
    isOpen?: boolean;
    items: { text: string; active: boolean }[];
  };
}

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  ngOnInit() {}

  get dark() {
    const mode = Theme.getMode();
    if (mode !== Theme.Auto) {
      return mode === Theme.Dark;
    }

    return this.isDarkModeEnabled();
  }

  private isDarkModeEnabled(): boolean {
    if (isIOS) {
      return (
        Frame.topmost()?.viewController.traitCollection.userInterfaceStyle === 2
      );
    }

    const uiModeManager: android.app.UiModeManager = ad
      .getApplicationContext()
      .getSystemService(android.content.Context.UI_MODE_SERVICE);
    return (
      android.app.UiModeManager.MODE_NIGHT_YES === uiModeManager.getNightMode()
    );
  }
}
