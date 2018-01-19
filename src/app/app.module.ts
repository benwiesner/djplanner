import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { TranslateModule } from '@ngx-translate/core';

// Template Services
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseNavbarVerticalService } from './main/navbar/vertical/navbar-vertical.service';

// Authoriziation Services
import { CognitoService } from './authorization/authservices/cognito.service';

// Custom Components


const appRoutes: Routes = [
    
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'register',
        loadChildren: './authorization/register/register.module#RegisterModule'
    },
    {
        path: 'login',
        loadChildren: './authorization/login/login.module#LoginModule'
    },
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
        FuseMainModule
    ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        FuseNavbarVerticalService,
        CognitoService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
