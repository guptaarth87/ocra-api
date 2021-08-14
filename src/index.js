const express=require("express");
const connectdb=require("./db/conn")
const mongoose=require("mongoose");
const Researcher=require("./models/Researchers")
const Blog=require('./models/Blogs')
require('dotenv').config();



const cors = require('cors');

const app = express();

app.use(cors());


app.use(express.json());
const port = process.env.PORT ;

connectdb();
//

app.post("/blogs",async (req,res)=>{
    const user= new Blog(req.body);
     console.log(req.body)
    
    try{
   
   const user= new Blog(req.body);
     console.log(req.body)
    const createUser= await user.save();
    console.log(createUser);
    res.status(201).send(createUser);
    }catch(e){res.status(400).send(e);}
   // for group of blog post
    const user2= new Groupblogx(req.body);
     console.log(req.body)
    
   
})

//
app.post("/researchers",async (req,res)=>{
    const user= new Researcher(req.body);
     console.log(req.body)
    
    try{
   
   const user= new Researcher(req.body);
     console.log(req.body)
    const createUser= await user.save();
    console.log(createUser);
    res.status(201).send(createUser);
    }catch(e){res.status(400).send(e);}
})
//for blog
app.get("/blogs", async(req,res)=>{
    try{
        console.log(Blog.find())
        const BlogData= await Blog.find();
        res.status(201).send(BlogData);
    }catch(e){
        res.status(401).send(e);
    }
})



app.get("/researchers", async(req,res)=>{
    try{
        console.log(Researcher.find())
        const ResearcherData= await Researcher.find();
        res.status(201).send(ResearcherData);
    }catch(e){
        res.status(401).send(e);
    }
})
//get by condition
app.get("/researchers/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
        Researcher.findById({_id});
        const ResearcherData=await Researcher.findById(_id);
        if(!ResearcherData){
            return res.status(404).send();
        }else{
            res.send(ResearcherData);
    }
    }catch(e){
        res.status(500).send(e)
     }
})

//delete request 

app.delete("/researchers/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteResearcher=await Researcher.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }else{
            res.send(deleteResearcher);
        }
    }catch(e){
         res.send(500).send(e)
    }
})

//updating the data
app.patch("/researchers/:id", async(req,res)=>{
    try{
      const _id=req.params.id;
      const updateResearcher=await Researcher.findByIdAndUpdate(_id,req.body,{new:true});
      res.send(updateResearcher)
    }catch(e){
         res.status(400).send(e);
    }
})


app.listen(port,()=>{
    console.log(`connection is setup at port ${port}`)
    
})