
let recruitArr = [
    {
        "email":"shubhamliman8445@gmail.com",
        "name":"Shubham",
        "password":"123456"
    }
]
export const addRecruiter = (recruiter) =>{
    let recrutObj = recruiter;
    recruitArr.push(recrutObj);
    // console.log(recruitArr);
}

export const findRecruiter = (recruiter) =>{
    let recrutObj = recruiter;
    for(let i = 0; i < recruitArr.length; i++){
        if(recruitArr[i].email === recrutObj.email && recruitArr[i].password === recrutObj.password){
            return true;
        }
    }
    return false;
}

export const recruitDetails = (recruiter) =>{
    let recrutObj = recruiter;
    for(let i = 0; i < recruitArr.length; i++){
        if(recruitArr[i].email === recrutObj.email && recruitArr[i].password === recrutObj.password){
            return recruitArr[i];
        }
    }
    return null;
}


