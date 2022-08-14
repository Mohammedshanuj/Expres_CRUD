const http = require('http');
const url = require('url');
http.createServer(function(req,res){
    //res.writeHead(200,{'Content-type':'text/html'})
    var q=url.parse(req.url,true)
    const student=[{
        id:1,
        name:"shanuj",
        age:21,
        place:'malappuram',
        batch:'cs'
    },
{
    id:2,
    name:"sarfas",
        age:19,
        place:'calicut',
        batch:'cs'
},{
    id:3,
        name:"rahul",
        age:22,
        place:'ernakulam',
        batch:'mca'
},{
    id:1,
        name:"jifrin",
        age:23,
        place:'koduvally',
        batch:'cs'
}]
    console.log("hi");
   // console.log(q);
   console.log(q.query.id);   
if(q.pathname==='/students' && q.query.id){
   const found= student.find((st)=>{
       if (st.id==q.query.id){
        return st
       }
    })
    console.log(found);   
    res.end(JSON.stringify(found))
}
else if(q.pathname==='/students'){
    res.end(JSON.stringify(student))
}
else if(q.pathname==='/batch'){
    const branch=student.filter((bh)=>{
        if(bh.batch=='cs'){
            return bh
        }
    })
    console.log(branch)
    res.end(JSON.stringify(branch))
}
else{
    res.end("no routing")
}
    
}).listen(1234);