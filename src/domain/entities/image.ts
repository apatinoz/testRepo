import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Image {

    @IsNumber()
    @IsNotEmpty()
    albumId:      number;

    @IsNumber()
    @IsNotEmpty()
    id:           number;

    @IsNumber()
    @IsNotEmpty()
    title:        string;

    @IsString()
    @IsNotEmpty()
    url:          string;

    @IsString()
    @IsNotEmpty()
    thumbnailUrl: string;
}