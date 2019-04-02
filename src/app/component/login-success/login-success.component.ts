import { Component, OnInit, Input } from '@angular/core';
import { HttpModule, Headers, Http, Response , Request, RequestMethod} from '@angular/http';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {
	private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  request(url:string) {
    return this.http.request(new Request({
      method: RequestMethod.Get,
      url: url
    }));
  }

  getLoginSession = () => {
      let uname = window.location.href.split('?')[1].split('=')[0]
      this.http.post('http://192.168.254.115:8042/login!learningPlatformLogin.do', '', {params: {username: uname}, headers: this.headers}).subscribe(res => console.log(res))
      console.log(uname)
  }

  ngOnInit() {
  	this.getLoginSession()
  }

}

