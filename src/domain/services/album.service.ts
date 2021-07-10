import { Album } from "@domain/entities/album";
import { AlbumRepository } from "@infrastructure/data/repository/album.repository";
import { Injectable } from "@nestjs/common";



@Injectable()
export class AlbumService{

    constructor(
        private _albumRepository: AlbumRepository
    ){}

    //-------------------------------------------------------------------------------------------
    //-----------------------------Controller Services Methods ----------------------------------
    //-------------------------------------------------------------------------------------------

    async getAlbums():Promise<Album[]> {
        return this._albumRepository.getAlbum();
    }

    async getAlbumById(id: number):Promise<Album[]> {
        return this._albumRepository.getAlbumById(id);
    }

    async getAlbumByUserId(userId: number): Promise<Album[]> {
        return this._albumRepository.getAlbumById(userId);
    }
    
}