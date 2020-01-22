import { User } from './user';

export class UserPage {
    page:Number;
    per_page:Number;
    total:Number;
    total_pages:Number;    
    data:[User];
}