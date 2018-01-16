import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseNavbarVerticalService } from './main/navbar/vertical/navbar-vertical.service';
import { TranslateModule } from '@ngx-translate/core';

import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ClientsModule } from './main/content/clients/clients.module';

const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: './main/content/home/home.module#HomeModule'
    },
    {
        path: 'clients',
        loadChildren: './main/content/clients/clients.module#ClientsModule'
    },
    {
        path: 'events',
        loadChildren: './main/content/events/events.module#EventsModule'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        
    ],
    imports     : [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
        FuseMainModule,
        InMemoryWebApiModule.forRoot(FuseFakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),
    ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        FuseNavbarVerticalService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
