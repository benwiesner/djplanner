import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/core/modules/shared.module';
import { LoginComponent } from './login.component';



@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        SharedModule
    ],
    exports     : [
        LoginComponent
    ]
})

export class LoginModule
{
}
