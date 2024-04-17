// const express = require('express');
import expressEjsLayouts from 'express-ejs-layouts';
// import expressEjsLayouts from "express-ejs-layouts";

import express, { urlencoded } from "express";
import controller from './src/controller/user.controller.js';
import path from 'path';


const controllerI = new controller();

const app = express();
app.use(urlencoded({extended: true}));
app.use(express.json());
app.get('/',controllerI.getHome);


// console.log(path.resolve('src','views'));

app.set("view engine","ejs");
app.set("views",path.resolve('src','views'));




export default app;