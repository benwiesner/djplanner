import { Component } from '@angular/core';
import { FuseConfigService } from './../../../core/services/config.service';
import { fuseAnimations } from './../../../core/animations';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RegistrationService } from '../../authservices/registration.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from '../../models/user.model';

@Component({
    selector   : 'fuse-mail-confirm',
    templateUrl: './mail-confirm.component.html',
    styleUrls  : ['./mail-confirm.component.scss'],
    animations : fuseAnimations
})

export class MailConfirmComponent
{
    private user: User = new User();
    private confirmationForm: FormGroup;

    constructor(
        private fuseConfig: FuseConfigService,
        private route: ActivatedRoute,
        private router: Router,
        private registrationService: RegistrationService,
        private formBuilder: FormBuilder
    )         
    {
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });
        
    }

    ngOnInit(){
       this.route.queryParamMap.subscribe( params => {
        console.log(params);   
        this.user.email = params.get('email');
        this.user.username = params.get('username');
       });
    
        this.confirmationForm = this.formBuilder.group({
            confirmationCode: ''
        });
    }

    ngOnDestroy(){


    }

    verifyUser(){
        this.registrationService.verifyUser(this.user, this.confirmationForm.get('confirmationCode').value, (err, result) => {
            if (err){
                alert(err);
                return;
            }
            this.router.navigate(['/login']);

        });
    }
}
