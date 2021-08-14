const mongoose =require("mongoose");
const validator =require("validator");

const BlogSchema= new mongoose.Schema({
    image_url:{
        type:String,
        requires:true,
        
    },
    heading:{
        type:String,
        requires:true,
    },
    text:{
        type:String,
        requires:true,
       
    },
   
    date:{
            type:String,
            required:true
        },
    author:{
            type:String,
            requires:true,
        }
    
    
})

const Blog=new mongoose.model("Blog",BlogSchema);

module.exports=Blog;
// module.exports=Groupblog;