import { HttpException } from "@core/exception";
import { Logger } from "@core/utils";
import { plainToClass } from "class-transformer";
import { ValidationError, validate } from "class-validator";
import { NextFunction, Request, RequestHandler, Response } from "express";

const validationMiddleware = (type:any, skipMissingProperties = false): RequestHandler =>{
    return(req:Request, res:Response, next: NextFunction)=>{
        validate(plainToClass(type,req.body),{skipMissingProperties}).then((errors:ValidationError[])=>{
            if(errors.length >0){
                Logger.error(errors)
                const messages = errors.map((errors:ValidationError)=>{
                   return Object.values(errors.constraints!)
                }).join(", ");
                next(new HttpException(400,messages))
            }
        })
    }
}
export default validationMiddleware