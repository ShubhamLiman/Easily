import EmailValidator from 'email-validator';
export const validateRecruiter = (req,res,next) =>{
    const recruiter = req.body;
    let errors = [];
    if(!recruiter.name){
        errors.push("Nmae is required !");
    }
    if(recruiter.name.length < 3){
        errors.push("Name must be at least 3 characters long !");
    }
    if(!recruiter.email){
        errors.push("Email is required !");
    }
    if (!EmailValidator.validate(recruiter.email)) {
        errors.push("Invalid email address !");
    }
    if(!recruiter.password){
        errors.push("Password is required !");                                 
    }
    if(recruiter.password.length < 3){
        errors.push("Password must be at least 3 characters long !")
    }
    console.log(errors);
    if(errors.length > 0){
        res.status(401).send(errors);
    }else{
        
        next();
    }
}