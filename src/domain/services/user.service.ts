import { User } from "@domain/entities/user";
import { Image } from "@domain/entities/image";
import { AlbumRepository } from "@infrastructure/data/repository/album.repository";
import { ImageRepository } from "@infrastructure/data/repository/images.repository";
import { UserRepository } from "@infrastructure/data/repository/user.repository";
import {  Injectable } from "@nestjs/common";
import { RegisterService } from "./register.service";
import { CreateRegisterDto } from "@application/dto/createRegister.dto";



@Injectable()
export class UserService{

    constructor(
        private _userRepository: UserRepository,
        private _albumRepository:AlbumRepository,
        private _imageRepository:ImageRepository,
        private _registerService: RegisterService
    ){}

    //-------------------------------------------------------------------------------------------
    //-----------------------------Controller Services Methods ----------------------------------
    //-------------------------------------------------------------------------------------------

    async getUsers():Promise<User[]> {

        let registerData: CreateRegisterDto = {
            method: "getUsers",
            returnedData: await this._userRepository.getUsers()
        }
        
        this._registerService.createRegister(registerData);

        return this._userRepository.getUsers();
    }

    async getUserImageById(userId: Number):Promise<Image[]>{

        let imageData: Image[] = [];
        let albumIds = []

        let albumsData = await this._albumRepository.getAlbumByUserId(userId);
        albumsData.forEach((album)=> {
            albumIds.push(album.id)
        });

        for(let i = 0; i< albumIds.length;i++){
            let imagesByAlbum = await this._imageRepository.getImagesByAlbumId(albumIds[i]);
            imagesByAlbum.forEach((image)=> {
                imageData.push(image)
            }) 
        }

        let registerData: CreateRegisterDto = {
            method: "getUserImageById",
            returnedData: imageData
        }

        this._registerService.createRegister(registerData);

        return imageData;
    }
    
}