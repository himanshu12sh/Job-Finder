import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        dbName:"JOB_SEEKING",
    }).then(()=>{
        console.log("DB Connected");
    }).catch((err)=>{
        console.log(`Some error occured while connecting to database:${err}`)
    });
}