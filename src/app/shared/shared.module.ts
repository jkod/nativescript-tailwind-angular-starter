import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ScrollerComponent, ToggleBarComponent } from "./components";

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [ScrollerComponent, ToggleBarComponent],
  exports: [ScrollerComponent, ToggleBarComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
