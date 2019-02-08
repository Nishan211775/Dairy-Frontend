import { Component, OnInit, Inject, ViewChild, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() type: string;
  @Output() messageEvent = new EventEmitter<string>();
  @Output() loginCredentialEvent = new EventEmitter<string>();
  public loginType: string;
  public loginForm: FormGroup;
  private apiUrl: string;
  public msgText = "";
  public returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    @Inject('API_ROOT_URL') apiUrl: string,
  ) {
    this.apiUrl = apiUrl;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  ngOnInit() {
    if (this.type == "admin") {
      this.loginType = "Admin";
    } else if(this.type == "farmer") {
      this.loginType = "Farmer"
    } else if(this.type == "dairy") {
      this.loginType = "Dairy";
    } else if(this.type == "master-dairy") {
      this.loginType = "MasterDairy"
    }

    this.loginForm = this.fb.group({
      Username: [null, [Validators.required]],
      Password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  login<T>(post) {
    this.messageEvent.emit("true");
    let header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = new HttpParams()
      .append('username', post.Username)
      .append('password', post.Password)
      .append('grant_type', 'password')
      .append('client_id', 'dairy')
      .append('client_secret', 'secretdairy')
      .append('user_type', this.loginType);

    let requestBody = params.toString();

    this.http.post<T>(this.apiUrl + "connect/token", requestBody, { headers: header }).subscribe(
      res => {
        console.log(res);        
        this.messageEvent.emit("false");
        this.loginCredentialEvent.emit("true");

        var redirectUrl = "";
        sessionStorage.clear();

        if (this.type == "admin") {
          redirectUrl = "/admin/admin-dashboard";
          sessionStorage.setItem("admin-token", JSON.stringify(res));

        } else if(this.type == "farmer") {
          redirectUrl = "/farmer/farmer-dashboard";
          sessionStorage.setItem("farmer-token", JSON.stringify(res));

        } else if(this.type == "dairy") {
          redirectUrl = "/dairy/dairy-dashboard";
          sessionStorage.setItem("dairy-token", JSON.stringify(res));

        } else if(this.type == "master-dairy") {
          redirectUrl = "/master-dairy/master-dairy-dashboard";
          sessionStorage.setItem("master-dairy-token", JSON.stringify(res));
        }

        this.router.navigate([redirectUrl]);
      }, error => {
        console.log(error);
        this.messageEvent.emit("false");
        this.loginCredentialEvent.emit("false");
      }
    );
  }

}
