import { Injectable } from '@angular/core';

import {
  AuthenticationDetails, 
  CognitoIdentityServiceProvider, 
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';


@Injectable()
export class CognitoService {

  constructor() { }

  registerUser(user, callback){

    const poolData = {
        UserPoolId: 'us-east-1_csVxlykxq',
        ClientId: '4688a36hoavfu52j59pjuntc99'
    };

    const userPool = new CognitoUserPool(poolData);
    const userName = user.name;
    const password = user.password;
    let attrList = [];

    const dataEmail = {
        Name: 'email',
        Value: user.email
    };

    const attrEmail = new CognitoUserAttribute(dataEmail);

    attrList.push(dataEmail);

    userPool.signUp(userName, password, attrList, null, (err, result) => {
      callback(err, result);
    });
  }

}
