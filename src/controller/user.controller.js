import todos from '../model/model.js'

export default class controller{
    getHome = (req,res,next)=>{
        res.render("home",{todos:todos});
    }
    test = (req,res)=>{
        console.log('check');
        res.render('testing');

    };




}
