import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Address } from "node:cluster";
import { Company } from "./company";

export class User{

    @IsNumber()
    @IsNotEmpty()
    id:       number;

    @IsString()
    @IsNotEmpty()
    name:     string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    email:    string;

    @IsString()
    @IsNotEmpty()
    address:  Address;

    @IsString()
    @IsNotEmpty()
    phone:    string;

    @IsString()
    @IsNotEmpty()
    website:  string;

    @IsString()
    @IsNotEmpty()
    company:  Company;


   
}