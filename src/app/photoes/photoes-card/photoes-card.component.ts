import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PhotoesInterface} from "../../core/interfaces/photoes.interface";

@Component({
  selector: 'app-photoes-card',
  templateUrl: './photoes-card.component.html',
  styleUrls: ['./photoes-card.component.scss']
})
export class PhotoesCardComponent implements OnInit, OnChanges {

  @Input() photo: PhotoesInterface;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log(changes)
  }

  parseInt(str: string){
    return +str;
  }

}
