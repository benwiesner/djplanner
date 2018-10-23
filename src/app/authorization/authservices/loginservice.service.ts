import { Injectable } from '@angular/core';

import {
  AuthenticationDetails, 
  CognitoIdentityServiceProvider, 
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';

import * as AWS from 'aws-sdk/global';
import * as STS from 'aws-sdk/clients/sts';

import { environment } from '../../../environments/environment';

import { User } from '../models/user.model';
import { CognitoUtil, CognitoCallback } from './cognitoUtil.service';


@Injectable()
export class LoginService {

    constructor(
        public cognitoUtil: CognitoUtil
    ){}

    authenticate(username: string, password: string, callback: CognitoCallback){
        console.log('userlogin service started');

        const authenticateData = {
            Username: username,
            Password: password
        };

        const userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };

        const authenticateDetails = new AuthenticationDetails(authenticateData);

        const cognitoUser = new CognitoUser(userData);

        cognitoUser.authenticateUser(authenticateDetails, {
           //TBD New Password
           
            onSuccess : (result) => {
                console.log('access token + ' + result.getIdToken().getJwtToken() + ' Expiration - ' + result.getAccessToken().getJwtToken());
                //Set IsLoggedIn Params

                const creds = this.cognitoUtil.buildCognitoCreds(result.getIdToken().getJwtToken());

                AWS.config.credentials = creds;

                const clientParams:any = {};
                if (environment.sts_endpoint) {
                    clientParams.endpoint = environment.sts_endpoint;
                }
                const sts = new STS(clientParams);
                sts.getCallerIdentity(function (err, data) {
                    console.log("UserLoginService: Successfully set the AWS credentials");
                    callback.cognitoCallback(null, result);
                });
            },
            onFailure: (err) => {
                callback.cognitoCallback(err.message, null);
                
            }
        });
    }
}
