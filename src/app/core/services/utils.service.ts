import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { PhotoesInterface } from "../interfaces/photoes.interface";
import { FolderTotalInterface } from "../interfaces/folder-total.interface";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  private total = new BehaviorSubject({
    files: 0,
    size: 0
  });

  getTotal(): Observable<FolderTotalInterface> {
    return this.total.asObservable();
  }

  calc(list: PhotoesInterface[]): FolderTotalInterface {
    const res = {
      files: list.length,
      size: list.reduce((sum, a) => sum + +a.size, 0)
    };
    this.total.next(res);
    return res;
  }
}
