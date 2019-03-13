import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleErrorService } from './handle-error.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private apiUrl: string;

  constructor(
    private http: HttpClient,
    private hes: HandleErrorService,
    @Inject("API_URL") apiUrl: string
  ) {
    this.apiUrl = apiUrl;
  }

  public getMemberTypes() {
    return this.http.get(this.apiUrl + "members/member-types")
      .pipe(
        map(success => success),
        catchError(this.hes.handleError)
      );
  }

  public addMember(value) {
    return this.http.post(this.apiUrl + "members", value)
      .pipe(
        map(success => success),
        catchError(this.hes.handleError)
      )
  }

  public getMembers() {
    return this.http.get(this.apiUrl + "members/members-by-dairy")
      .pipe(
        map(success => success),
        catchError(this.hes.handleError)
      )
  }
}
