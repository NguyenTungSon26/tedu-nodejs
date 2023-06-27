import { NextFunction, Request, Response } from "express";
import AuthService from "./auth.service";
import LoginDto from "./auth.dto";
import { TokenData } from "./auth.interface";

export default class AuthController {
    private authService = new AuthService()
    // khai bao ham nac danh gan vao register   
    public login = async (req:Request, res:Response, next: NextFunction)=>{
        try {
            const model: LoginDto = req.body;
            const tokenData: TokenData = await this.authService.login(model)
            // da created
            res.status(200).json(tokenData)
        } catch (error) {
            next(error)
        }
    }
}