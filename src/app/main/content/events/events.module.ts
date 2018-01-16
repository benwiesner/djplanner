import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { EventsComponent } from './events.component';

const routes = [
    {
        path     : '**',
        component: EventsComponent
    }
];

@NgModule({
    declarations: [
        EventsComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        EventsComponent
    ]
})

export class EventsModule
{
}
