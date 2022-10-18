const express=require('express');
const connecterDB=require('./config/db.js');
const MaterialRouter=require('./routes/material');
// const User=require('./models/User');
// const bodyparser=require('body-parser');
const cors=require('cors');
//creation serveur 
const app=express();
//connecter a la base 
app.use(cors());
app.use(express.json());
app.use('/api/materials',MaterialRouter);

// routes
app.use('/api', require('./routes/index'));

// app.use(bodyparser.json());
connecterDB();
app.listen(4001,()=>{
console.log('le service est executable');
}) 
// app.post('/register',(req,res)=>{
//     const FirstName=req.body.FirstName;
//     const LastName=req.body. LastName;
//     const Email=req.body.Email;
//     const Password=req.body.Password;

//     const user=new User();
//  user.FirstName=FirstName;
//  user.LastName=LastName;
//  user.Email=Email;
//  user.Password=Password;
 
//  user.save((err,result)=>{
//     if(err){
//     console.log("there is an error in adding user in database ");
//     res.sendStatus(500);}
//     res.sendStatus(200);
//  })
//})