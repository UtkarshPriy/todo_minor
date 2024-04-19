import todos from '../model/model.js'

export default class controller{
    getHome = (req,res,next)=>{
        res.render("home",{todos:todos});
    }




}
