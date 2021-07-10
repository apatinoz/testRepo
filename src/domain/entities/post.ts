import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Post {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    id:     number;

    @IsString()
    @IsNotEmpty()
    title:  string;

    @IsString()
    @IsNotEmpty()
    body:   string;
}
