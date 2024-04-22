import todos from '../model/model.js'
import db from '../config/mongoose.js'
import todolist from '../model/list.model.js'

export default class controller {

    getHome = async (req, res, next) => {

        try {
            const list = await todolist.find({});
            res.render("home", {
                todos: list
            });
        } catch (err) {
            console.error('Error in fetching: ', err);
            next(err);
        }

    }

    addTask = async (req, res) => {
        
        
        let newtask = {
            desc: req.body.desc.trim(),
            category: req.body.category,
            duedate: req.body.duedate
        };
        
        try {
            await todolist.create(newtask);
        } catch (err) {
            console.err("Error while populating " + err);

        }
        res.redirect('/');
    }

    removeTask = async (req, res) => {

        try {
            await todolist.deleteOne({
                desc: req.body.desc.trim()
            })


        } catch (err) {
            console.error('error while deleting' + err);
        }
        
        // res.redirect('/'); // Fetch just gets data, it doesn't navigate the browser 
        res.sendStatus(200);
        


    }
}