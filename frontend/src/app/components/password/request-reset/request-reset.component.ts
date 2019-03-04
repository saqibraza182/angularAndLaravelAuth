import { Component, OnInit } from '@angular/core';
import { CallHttpService } from 'src/app/Service/call-http.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  constructor(
    private callHttp: CallHttpService,
    private notify: SnotifyService,
    private Notify: SnotifyService
  ) { }

  public form = {
    email: null
  };

  onSubmit(){
    this.Notify.info('wait...',{timeout:5000})
    this.callHttp.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res){
    this.Notify.success(res.data,{timeout:0});
    this.form.email = null;
  }

  ngOnInit() {
  }

}
