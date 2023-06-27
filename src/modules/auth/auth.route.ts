import { Route } from "@core/interfaces";
import { Router } from "express";
import AuthController from "./auth.controller";

export default class AuthRoute implements Route{
    public path = "/api/auth" //khai bao duong dan
    public router = Router()
    
    public usersController = new AuthController();

    constructor(){
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.post(this.path, this.usersController.login) //POST: http://localhost:5000/api/auth
    }
}