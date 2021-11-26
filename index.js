const express = require('express')
const app = express();
const requests = require('requests')
const ejs = require('ejs')
const path = require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>{
requests('https://meme-api.herokuapp.com/gimme')
.on('data',chunk=>{

    let objData= JSON.parse(chunk)
    memeurl = objData.url;
    // console.log(memeurl)
    res.render('index.ejs')
})
.on('end',()=>{
    res.end();
})
})

app.listen(80,()=>{
    console.log('running')
})