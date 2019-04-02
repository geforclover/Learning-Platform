import { Component, OnInit, ViewChild, ElementRef, Output} from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username: string

	@ViewChild('form') form: ElementRef
  constructor() { }

  onSubmit(form: any) {
     this.form.nativeElement.submit()
  }

  ngOnInit() {
  }

}
