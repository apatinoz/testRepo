import { IsNotEmpty, IsString } from "class-validator";
import { Geo } from "./geo";

export class Address {
    @IsString()
    @IsNotEmpty()
    street:  string;

    @IsString()
    @IsNotEmpty()
    suite:   string;

    @IsString()
    @IsNotEmpty()
    city:    string;

    @IsString()
    @IsNotEmpty()
    zipcode: string;

    @IsNotEmpty()
    geo:     Geo;
}
