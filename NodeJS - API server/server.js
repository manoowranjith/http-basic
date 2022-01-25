const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}) )

app.use(cors(
    {
        origin: "*",
    }
))
var details ={
    title : "Http-Basics"
}
app.listen(3001,()=>{
    console.log("Port 3001 is running")
})

app.get('/',(req,res)=>{
    res.json({requestType:"GET", response:"200", title:details.title})
})

app.post('/',(req,res)=>{
    res.json({requestType:"POST", response:"200", postedTitle:req.query.title, title:details.title})
})
app.put('/:id',(req,res)=>{
    details.title=req.params.id;
    res.json({requestType:"PUT", response:"200", replacingTitle:req.params.id, title:details.title})
})
app.all('*', function(req, res) {
    res.json({response:"404" , title:"Bad Request"})
})