import { UpdateRegisterDto } from "@application/dto/updateRegister.dts";
import { Post } from "@domain/entities/post";
import { Register } from "@domain/entities/register";
import { PostService } from "@domain/services/post.service";
import { RegisterService } from "@domain/services/register.service";
import { Body, Controller, Delete, Get, Param, Patch, Put } from "@nestjs/common";

@Controller('api/v1/register')
export class RegisterController{
	constructor(private readonly _registerService: RegisterService) {}

	//-------------------------------------------------------------------------------------------
    //-------------------------------CRUD Controller Methods ------------------------------------
    //-------------------------------------------------------------------------------------------

	@Get()
	getRegisters(): Promise<Register[]>{
		return this._registerService.getRegisters();
	}

    @Patch(':id')
    images(@Param('id')registerId:Number, @Body() updateRegisterDto:UpdateRegisterDto) {
        return this._registerService.updateRegisterById(registerId,updateRegisterDto );
    }

    @Delete(":id")
    deleteRegisterById(@Param('id')registerId:Number){
        return this._registerService.deleteRegisterById(registerId);
    }

    @Get("base64")
    getOnBase64(){
        return this._registerService.getOnBase64();
    }


}