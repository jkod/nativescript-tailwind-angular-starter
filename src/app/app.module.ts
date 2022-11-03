import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, registerElement } from "@nativescript/angular";

import { ImageCacheItModule } from "@triniwiz/nativescript-image-cache-it/angular";

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
    ImageCacheItModule,
  ],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
