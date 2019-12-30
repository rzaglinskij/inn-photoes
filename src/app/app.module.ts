import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { PhotoesPageComponent } from "./photoes/photoes-page/photoes-page.component";
import { PhotoesModule } from "./photoes/photoes.module";
import { HttpClientModule } from "@angular/common/http";
import { FilesModule } from "./files/files.module";
import { SharingModule } from "./sharing/sharing.module";
import { FilesPageComponent } from "./files/files-page/files-page.component";
import { SharingPageComponent } from "./sharing/sharing-page/sharing-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: PhotoesPageComponent
      },
      {
        path: "photoes",
        component: PhotoesPageComponent
      },
      {
        path: "files",
        component: FilesPageComponent
      },
      {
        path: "sharing",
        component: SharingPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    HttpClientModule,
    PhotoesModule,
    FilesModule,
    SharingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
