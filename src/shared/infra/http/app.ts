import {initializeDatabase} from "../typeorm";
import express from "express";
import mainRouter from "./routes";
import api from "../../../config/cfg_api";
import '../../container';

initializeDatabase();

const app = express();
const cfg_api = api();

app.use(express.json());

app.use(cfg_api.API_BASEURL, mainRouter);

export default app;