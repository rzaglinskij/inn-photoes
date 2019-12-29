import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs/internal/Subject";

@Component({
  selector: "app-photoes-header",
  templateUrl: "./photoes-header.component.html",
  styleUrls: ["./photoes-header.component.scss"]
})
export class PhotoesHeaderComponent implements OnInit, OnDestroy {
  @Output() filterChanged = new EventEmitter();

  ngOnDestroy$ = new Subject<boolean>();

  photoesFilterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.photoesFilterForm = this.formBuilder.group({
      filterBy: [],
    });
  }

  ngOnInit() {
    this.photoesFilterForm.valueChanges
      .pipe(
        takeUntil(this.ngOnDestroy$),
        tap((value) => {
          this.filterChanged.emit(value);
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }
}
