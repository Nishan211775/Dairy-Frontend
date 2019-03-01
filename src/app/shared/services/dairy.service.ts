import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class DairyService {

  private apiUrl: string;

  constructor(
    private http: HttpClient,
    private hes: HandleErrorService,
    @Inject("API_URL") apiUrl: string
  ) {
    this.apiUrl = apiUrl;
  }

  //admin
  public addNewDairy(value) {
    return this.http.post(this.apiUrl + "dairy", value)
      .pipe(
        map(success => success),
        catchError(this.hes.handleError) // then handle the error
      );
  }

  //admin
  public getAllRequestedDairy(page, pageSize) {
    return this.http.get(this.apiUrl + "dairy/requested-dairy/" + page + "/" + pageSize)
      .pipe(
        map(success => success),
        catchError(this.hes.handleError)
      );
  }

  //dairy
  public getRequestedDairyCount() {
    return this.http.get(this.apiUrl + "dairy/requested-dairy-count")
      .pipe(
        map(success => success),
        catchError(this.hes.handleError)
      );
  }

  //admin
  public acceptDairyRequest(value) {
    return this.http.post(this.apiUrl + "account/accept-requested-dairy", value)
      .pipe(
        map(success => success),
        catchError(this.hes.handleError)
      );
  }
}
