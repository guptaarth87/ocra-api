const mongoose=require("mongoose");
require('dotenv').config();

mongo_url=process.env.MONGODB_URL
const connectdb=async() => {
    const conn=mongoose.connect(mongo_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection is succesfull");
}).catch((e)=>{
    console.log("no connection");
})
}
module.exports=connectdb;