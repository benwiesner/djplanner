import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'app/core/modules/shared.module';
import { LoginComponent } from './login.component';

const appRoutes: Routes = [
    {
        path: '**',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(appRoutes)
    ],
    exports     : [
        LoginComponent
    ]
})

export class LoginModule
{
}
