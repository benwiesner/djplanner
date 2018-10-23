import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {
  AuthenticationDetails, 
  CognitoIdentityServiceProvider, 
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';

const uuid = require('uuid/v1');

import { environment } from '../../../environments/environment';

import { User } from '../models/user.model';


const poolData = {
  UserPoolId: environment.userPoolId,
  ClientId: environment.clientId
};

@Injectable()
export class RegistrationService {

  private userPool = new CognitoUserPool(poolData);

  private uui = uuid();

  constructor() { }
  
  // TO-DO, Username Backup Call
  private newUser = new User('', '', '');
  private userMessage = new BehaviorSubject<User>(this.newUser);
  public currentUser = this.userMessage.asObservable();
  transferUser(user: User){
    this.userMessage.next(user);
  }
  
  // Register New User
  registerUser(user: User, callback){
    
    const username = user.username;
    const password = user.password;
    const attrList = [];

    const dataEmail = {
        Name: 'email',
        Value: user.email
    };

    // Set Tenant UUID
    const tenantID = {
      Name: 'custom:tenantID',
      Value: this.uui
    };

    const attrEmail = new CognitoUserAttribute(dataEmail);
    const attTenantID = new CognitoUserAttribute(tenantID);

    attrList.push(dataEmail, attTenantID);

    this.userPool.signUp(username, password, attrList, null, (err, result) => {
      callback(err, result);
    });
  }

  // Email Verification for User
  verifyUser(user: User, code, callback) {
    const userPool = new CognitoUserPool(poolData);

    const username = user.username;
    const confirmationCode = code.confirmationCode;

    const userData = {
      Username: username,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, (err, result) => {
      callback(err, result);
    });
  }
}


