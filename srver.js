
const http = require('http') ;

const server = http.createServer((req, res)=>{
    if (req.url === '/send' && req.method === 'POST') {


        const body = [] ;
        req.on('data', (chunks)=>{
            console.log(chunks,'this is chunks data ');
            body.push(chunks);
        }) ;
        req.on('end', ()=>{
            const fullBody  = Buffer.concat(body).toString() ;
            // console.log(fullBody);
            const params = new URLSearchParams(fullBody) ;
            // console.log(params);
            const bodyObject = {} ;

            for(const [key, val] of  params.entries()){
                bodyObject[key] = val ;

            } ;
            console.log(bodyObject,'this is bodyObject ');
        
        })
    }
}) ;

server.listen(4000, ()=>{
    console.log(`server is running 4000 PORT`);
})