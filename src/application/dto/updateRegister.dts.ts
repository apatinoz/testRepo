import { Post } from "@domain/entities/post";
import { User } from "@domain/entities/user";
import { Image } from "@domain/entities/image";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateRegisterDto{

    @IsString()
    @IsNotEmpty()
    method:String;
    
    @IsNumber()
    @IsNotEmpty()
    returnedData: User[] | Post[] | Image[];    
}