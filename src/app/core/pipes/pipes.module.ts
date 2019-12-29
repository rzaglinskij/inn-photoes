import {FileSizePipe} from "./file-size.pipe";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

const pipesArr = [
 FileSizePipe,
];

@NgModule({
  imports: [CommonModule],
  declarations: pipesArr,
  exports: pipesArr,
})
export class PipesModule {
}
