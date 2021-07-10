import { Image } from "@domain/entities/image";
import { ImageRepository } from "@infrastructure/data/repository/images.repository";
import { Injectable } from "@nestjs/common";



@Injectable()
export class ImageService{

    constructor(
        private _imageRepository: ImageRepository
    ){}

    //-------------------------------------------------------------------------------------------
    //-----------------------------Controller Services Methods ----------------------------------
    //-------------------------------------------------------------------------------------------

    async getPosts():Promise<Image[]> {
        return this._imageRepository.getImages();
    }

    async getImagesById(id: number):Promise<Image[]> {
        return this._imageRepository.getImagesById(id);
    }

    async getImagesByAlbumId(albumId: number): Promise<Image[]> {
        return this._imageRepository.getImagesByAlbumId(albumId);
    }
    
}