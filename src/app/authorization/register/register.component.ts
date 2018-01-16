import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    AuthenticationDetails, 
    CognitoIdentityServiceProvider, 
    CognitoUser,
    CognitoUserAttribute,
    CognitoUserPool
} from 'amazon-cognito-identity-js';



class RegisterUserModel{
    userName: String;
    password: String;
}


@Component({
    selector   : 'dj-register',
    templateUrl: './register.component.html',
    styleUrls  : ['./register.component.scss']
})

export class RegisterComponent
{
    registerForm: FormGroup;
    registrationUser: RegisterUserModel;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.registerForm = fb.group({
         userName: '',
         password: ''
        });
      }

      onInit(){
          this.registrationUser = new RegisterUserModel();
         
      }
    
      onRegister(){
          console.log(this.registerForm.value);
          this.registerUser();
        console.log('Clicked Register');
      }

      registerUser(){
        const poolData = {
            UserPoolId: 'us-east-1_csVxlykxq',
            ClientId: '4688a36hoavfu52j59pjuntc99'
        };

        const userPool = new CognitoUserPool(poolData);
        const userName = this.registerForm.get('userName').value;
        const password = this.registerForm.get('password').value;
        var attrList = [];

        const dataEmail = {
            Name: 'email',
            Value: this.registerForm.get('userName').value
        };

        const attrEmail = new CognitoUserAttribute(dataEmail);

        attrList.push(dataEmail);

        userPool.signUp(userName, password, attrList, null, (err, result) => {
            if (err){
                alert(err);
                return;
            }
            const cognitoUser = result.user;
            console.log('Username is ' + cognitoUser.getUsername);
        });


      }
}
