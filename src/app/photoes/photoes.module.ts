import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoesPageComponent } from "./photoes-page/photoes-page.component";
import { PhotoesHeaderComponent } from "./photoes-header/photoes-header.component";
import { PhotoesCardComponent } from "./photoes-card/photoes-card.component";
import { PhotoesService } from "../core/services/photoes.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "../core/pipes/pipes.module";

@NgModule({
  declarations: [
    PhotoesPageComponent,
    PhotoesHeaderComponent,
    PhotoesCardComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PipesModule],
  providers: [PhotoesService]
})
export class PhotoesModule {}
