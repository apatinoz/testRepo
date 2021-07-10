import { UserService } from "@domain/services/user.service";
import { Body, Controller, UseGuards, Headers, Patch, Delete, Get, Param } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";

@Controller('api/v1/user')
export class UserController{
	constructor(private _userService: UserService) {}

	//-------------------------------------------------------------------------------------------
    //-----------------------------CRUD User Controller Methods ---------------------------------
    //-------------------------------------------------------------------------------------------
    @Get('')
    loginUser() {
        return this._userService.getUsers();
    }

	@Get('image/:id')
    images(@Param('id')userId:Number) {
        return this._userService.getUserImageById(userId);
    }

}