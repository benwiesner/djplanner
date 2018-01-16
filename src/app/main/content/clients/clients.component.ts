import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientFormDialogComponent } from './client-form/client-form.component';
import { MatDialog } from '@angular/material';


@Component({
    selector     : 'dj-clients',
    templateUrl  : './clients.component.html',
    styleUrls    : ['./clients.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ClientsComponent implements OnInit, OnDestroy
{
    hasSelectedContacts: boolean;
    searchInput: FormControl;
    dialogRef: any;


    constructor(
        public dialog: MatDialog
    )
    {
        this.searchInput = new FormControl('');
    }

    
    newContact()
    {
        this.dialogRef = this.dialog.open(ClientFormDialogComponent, {
            panelClass: 'contact-form-dialog',
            data      : {
                action: 'new'
            }
        });

        this.dialogRef.afterClosed();
       

    }

    ngOnInit()
    {
    
    }

    ngOnDestroy()
    {
    }
    
}
