import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector   : 'dj-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss']
})

export class LoginComponent
{
    loginForm: FormGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.loginForm = fb.group({
         userName: '',
         password: ''
        });
      }
}
