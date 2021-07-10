import { Post } from "@domain/entities/post";
import { User } from "@domain/entities/user";
import { Image } from "@domain/entities/image";
import * as faker from 'faker';
import { model, Schema, Document } from "mongoose";
import { CreateRegisterDto } from "@application/dto/createRegister.dto";

export class RegisterModel{

    _id: string;
    date: Date;
    method:String;
    returnedData: User[] | Post[] | Image[];    

    constructor( createRegisterDto: CreateRegisterDto){
        this._id = faker.random.uuid();
        this.date = new Date();
        this.method = createRegisterDto.method;
        this.returnedData = createRegisterDto.returnedData;
    }

    save(): RegisterModel{
        return this;
    }


}


var schema = new Schema({
    _id: { required: true, type: String},
    date: { required: true, type: Date },
    method: { required: true, unique : true, dropDups: true, type: String },
    returnedData: { required: true, unique : true, dropDups: true,  type: Array },  
    updateAt: { type: Date },    
    deleteAt: { type: Date },   
    delete: { type: Boolean },   
})
  
// register each method at schema
schema.method('foo', RegisterModel.prototype.save)

// 2) Document
export type RegisterDocument  = RegisterModel & Document;

// 3) MODEL
export const mongooseRegisterModel = model<RegisterDocument>('register', schema);