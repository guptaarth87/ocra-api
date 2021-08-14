const mongoose =require("mongoose");
const validator =require("validator");

const ResearcherSchema= new mongoose.Schema({
    name:{
        type:String,
        requires:true,
        minlength:3
    },

    email:{
        type:String,
        required:true  
    },
   
    message:{
            type:String,
            required:true
        }
    
})

const Researcher=new mongoose.model("Researcher",ResearcherSchema);
module.exports=Researcher;