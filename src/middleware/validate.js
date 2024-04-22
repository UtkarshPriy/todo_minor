// Addes just to test

const validate = (req,res,next)=>{
    if(req.body.desc.trim() == '' || req.body.category =='' || req.body.duedate == null){
        return res.status(400).json({ error: 'Please enter all details.' });
        redirect("/");
    }   
    
    else{
        next();
    }
        
};


export default validate;