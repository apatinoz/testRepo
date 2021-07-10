import { REGISTER_MODEL_PROVIDER } from "@constants";
import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { mongooseRegisterModel, RegisterModel} from "@infrastructure/data/models/user.model";
import { CreateRegisterDto } from "@application/dto/createRegister.dto";
import { Register } from "@domain/entities/register";
import { UpdateRegisterDto } from "@application/dto/updateRegister.dts";



@Injectable()
export class RegisterRepository {
    
    constructor(@Inject(REGISTER_MODEL_PROVIDER) private model:RegisterModel) {}

    //-------------------------------------------------------------------------------------------
    //--------------------------------CRUD Register  Methods ------------------------------------
    //-------------------------------------------------------------------------------------------

    async createRegister(createRegisterDto: CreateRegisterDto): Promise<any>{

        try{

            console.log(createRegisterDto)
            let newRegister = new RegisterModel(createRegisterDto);

            mongooseRegisterModel.create(newRegister, function (error, result) {
                if (error) throw new BadRequestException(error.message);
                console.log(result)
            });

 
            return{
                "code": 200,
                "success": true,
                "payload": {
                    "message": "La pagina fue creada creada exitosamente"
                }
            }
        }
        catch (error) {
            return {
                "code": 403,
                "success": false,
                "payload": {
                    "message": "La pagina no fue creada creada"
                }

            } 
        }   

    }

   async getRegisters(): Promise<Register[]>{

        try{
            let registers = await mongooseRegisterModel.find({},(err) => {
                if (err)throw new BadRequestException(err.message);
            });

            return registers
        }
        catch (error) {
            return null
        }   

    } 

    

    async updateRegisterById(_id:Number, updateRegisterDto: UpdateRegisterDto): Promise<any>{

        try{
            let updateObject = {'$set': { 
                    "method" : updateRegisterDto.method,
                    "returnedData" : updateRegisterDto.returnedData,
                    "updateAt" : new Date()
                }
            };
            await mongooseRegisterModel.updateOne({"_id" : _id}, updateObject, {}, (err, doc) => {
                if (err)throw new BadRequestException(err.message);
            });

            return{
                "code": 200,
                "success": true,
                "payload": {
                    "message": "El registro fue modificada exitosamente"
                }
            }
        }
        catch (error) {
            return {
                "code": 403,
                "success": false,
                "payload": {
                    "message": "No se puedieron realizar cambios sobre el registro"
                }

            } 
        }   

    }

    async deleteRegisterById(_id:Number): Promise<any>{
        try{

            let updateObject = {
                '$set': { 
                    "deleteAt" : new Date(),
                    "delete":true
                }
            };

            mongooseRegisterModel.findOneAndUpdate({"_id" : _id},updateObject,{},(err, doc) => {
                if (err)throw new BadRequestException(err.message);
            });

            return {
                "code": 203,
                "success": true,
                "payload": {
                    "message": "Se elimino correctamente los datos del sistema"
                }
            } 

        }
        catch (error) {
            return {
                "code": 403,
                "success": false,
                "payload": {
                    "message": "Lo sentimos tenemos un inconvienete al eliminar los datos del sistema"
                }
            } 
        } 
    }


}