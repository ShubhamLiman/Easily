import { getjobs,findJob } from "../Models/jobManager.model.js";
export default class defaultController{
    getLandingPage = (req,res) => {
        let jobs = getjobs();
        const isLoggedIn = req.session.recruiter !== undefined;
        res.render("landingpage",{recruiter:req.session.recruiter,login:isLoggedIn,jobs:jobs});
    }
}