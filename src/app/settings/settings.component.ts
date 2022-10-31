import { Component, OnInit } from "@angular/core";
import { EventData, Switch } from "@nativescript/core";

import Theme from "@nativescript/theme";

@Component({
  selector: "settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
  modes = ["Auto", "Light", "Dark"];

  constructor() {
    // Use the constructor to inject services.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  toggleMode(mode: string) {
    switch (mode) {
      case "Light":
        Theme.setMode(Theme.Light);
        break;
      case "Dark":
        Theme.setMode(Theme.Dark);
        break;
      default:
        Theme.setMode(Theme.Auto);
        break;
    }
  }
}
