const express = require("express");
const { path } = require("express/lib/application");
const verification = require("./verification");
const app = express();
const port = 5000;
// const nav_path = require('compo_html/nav.html')

app.use(verification)

// app.get('/', (req,res)=>{
//     res.sendFile(nav_path)
// })
app.use(express.static('compo_html'))

app.get('*', (req,res)=>{
    res.send('e5dem 3ala rou7ek',)
})

app.listen(port,()=>{
    console.log(`the server ye5dem 3ala rou7ou'+ 'open you browser on localhost:${port}`)
})
