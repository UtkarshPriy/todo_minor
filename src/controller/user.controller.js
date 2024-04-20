import todos from '../model/model.js'

export default class controller{
    getHome = (req,res,next)=>{
        res.render("home",{todos:todos});
    };

    
    addtask = (req,res)=>{
        let newtask = {
            desc: req.name,
            categary: req.categary,
            duedate: req.duedate
        };
        db.todolist.push(newtask);
        res.render('home',db.todolist)
    };






}
