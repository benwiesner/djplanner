import { Injectable } from '@angular/core';

import { CognitoUtil } from '../../authorization/authservices/cognitoUtil.service';

@Injectable()
export class UserInfo{

    constructor(
        private cognitoUtil: CognitoUtil,
    ){}

    getUserName(): string{
        return 'string';
    }
}
