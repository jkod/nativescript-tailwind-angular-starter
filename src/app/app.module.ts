import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, registerElement } from "@nativescript/angular";

import { TNSImageModule } from "@nativescript-community/ui-image/angular";
import * as imageModule from "@nativescript-community/ui-image";
import * as applicationModule from "@nativescript/core/application";

if (applicationModule.android) {
  applicationModule.on(applicationModule.launchEvent, () => {
    console.log("initialize pipeline");
    imageModule.initialize();
  });
}

import { CardView } from "@nstudio/nativescript-cardview";
registerElement("CardView", () => CardView);

import { AppRoutingModule } from "./app-routing.module";

import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule,
    TNSImageModule,
  ],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
