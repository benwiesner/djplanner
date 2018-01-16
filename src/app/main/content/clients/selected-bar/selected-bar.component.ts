import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FuseConfirmDialogComponent } from '../../../../core/components/confirm-dialog/confirm-dialog.component';

@Component({
    selector   : 'fuse-selected-bar',
    templateUrl: './selected-bar.component.html',
    styleUrls  : ['./selected-bar.component.scss']
})
export class FuseContactsSelectedBarComponent implements OnInit
{
    selectedContacts: string[];
    hasSelectedContacts: boolean;
    isIndeterminate: boolean;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    constructor(
        public dialog: MatDialog
    )
    {
        

    }

    ngOnInit()
    {
    }

    selectAll()
    {

    }

    deselectAll()
    {
    
    }

    deleteSelectedContacts()
    {
    }

}
