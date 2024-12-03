import { getjobs } from "../Models/jobManager.model.js";
import { recruitDetails } from "../Models/recruiter.model.js";
export const auth = (req, res, next) => {
    // Write your code here
    let jobs = getjobs();

    if(req.session.recruiter){
      next();
    }else{
      res.render("errorpage",{ message: "login first to access secure page",recruiter:null,login:false,jobs:jobs});
    }
  };