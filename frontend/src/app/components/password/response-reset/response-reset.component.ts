import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallHttpService } from 'src/app/Service/call-http.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error = [];

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }

  constructor(
    private routes: ActivatedRoute,
    private callHttp: CallHttpService,
    private router: Router,
    private Notify: SnotifyService
  ) {
    routes.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
   }

  onSubmit(){
    this.callHttp.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }
  handleResponse(data){
    let _router = this.router;
    this.Notify.confirm('Done!, Now Login with new password', {
      buttons:[
        {
          text: 'Okay',
          action: toster => {
            _router.navigateByUrl('/login'),
            this.Notify.remove(toster.id)
          }
        },
      ]
    });

  }
  handleError(error){
    this.error = error.error.errors;
  }


  ngOnInit() {
  }

}
