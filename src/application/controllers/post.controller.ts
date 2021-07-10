import { Post } from "@domain/entities/post";
import { PostService } from "@domain/services/post.service";
import { Controller, Get } from "@nestjs/common";

@Controller('api/v1/post')
export class PostController{
	constructor(private readonly _postService: PostService) {}

	//-------------------------------------------------------------------------------------------
    //-------------------------------CRUD Controller Methods ------------------------------------
    //-------------------------------------------------------------------------------------------

	@Get()
	async getPosts(): Promise<Post[]>{
		return await this._postService.getPosts();
	}


}