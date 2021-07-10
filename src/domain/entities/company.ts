import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Company {

    @IsNumber()
    @IsNotEmpty()
    name:        string;

    @IsNumber()
    @IsNotEmpty()
    catchPhrase: string;

    @IsNumber()
    @IsNotEmpty()
    bs:          string;
}
