import { FuseUtils } from '../../../core/fuseUtils';

export class Client
{
    id: string;
    name: string;
    lastName: string;
    avatar: string;
    nickname: string;
    company: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    notes: string;

    constructor(client)
    {
        {
            this.id = client.id || FuseUtils.generateGUID();
            this.name = client.name || '';
            this.lastName = client.lastName || '';
            this.avatar = client.avatar || 'assets/images/avatars/profile.jpg';
            this.nickname = client.nickname || '';
            this.company = client.company || '';
            this.jobTitle = client.jobTitle || '';
            this.email = client.email || '';
            this.phone = client.phone || '';
            this.address = client.address || '';
            this.birthday = client.birthday || '';
            this.notes = client.notes || '';
        }
    }
}
