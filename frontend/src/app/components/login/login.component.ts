import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallHttpService } from 'src/app/Service/call-http.service';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private callhttp: CallHttpService,
    private Token: TokenService,
    private router: Router,
    private auth: AuthService
    ) { }

  onSubmit(){
    this.callhttp.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      );
  }

  handleError(error){
    this.error = error.error.error;
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  ngOnInit() {
  }

}
