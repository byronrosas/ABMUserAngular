import { User } from './user';

export class UserPage {
    page:number;
    per_page:number;
    total:number;
    total_pages:number;    
    data:[User];
}