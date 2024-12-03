import nodemailer from 'nodemailer';
import { getjobs,findJob,applyJob} from "../Models/jobManager.model.js";
import { addApplicant } from "../Models/jobApplications/jobapplicant.model.js";
let jobs = getjobs();
export default class userController{
    getJobs = (req,res)=> {
        res.render("jobsPage",{recruiter:null,login:false,jobs:jobs})
    }
    applyjob = (req,res) =>{
        const{name,email,contact} = req.body;
        const jobid = req.params.id;
        applyJob(jobid);
        addApplicant(jobid,{name,email,contact});
        this.sendMail(email);
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
    sendMail = (email) =>{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'codingninjas2k16@gmail.com',
              pass: 'slwvvlczduktvhdj'
              }
          })
         
        const sendMail = {
            from: 'codingninjas2k16@gmail.com',
            to: email,
            subject: 'Job Application',
            text: 'You have applied for the job successfully'
        }
        try{
            const result = transporter.sendMail(sendMail);
        }catch(err){
            console.log(err + "mail not sent");
        }
    }
}