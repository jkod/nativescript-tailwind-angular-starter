import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";

const routes: Routes = [
  { path: "default", component: ItemsComponent },
  { path: ":id", component: ItemDetailComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ItemRoutingModule {}
