import { Image } from "@domain/entities/image";
import { HttpService, Injectable } from "@nestjs/common";
import { map } from "rxjs/operators";




@Injectable()
export class ImageRepository {
    constructor(private readonly http: HttpService) { }

    //-------------------------------------------------------------------------------------------
    //------------------------------CRUD User Services Methods ----------------------------------
    //------------------------------------------------------------------------------------------

    async getImages(): Promise<Image[]> {
        let data  = this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos').pipe(map(response => response.data)).toPromise();
        return data;
    }

    async getImagesById(id: number): Promise<Image[]> {
        let data  = this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photoss').pipe(map(response => response.data.filter((post) => post.id >= id ))).toPromise();
        return data;
    }

    async getImagesByAlbumId(albumId: number): Promise<Image[]> {
        let data  = this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos').pipe(map(response => response.data.filter((post) => post.albumId == albumId))).toPromise();
        return data;
    }




}