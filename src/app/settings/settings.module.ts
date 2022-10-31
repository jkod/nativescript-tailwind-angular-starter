import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { SharedModule } from "~/app/shared/shared.module";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";

@NgModule({
  imports: [NativeScriptCommonModule, SharedModule, SettingsRoutingModule],
  declarations: [SettingsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
