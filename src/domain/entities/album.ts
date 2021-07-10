import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Album {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    id:     number;

    @IsString()
    @IsNotEmpty()
    title:  string;
}
