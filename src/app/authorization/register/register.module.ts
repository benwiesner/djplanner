import { NgModule } from '@angular/core';
import { SharedModule } from 'app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './register.component';

const appRoutes: Routes = [
  
    {
        path: 'confirm',
        loadChildren: './mail-confirm/mail-confirm.module#MailConfirmModule'
    },
    {
        path     : '**',
        component: RegistrationComponent
    },
];

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(appRoutes)
    ]
})

export class RegisterModule
{

}
