const express =require('express');
const MOCK=require('./mocki')
const data = MOCK.products;
console.log(data.length)
const PORT= 3001;

const app=express();
app.use(express.json())
//sample read all products
app.get('/api/v1/products',(req,res)=>{
    res.json({
        data:data,
        results:data.length,
        reqat:Date.now()})
    
})
//CCCCCCC
//Creating data to base........
app.post('/api/v1/products',(req,res)=>{
    data.push({...req.body,id:data.length+1})
    res.status(201).json({
        results:data.length,
        data:req.body
    }) 
})
//RRRRRR
//Data reading........
app.get('/api/v1/products/:id',(req,res)=>{
    const filtered=data.find((ele)=>{
        return ele.id==req.params.id
    })
    res.json({
        data:filtered?filtered:res.status(404).json({message:"not data found"})  
    }) 
})
//UUUUU
//updating data
app.put('/api/v1/products/:id',(req,res)=>{
    const index=data.findIndex((ele)=>{
       return ele.id==req.params.id
    })
    if (index!==-1){
        data[index]={...data[index],...req.body}
        res.status(204).json({
        messages:"updated",
        })}
    else{
        res.json({
            messages:"requested id is not found"})
    } 
})
//DDDDDD
//deleting data........
app.delete('/api/v1/products/:id',(req,res)=>{
    const index=data.findIndex((ele)=>{
       return ele.id==req.params.id
    })
    if (index!==-1){
        const dat=data.splice(index,1)
        res.status(204).json({
        messages:"removed",
        data:dat,
        results:dat.length,
        })}
    else{
        res.json({
            messages:"requested id is not found"})
    }   
}) 
app.listen(PORT,()=>{
    console.log(`listening to server`)
})

