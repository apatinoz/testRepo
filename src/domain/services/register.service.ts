import { CreateRegisterDto } from "@application/dto/createRegister.dto";
import { UpdateRegisterDto } from "@application/dto/updateRegister.dts";
import { Register } from "@domain/entities/register";
import { RegisterRepository } from "@infrastructure/data/repository/register.repository";
import { Injectable } from "@nestjs/common";



@Injectable()
export class RegisterService{

    constructor(
        private _registerRepository: RegisterRepository
    ){}

    //-------------------------------------------------------------------------------------------
    //-----------------------------Controller Services Methods ----------------------------------
    //-------------------------------------------------------------------------------------------

    async createRegister(createRegisterDto: CreateRegisterDto):Promise<Register> {
        return this._registerRepository.createRegister(createRegisterDto);
    }

    async getRegisters(): Promise<Register[]>{
        return this._registerRepository.getRegisters();
    }

    async updateRegisterById(userId:Number, updateRegisterDto: UpdateRegisterDto): Promise<any>{
        return this._registerRepository.updateRegisterById(userId, updateRegisterDto);
    }

    async deleteRegisterById(userId:Number): Promise<any>{
        return this._registerRepository.deleteRegisterById(userId);
    }

    async getOnBase64(){
        let register = await this._registerRepository.getRegisters();
        let objJsonStr = JSON.stringify(register);
        let objJsonB64 = Buffer.from(objJsonStr).toString("base64");  
        
        return {data : objJsonB64};
    }
    
}