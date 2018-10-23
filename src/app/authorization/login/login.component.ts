import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '../../core/animations';
import { Router } from '@angular/router';

import { LoginService } from '../authservices/loginservice.service';
import {CognitoCallback, LoggedInCallback} from '../authservices/cognitoUtil.service';


class User {
    public username: string;
    public password: string;
}

@Component({
    selector   : 'login-component',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss'],
    animations : fuseAnimations
})
export class LoginComponent implements OnInit
{
    loginForm: FormGroup;
    loginFormErrors: any;

    errorMessage: string;

    private user = new User();

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router
    )
    {
        this.loginFormErrors = {
            username   : {},
            password: {}
        };
    }

    ngOnInit()
    {
        this.loginForm = this.formBuilder.group({
            username   : ['', Validators.required],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    onLoginFormValuesChanged()
    {
        for ( const field in this.loginFormErrors )
        {
            if ( !this.loginFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {};

            // Get the control
            const control = this.loginForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }

    onLogin(){
        Object.assign(this.user, this.loginForm.value);
        this.loginService.authenticate(this.user.username, this.user.password, this);
    }

    cognitoCallback(message: string, result: any) {  
        if (message != null) { //error
            this.errorMessage = message;
            console.log('result: ' + this.errorMessage);
            if (this.errorMessage === 'User is not confirmed.') {
                
                // TO-DO Unconfirmed Email

                console.log('Unconfirmed Email');
            
                // this.router.navigate(['/home/confirmRegistration', this.email]);
            } else if (this.errorMessage === 'User needs to set password.') {
                //To-Do Set Password
                
                console.log('Password Needs To Be Set');
                // this.router.navigate(['/home/newPassword']);

    
            } 
        }
        else{
            this.router.navigate(['']);
        }
       
    }
}
