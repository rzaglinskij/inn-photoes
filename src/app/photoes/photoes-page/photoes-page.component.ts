import { Component, OnDestroy, OnInit } from "@angular/core";
import { PhotoesService } from "../../core/services/photoes.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs/internal/Subject";
import { PhotoesInterface } from "../../core/interfaces/photoes.interface";
import { UtilsService } from "../../core/services/utils.service";

@Component({
  selector: "app-photoes-page",
  templateUrl: "./photoes-page.component.html",
  styleUrls: ["./photoes-page.component.scss"]
})
export class PhotoesPageComponent implements OnInit, OnDestroy {
  public photoesList: PhotoesInterface[] = [];
  public photoesListFiltered: PhotoesInterface[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private _photoes: PhotoesService, private _utils: UtilsService) {}

  ngOnInit() {
    this._photoes
      .getList()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: PhotoesInterface[]) => {
        this.photoesList = data;
        this._utils.calc(data);
        this.applyFilter(null);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  applyFilter(value) {
    this.photoesListFiltered = this.photoesList;
    for (const filter in value) {
      if (value.hasOwnProperty(filter)) {
        switch (value[filter]) {
          case "name":
            this.photoesListFiltered = this.photoesList.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            break;
          case "size":
            this.photoesListFiltered = this.photoesList.sort(
              (a, b) => a.size - b.size
            );
            break;
          case "modified":
            this.photoesListFiltered = this.photoesList.sort(
              (a, b) => +b.modified - +a.modified
            );
            break;
        }
      }
    }
  }
}
