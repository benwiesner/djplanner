import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FuseContactsMainSidenavComponent } from './sidenavs/main/main.component';
import { ClientsComponent } from './clients.component';
import { FuseContactsContactListComponent } from './client-list/client-list.component';
import { FuseContactsSelectedBarComponent } from './selected-bar/selected-bar.component';
import { ClientFormDialogComponent } from './client-form/client-form.component';

const routes: Routes = [
    {
        path     : '**',
        component: ClientsComponent,
        resolve  : []
    }
];

@NgModule({
    imports        : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations   : [
        ClientsComponent,
        FuseContactsContactListComponent,
        FuseContactsSelectedBarComponent,
        FuseContactsMainSidenavComponent,
        ClientFormDialogComponent
    ],
    providers      : [
    ],
    entryComponents: [ClientFormDialogComponent]
})
export class ClientsModule
{
}
