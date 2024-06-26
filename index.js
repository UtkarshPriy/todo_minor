import expressEjsLayouts from 'express-ejs-layouts';

import express, { urlencoded } from "express";
import controller from './src/controller/user.controller.js';
import path from 'path';
// import validate from './src/middleware/validate.js'
import db from './src/config/mongoose.js';


const controllerI = new controller();
const app = express();
app.use(express.static(path.join('src', 'public')));
app.use(urlencoded({ extended: true }));
app.use(urlencoded({extended: true}));
app.use(express.json());
app.get('/',controllerI.getHome);
app.post('/add', controllerI.addTask);
app.post("/remove",controllerI.removeTask);


// console.log(path.resolve('src','views'));

app.set("view engine","ejs");
app.set("views",path.resolve('src','views'));




export default app;