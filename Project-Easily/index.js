import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import defaultController from "./src/controllers/default.controller.js";
import userController from "./src/controllers/user.controller.js";
import recruiterController from "./src/controllers/recruiter.controller.js";
import { validateRecruiter } from "./src/middleware/recruiter.validate.js";
import { auth } from "./src/middleware/auth.js";
import imageUpload from "./src/middleware/fileupload.middleware.js";
import { formValidation } from "./src/middleware/uploadform.validator.js";
const app = express();
app.use(urlencoded({ extended: true }));
app.use(session({
    secret: 'your-secret-key', // Replace with a random secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

app.use(express.json());
app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

const defaultC = new defaultController();
const userC = new userController();
const recruitC = new recruiterController();
app.get("/", defaultC.getLandingPage);
app.get("/jobs", userC.getJobs);
app.get("/login",recruitC.getlogin);
app.get("/register",recruitC.getRecruiterReg);
app.get("/logout",recruitC.userLogout);
app.get("/postjob",auth,recruitC.postNewjob);
app.get("/job/:id",recruitC.getjobpagelogedin);
app.get("/job/delete/:id",recruitC.deletejob);
app.get("/job/update/:id",recruitC.getUpdatejobpage);
app.get("/applicants/:id",auth,recruitC.viewapplicants);
app.post("/login",recruitC.loginRecruiter);
app.post("/register",validateRecruiter,recruitC.addRecruiterDetails);
app.post("/job",recruitC.addNewJob);
app.post("/job/update/:id",recruitC.updatejob);
app.post("/apply/:id",imageUpload.single("resume"),formValidation,userC.applyjob);
export default app;