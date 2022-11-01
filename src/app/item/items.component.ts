import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Page } from "@nativescript/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  constructor(
    private page: Page,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  select(item) {
    this.router.navigate(["../", item.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
