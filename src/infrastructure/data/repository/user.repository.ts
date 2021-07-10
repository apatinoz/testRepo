import { User } from "@domain/entities/user";
import { HttpService, Injectable } from "@nestjs/common";
import { map } from "rxjs/operators";




@Injectable()
export class UserRepository {
    constructor(private readonly http: HttpService) { }

    //-------------------------------------------------------------------------------------------
    //------------------------------CRUD User Services Methods ----------------------------------
    //------------------------------------------------------------------------------------------

    async getUsers(): Promise<User[]> {
        let data  = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(map(response => response.data)).toPromise();
        return data;
    }


}