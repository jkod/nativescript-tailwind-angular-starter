import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Page, Animation, ActionBar, Color } from "@nativescript/core";
import { device, isIOS } from "@nativescript/core/platform";
import Theme from "@nativescript/theme";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
})
export class ItemsComponent implements OnInit {
  @ViewChild("left", { read: ElementRef, static: false }) left: ElementRef;

  items: Array<Item>;

  selected: Item = {
    id: -1,
    name: "New",
    role: "New",
  };

  isTablet: boolean = device.deviceType === "Tablet";

  constructor(
    private page: Page,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    //Theme.setMode(Theme.Dark); // Or Theme.Light
    this.items = this.itemService.getItems();
  }

  select(item) {
    this.selected = item;

    // For phone users we need to navigate to another page to show the detail view.
    if (!this.isTablet) {
      this.router.navigate(["../", item.id], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  animate() {
    let animation = new Animation([
      {
        width: 800,
        duration: 200,
        target: this.left.nativeElement,
        delay: 0,
      },
    ]);
    animation.play();
  }

  onBarLoaded($event) {
    /*
    let bar: ActionBar = this.page.getViewById<ActionBar>("bar");
    let navigationBar = bar.nativeView;

    if (isIOS) {
      console.log("ios");
      navigationBar.prefersLargeTitles = true;
      let appearance = navigationBar.standardAppearance;
      appearance.configureWithOpaqueBackground();
      appearance.backgroundColor = new Color("#ddd").ios;
      navigationBar.standardAppearance = appearance;
      navigationBar.scrollEdgeAppearance = navigationBar.standardAppearance;
    }
    */
  }
}
