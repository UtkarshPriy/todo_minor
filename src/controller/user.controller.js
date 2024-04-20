import todos from '../model/model.js'
import db from '../config/mongoose.js'

export default class controller {
    getHome = (req, res, next) => {
        res.render("home", {
            todos: todos
        });
    };


    addTask = (req, res) => {
        let newtask = {
            desc: req.body.name,
            categary: req.body.categary,
            duedate: req.body.duedate
        };
        console.log(newtask);
        db.todolist.push(newtask);
        res.render('home', db.todolist)
    };






}