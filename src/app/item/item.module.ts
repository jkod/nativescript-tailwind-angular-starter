import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { SharedModule } from "../shared/shared.module";

import { ItemRoutingModule } from "./item-routing.module";
import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";

@NgModule({
  imports: [NativeScriptCommonModule, SharedModule, ItemRoutingModule],
  declarations: [ItemsComponent, ItemDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ItemModule {}
