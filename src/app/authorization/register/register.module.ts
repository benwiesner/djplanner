import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/core/modules/shared.module';
import { RegisterComponent } from './register.component';



@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports     : [
        SharedModule
    ],
    exports     : [
        RegisterComponent
    ]
})

export class RegisterModule
{
}
