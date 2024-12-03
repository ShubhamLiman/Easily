import { addRecruiter,findRecruiter,recruitDetails } from "../Models/recruiter.model.js";
import { getjobs,addJobs,findJob,deletejob ,updateJob} from "../Models/jobManager.model.js";
import { getJobsof } from "../Models/jobApplications/jobapplicant.model.js";
let jobs = getjobs();
export default class recruiterController{
    getRecruiterReg = (req,res)=>{
        res.render('recruiterRegister',{message: "",recruiter:null,login:false,jobs:jobs});
    }

    addRecruiterDetails = (req,res) =>{
        let data = req.body;
        addRecruiter(data);
        res.render("recruiterLogin",{message: "",recruiter:null,login:false,jobs:jobs})
    }

    getlogin = (req,res) =>{
        res.render("recruiterLogin",{message: "",recruiter:null,login:false,jobs:jobs})
    }

    loginRecruiter = (req,res) => {
        let data = req.body;
        let result = findRecruiter(data);
        if(result){
            const recruit = recruitDetails(data);
            req.session.recruiter = recruit;
            
            res.render("jobsPage",{message: "",recruiter:recruit,login:true,jobs:jobs});
        }
        else{
            res.send("Invalid credentials");
        }
    }

    postNewjob = (req,res) =>{
        const recruit = req.session.recruiter;
        // console.log(recruit);
        res.render("postNewJob",{message: "",recruiter:recruit,login:true,jobs:jobs});
    }

    addNewJob = (req,res) =>{
        const job = req.body;
        addJobs(job);
        const recruit = req.session.recruiter;
        // console.log(recruit);
        
        res.render("jobsPage",{message: "",recruiter:recruit,login:true,jobs:jobs});
    }
    getjobpagelogedin = (req,res)=>{
        let currjob = findJob(req.params.id);
        const isLoggedIn = req.session.recruiter !== undefined;
        res.render("jobpage", {
            message: "",
            recruiter: req.session.recruiter,
            login: isLoggedIn,
            jobs: jobs,
            currjob: currjob
        });
    }
    getUpdatejobpage = (req,res)=>{
        let currjob = findJob(req.params.id);
        const isLoggedIn = req.session.recruiter !== undefined;
        res.render("updatejobpage", {
            message: "",
            recruiter: req.session.recruiter,
            login: isLoggedIn,
            jobs: jobs,
            currjob: currjob
        });
    }
    updatejob = (req,res) =>{
        
        const jobid = req.params.id;
        const job = req.body;

        updateJob(jobid,job);
        const isLoggedIn = req.session.recruiter !== undefined;
        res.render("jobsPage", {
            message: "",
            recruiter: req.session.recruiter,
            login: isLoggedIn,
            jobs: jobs
        });
    }
    deletejob = (req,res) =>{
        // console.log(req.params.id);
        const jobid = req.params.id; 
        deletejob(jobid);
        res.render("jobspage",{message: "",recruiter:req.session.recruiter,login:true,jobs:jobs});
    }

    viewapplicants = (req,res) =>{
        const jobid = req.params.id;
        const applicants = getJobsof(jobid);
        
        const isLoggedIn = req.session.recruiter !== undefined;
        res.render("applicants", {
            message: "",
            recruiter: req.session.recruiter,
            login: isLoggedIn,
            jobs: jobs,
            applicants: applicants
        });
        
    }

    userLogout = (req, res) => {
        req.session.destroy((err) => {
          if (err) res.status(401).send(err);
          else res.redirect("/");
        });
      };
}