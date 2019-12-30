import { Component, Input } from "@angular/core";
import { PhotoesInterface } from "../../core/interfaces/photoes.interface";

@Component({
  selector: "app-photoes-card",
  templateUrl: "./photoes-card.component.html",
  styleUrls: ["./photoes-card.component.scss"]
})
export class PhotoesCardComponent {
  @Input() photo: PhotoesInterface;
}
