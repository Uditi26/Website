const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://uditis26:wFwfPzgQqy3Nc8ID@cluster0.dgvbole.mongodb.net/studentInfo")
.then(()=>{
    console.log('mongo connected');
})
.catch((e)=>{
    console.log('failed to connect');
})


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const collection=new mongoose.model('collection',studentSchema)

module.exports=collection