const express=require("express")
const path=require("path")
const hbs=require('hbs')       //to use partials
const app=express()
const port=process.env.PORT || 3000



//public static path

const staticPath1=path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../template/views")      //veiw path
const partialPath=path.join(__dirname,"../template/partials")      //partials path
//set views for hbs-->template engine
app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partialPath)

app.use(express.static(staticPath1))



//routing
app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/about/myportpolio",(req,res)=>{
    res.send("<h1>we don't have my portpolio now!!</h1>")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render('404err',{
        errormsg:"Oops! Page Not Found"
    })
})

app.listen(port,()=>{
    console.log(`i am listening at ${port}`)
})