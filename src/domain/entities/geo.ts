import { IsNotEmpty, IsNumber } from "class-validator";

export class Geo {
    @IsNumber()
    @IsNotEmpty()
    lat: string;

    @IsNumber()
    @IsNotEmpty()
    lng: string;
}