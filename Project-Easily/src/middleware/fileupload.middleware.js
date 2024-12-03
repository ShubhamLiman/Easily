import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  // Write your code here
  destination: (req, file, cb) => {
    cb(null, path.join("src", "Models","jobApplications","uploads"));
  },
  filename: (req, file, cb) => {
    // console.log(req.body);
    let userName = req.body.email || "unknown user"
    const name =Date.now()+"-"+userName+"-"+file.originalname;

    cb(null, name);
  }
});

const imageUpload =  multer({ storage });
export default imageUpload;
