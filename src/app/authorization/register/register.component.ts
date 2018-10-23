import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '../../core/animations';

import { RegistrationService } from '../authservices/registration.service';
import { Router } from '@angular/router';

import { User } from '../models/user.model';

@Component({
    selector   : 'dj-registration',
    templateUrl: './register.component.html',
    styleUrls  : ['./register.component.scss'],
    animations : fuseAnimations
})
export class RegistrationComponent implements OnInit
{
    registerForm: FormGroup;
    registerFormErrors: any;

    constructor(
        private formBuilder: FormBuilder,
        private registrationService: RegistrationService,
        private router: Router
    )
    {
    this.registerFormErrors = {
            name           : {},
            email          : {},
            password       : {},
            passwordConfirm: {}
        };
    }

    ngOnInit()
    {
        this.registerForm = this.formBuilder.group({
            username           : ['', Validators.required],
            email          : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPassword]],
            termsAndConditions : [false, [Validators.required]]
        });

        this.registerForm.valueChanges.subscribe(() => {
            this.onRegisterFormValuesChanged();
        });
    }

    onRegisterFormValuesChanged()
    {
        for ( const field in this.registerFormErrors )
        {
            if ( !this.registerFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.registerFormErrors[field] = {};

            // Get the control
            const control = this.registerForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.registerFormErrors[field] = control.errors;
            }
        }
    }

    // Create New User
    onRegister(){
        
        const registeredUser = new User();

        // Assign DOM to Data Model
        Object.assign(registeredUser, this.registerForm.value);
    
       this.registrationService.registerUser(this.registerForm.value, (err, result) =>
            {
                if (err) {
                    console.log(err);
                    // TODO - Add Error Message Service
                    return;
                }
                console.log('redirecting...');

                 // Transfer Data To Confirmation Observable
                this.registrationService.transferUser(registeredUser);

                // Navigate To Confirmation Page
                this.router.navigate(['/register/confirm'], {queryParams: {email: registeredUser.email, username: registeredUser.username}});
            });
    }
}

function confirmPassword(control: AbstractControl)
{
    if ( !control.parent || !control )
    {
        return;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return;
    }

    if ( passwordConfirm.value === '' )
    {
        return;
    }

    if ( password.value !== passwordConfirm.value )
    {
        return {
            passwordsNotMatch: true
        };
    }
}
