import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { PhotoesInterface } from "../interfaces/photoes.interface";

@Injectable({
  providedIn: "root"
})
export class PhotoesService {
  private REST_API_SERVER = "http://localhost:3001/api/photoes";
  private numberOfRetries = 1;

  constructor(private httpClient: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown error!";
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getList() {
    return this.httpClient
      .get<PhotoesInterface[]>(this.REST_API_SERVER + "/")
      .pipe(
        retry(this.numberOfRetries),
        catchError(this.handleError)
      );
  }
}
