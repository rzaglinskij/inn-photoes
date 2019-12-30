import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { PipesModule } from "../core/pipes/pipes.module";

@NgModule({
  declarations: [MainLayoutComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, PipesModule],
  exports: [MainLayoutComponent],
  providers: []
})
export class LayoutModule {}
