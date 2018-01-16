import { Component, OnDestroy } from '@angular/core';


@Component({
    selector   : 'fuse-contacts-main-sidenav',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class FuseContactsMainSidenavComponent implements OnDestroy
{
    user: any;
    filterBy: string;


    constructor()
    {
       
    }

    changeFilter(filter){
   
    
    }

    ngOnDestroy()
    {
     
    }
}
