import {initializeDatabase} from "../typeorm";
import express from "express";
import mainRouter from "./routes";
import api from "../../../config/cfg_api";
import '../../container';

initializeDatabase()
    .then(() => console.log("Data Source has been initialized!"))
    .catch(err => console.error("Error during Data Source initialization", err));

const app = express();
const cfg_api = api();

app.use(express.json());

app.use(cfg_api.API_BASEURL, mainRouter);

export default app;