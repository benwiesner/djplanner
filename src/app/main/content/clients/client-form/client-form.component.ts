import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../clients.model';

@Component({
    selector     : 'fuse-contacts-contact-form-dialog',
    templateUrl  : './client-form.component.html',
    styleUrls    : ['./client-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ClientFormDialogComponent implements OnInit
{
    event: CalendarEvent;
    dialogTitle: string;
    contactForm: FormGroup;
    action: string;
    client: Client;

    constructor(
        public dialogRef: MatDialogRef<ClientFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private formBuilder: FormBuilder
    )
    {
        this.action = data.action;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Edit Client';
            this.client = data.client;
        }
        else
        {
            this.dialogTitle = 'New Client';
            this.client = new Client({});
        }

        this.contactForm = this.createContactForm();
    }

    ngOnInit()
    {
    }

    createContactForm()
    {
        return this.formBuilder.group({
            id      : [this.client.id],
            name    : [this.client.name],
            lastName: [this.client.lastName],
            avatar  : [this.client.avatar],
            nickname: [this.client.nickname],
            company : [this.client.company],
            jobTitle: [this.client.jobTitle],
            email   : [this.client.email],
            phone   : [this.client.phone],
            address : [this.client.address],
            birthday: [this.client.birthday],
            notes   : [this.client.notes]
        });
    }
}
