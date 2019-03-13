import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleErrorService } from './handle-error.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MilkService {

  private apiUrl: string;

  constructor(
    private http: HttpClient,
    private hes: HandleErrorService,
    @Inject("API_URL") apiUrl: string
  ) {
    this.apiUrl = apiUrl;
  }

  public addMilk(value) {
    return this.http.post(this.apiUrl + "milk", value)
      .pipe(
        map(success => success),
        catchError(this.hes.handleError)
      );
  }
}
