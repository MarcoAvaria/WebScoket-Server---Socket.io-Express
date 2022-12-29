import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { Servidor } from "./models/server.js";

const server = new Servidor();


server.listen();