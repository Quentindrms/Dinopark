import { Express } from "express";
import router from "./routes/"
import {fileURLToPath} from "node:url";
import path from "node:path";
import cookieParser from "cookie-parser";

const express = require('express');
const app = express();
const PORT = 3000;
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const methodOverride = require('method-override'); 

app.set('view engine', 'ejs');
app.set('views', path.join(_dirname, "views"));

app.use(methodOverride('_method')); //Permet l'utilisation des méthodes PUT et DELETE
app.use(cookieParser());
app.use(express.static(path.join(_dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use("/", router)

app.listen(PORT, () => {
    console.log(`Currently running on port ${PORT}`);
})