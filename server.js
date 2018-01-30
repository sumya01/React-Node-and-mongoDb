import express from 'express';
import config from './config';
import fs from 'fs';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');

server.get('/',(req,res)=>{
    res.render('index',{
        //content:'Hello Express and <em>EJS</em>!'
        content:'...'
    });
});

server.use('/api',apiRouter);
server.use(express.static('public'));


// server.get("/about.html",(req,res)=>{
//     fs.readFile('./about.html',(err,data) => {
//         res.send(data.toString());
//     });
// });

server.listen(config.port, ()=>{
    console.log("Express listening on port ", config.port);
});




// // import config,{ nodeEnv,logFile } from './config';
// // import https from 'https';

// // https.get('https://www.lynda.com',res =>{
// //     console.log('Response status code', res.statusCode);

// //     res.on('data',chunk =>{
// //         console.log(chunk.toString());
// //     });
// // });

// // console.log(config,nodeEnv);
// //  logFile("sumit");

// import http from 'http';
// import { setTimeout } from 'timers';

// const server = http.createServer((req,res) =>{
//     res.write("Hello HTTP!\n");
//     setTimeout(()=>{
//         res.write("I can stream!\n");
//         res.end();
//     },3000);
// }
// )
// // server.on('request', (req,res) =>{
// //     res.write("Hello HTTP!\n");
// //     setTimeout(()=>{
// //         res.write("I can stream!\n");
// //         res.end();
// //     },3000);
// // });

// server.listen(8080);
