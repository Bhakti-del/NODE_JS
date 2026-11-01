const express = require("express");
const app = express();
app.use(express.json());
let students = [
    {id:"25WH1A05K8",name:"Sai Sree",age:18},
    {id:"27WH1A05K8",name:"Sushritha",age:19}
];

//GET-Read all students
app.get("/students",(req,res)=>{
    res.json(students);
});

//POST-add a student
app.post("/students",(req,res)=>{
    students.push(req.body);
    res.send("Student added successfully");
});

//PUT-Update a student
app.put("/students/:id",(req,res)=>{
    let student=students.find(s=>s.id==req.params.id);
    if(student){
        student.name=req.body.name;
        student.age=req.body.age;
        res.send("student updated successfully");
    }
    else{
        res.send("Student not found");
    }
});

//DELETE-delete a student
app.delete("/students/:id",(req,res)=>{
    students=students.filter(s=>s.id!=req.params.id);
    res.send("Student deleted successfully");
});
app.listen(3000,()=>{
    console.log("Server running on port http://localhost:3000");
});
