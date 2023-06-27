import { IndexRoute } from '@modules/index';
import "dotenv/config"
import App from "./app";
import { validateEnv } from '@core/utils';
import { Router } from 'express';
import UsersRoute from '@modules/users/user.route';

validateEnv();
const routes = [new IndexRoute(), new UsersRoute()]
const app = new App(routes)

app.listen()