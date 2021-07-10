import { CreateRegisterDto } from "@application/dto/createRegister.dto";
import { Post } from "@domain/entities/post";
import { PostRepository } from "@infrastructure/data/repository/post.repository";
import { Injectable } from "@nestjs/common";
import { RegisterService } from "./register.service";



@Injectable()
export class PostService{

    constructor(
        private _postRepository: PostRepository,
        private _registerService: RegisterService
    ){}

    //-------------------------------------------------------------------------------------------
    //-----------------------------Controller Services Methods ----------------------------------
    //-------------------------------------------------------------------------------------------

    async getPosts():Promise<Post[]> {

        let registerData: CreateRegisterDto = {
            method: "getPosts",
            returnedData: await this._postRepository.getPost()
        }

        this._registerService.createRegister(registerData);
        return this._postRepository.getPost();
    }
    
}