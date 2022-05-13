import 'reflect-metadata';
import 'dotenv/config';
import "express-async-errors";

import app from "./app";
import api from '../../../config/cfg_api';

const cfg_api = api();

const port = cfg_api.API_PORT || 3000;

app.listen(port, () => console.log('Server is running on port: ' + port));
