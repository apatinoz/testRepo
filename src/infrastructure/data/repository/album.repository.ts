import { Album } from "@domain/entities/album";
import { Image } from "@domain/entities/image";
import { HttpService, Injectable } from "@nestjs/common";
import { map } from "rxjs/operators";




@Injectable()
export class AlbumRepository {
    constructor(private readonly http: HttpService) { }

    //-------------------------------------------------------------------------------------------
    //------------------------------CRUD User Services Methods ----------------------------------
    //------------------------------------------------------------------------------------------

    async getAlbum(): Promise<Album[]> {
        let data  = this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums').pipe(map(response => response.data)).toPromise();
        return data;
    }

    async getAlbumById(id: Number): Promise<Album[]> {
        let data  = this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums/'+id).pipe(map(response => response.data)).toPromise();
        return data;
    }

    async getAlbumByUserId(UserId: Number): Promise<Album[]> {
        let data  = this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums/').pipe(map(response => response.data.filter(post => post.userId == UserId ))).toPromise();
        return data;
    }




}