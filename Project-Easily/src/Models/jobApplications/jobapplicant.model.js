const applicants = [
    {   "name": 'John',
        "email":"johndoe@email.com",
        "contact":"7894561230",
        "applicationID":1,
        "appliedTo":1
    },
    {   "name": 'tom',
        "email":"tom@email.com",
        "contact":"7894561230",
        "applicationID":2,
        "appliedTo":1
    }
]

let applicantid = applicants.length+1;

export const getJobsof = (jobId) =>{
    const job = [];
    for(let i = 0; i < applicants.length; i++){
        if(applicants[i].appliedTo == jobId){
            job.push(applicants[i]);
        }
    }
    
    if(!job){
        return {};
    }else{
        return job;
    }
}

export const addApplicant = (jobId,data) =>{
    const applicant = {};
    applicant.name = data.name;
    applicant.email = data.email;
    applicant.contact = data.contact;
    applicant.applicationID = applicantid;
    applicant.appliedTo = jobId;
    
    applicants.push(applicant);
}