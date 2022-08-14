const http=require('http')
const url=require('url')
http.createServer((req,res)=>{
    res.write("hi Shanuj       ")
    var q=url.parse(req.url).pathname
    console.log(q);
    var t="year= " +q.year+"month= "+q.month;
    res.end(t)
}).listen(3030)