import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/(itemTab:item/default//settingsTab:settings/default)",
    pathMatch: "full",
  },
  {
    path: "item",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("~/app/item/item.module").then((m) => m.ItemModule),
    outlet: "itemTab",
  },
  {
    path: "settings",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsModule),
    outlet: "settingsTab",
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
