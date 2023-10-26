import { EmailValidator } from "@angular/forms";

export interface UserInterface {
    id: number;
    username: string;
    firstname:String;
    lastname:String;
    email: EmailValidator;
    password: string;
    created_at: string;
}