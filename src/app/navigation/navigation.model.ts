import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'Home',
                        'title': 'Home',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/home',
                        'badge': {
                            'title': 1,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'id'   : 'Clients',
                        'title': 'Clients',
                        'type' : 'item',
                        'icon' : 'contacts',
                        'url'  : '/clients',
                        'badge': {}
                    },
                    {
                        'id'   : 'Events',
                        'title': 'Events',
                        'type' : 'item',
                        'icon' : 'event_available',
                        'url'  : '/events',
                        'badge': {}
                    }
                ]
            }
        ];
    }
}
