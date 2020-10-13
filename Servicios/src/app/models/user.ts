import { address } from './address';

export class user {
    id: number;
    username: string;
    name: string;
    email: string;
    address: address;

    constructor()
    {
        this.address = new address();
    }
}