
let jobs = [
    {
        "id":1,
        "jobCategory":"Tech",
        "designation":"SDE",
        "company":"Coding Ninjas",
        "location":"Delhi",
        "salary":50000,
        "positions":5,
        "skills":["Express","React","SpringBoot","NodeJs","Angular"],
        "deudate":"2023-03-15",
        "applicants":2
    },
    {
        "id":2,
        "jobCategory":"Tech",
        "designation":"SDE",
        "company":"Barclays",
        "location":"pune",
        "salary":100000,
        "positions":3,
        "skills":["Express","React","SpringBoot","NodeJs","Angular"],
        "deudate":"2023-03-15",
        "applicants":0
    },{
        "id":3,
        "jobCategory":"Tech",
        "designation":"QA",
        "company":"Cognizent",
        "location":"Chennai",
        "salary":28000,
        "positions":100,
        "skills":["Express","React","SpringBoot","NodeJs","Angular"],
        "deudate":"2023-03-15",
        "applicants":0
    }
]
let id = 4;
export const getjobs = () =>{
    return jobs;
}

export const addJobs = (jobDetails) =>{
    const job =jobDetails;
    job.id = id;
    id++;
    console.log(job.applicants);
    
    if(!job.applicants){
        job.applicants = 0;
    }else{
        job.applicants++;
    }
    console.log(job.applicants);
    
    jobs.push(job);
    // console.log(jobDetails);
}
export const findJob = (jobId) =>{
    // console.log(typeof(jobId));
    const id = parseInt(jobId);
    if (typeof id !== 'number') {
        throw new Error('jobId must be a number');
    }
    
    const job = jobs.find(job => job.id === id);

    if (!job) {
        throw new Error(`Job with id ${jobId} not found`);
    }

    return job;
}

export const deletejob = (jobid) =>{
    const id = parseInt(jobid);
    
    if (typeof id !== 'number') {
        throw new Error('jobId must be a number');
    }
    
    const index = jobs.findIndex(job => job.id === id);
    
    if (index !== -1) {
        jobs.splice(index, 1);
    } else {
        throw new Error(`Job with id ${jobid} not found`);
    }

}

export const applyJob = (jobid) =>{
    const id = parseInt(jobid);
    
    if (typeof id !== 'number') {
        throw new Error('jobId must be a number');
    }
    
    const index = jobs.findIndex(job => job.id === id);
    
    if (index !== -1) {
        jobs[index].applicants++;
        
    } else {
        throw new Error(`Job with id ${jobid} not found`);
    }
}

export const updateJob = (jobid,data) =>{
    const id = parseInt(jobid);
    if (typeof id !== 'number') {
        throw new Error('jobId must be a number');
    }
    const index = jobs.findIndex(job => job.id === id);

    if (index === -1) {
      throw new Error(`Job with id ${jobid} not found`);
    }
  
    const job = jobs[index];
    Object.assign(job, data);
}