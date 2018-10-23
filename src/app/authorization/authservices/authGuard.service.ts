import { Injectable } from '@angular/core';
import { 
    CanActivate, 
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { CognitoUtil } from './cognitoUtil.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private cognitoUtil: CognitoUtil,
        private router: Router
    ){}


    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        const url: string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url: string){
        return true;
        // this.router.navigate(['/login']);
        // return false;
    }
}
