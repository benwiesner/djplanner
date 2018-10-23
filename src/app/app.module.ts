import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';

// Template Services
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseNavbarVerticalService } from './main/navbar/vertical/navbar-vertical.service';

// Authoriziation Services
import { RegistrationService } from './authorization/authservices/registration.service';
import { LoginService } from './authorization/authservices/loginservice.service';
import { AuthGuard } from './authorization/authservices/authGuard.service';
import { CognitoUtil } from './authorization/authservices/cognitoUtil.service';
 
// Custom Components
import { FuseMainComponent } from './main/main.component';
import { FuseMainModule } from './main/main.module';

const appRoutes: Routes = [

    {
        path: 'register',
        loadChildren: './authorization/register/register.module#RegisterModule'
    },
    {
        path: 'login',
        loadChildren: './authorization/login/login.module#LoginModule'
    },
    {
        path: '',
        component: FuseMainComponent,
        children: 
        [
            {
                path: 'home',
                loadChildren: './main/content/home/home.module#HomeModule'
            },
            {
                path: 'clients',
                loadChildren: './main/content/clients/clients.module#ClientsModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }

];

@NgModule({
    declarations: [
        AppComponent
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
        RegistrationService,
        LoginService,
        AuthGuard,
        CognitoUtil
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
