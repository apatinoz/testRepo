import { Post } from "./post";
import { User } from "./user";
import { Image } from "./image"

export class Register{
    _id: string;
    date: Date;
    method:String;
    returnedData: User[] | Post[] | Image[];    
}