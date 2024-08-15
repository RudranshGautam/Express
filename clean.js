const http = require('http');
const express=require('express');
const clean=express();
clean.use((req,res,next)=>{
   console.log('In the middleware!'); 
   next();
});
clean.use((req,res,next)=>{
  console.log('In another middleware!');
  res.send('<h1>Hello from Express! </h1>');
});
clean.listen(3000);