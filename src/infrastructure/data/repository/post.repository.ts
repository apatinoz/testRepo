import { Post } from "@domain/entities/post";
import { HttpService, Injectable } from "@nestjs/common";
import { map } from "rxjs/operators";




@Injectable()
export class PostRepository {
    constructor(private readonly http: HttpService) { }

    //-------------------------------------------------------------------------------------------
    //------------------------------CRUD User Services Methods ----------------------------------
    //------------------------------------------------------------------------------------------

    async getPost(): Promise<Post[]> {
        let data  = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(response => response.data)).toPromise();
        return data;
    }


}