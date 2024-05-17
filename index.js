//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
const app = express()

app.use(express.urlencoded({extended: true}))

app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/u/u/u/u',(req,res)=>{
    //const p = new URL('./public/index.html', import.meta.url)
    // console.log(p)
    // res.sendFile(decodeURI(p.pathname))
    const dataa = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<strong>This is some strong text</strong>",
      };
      res.locals.tttf = "ttttt"
      res.locals.fff = "fff"
    res.render('index',{dataa})
})
app.post('/u/u/u/u',(req,res)=>{
    const {fName, lName} = req.body
    const l = fName.trim().length + lName.trim().length;
    res.render('index',{dataa:{l}})
})

app.post("/check",(req,res)=>{
    const {password} = req.body
    if(password == "ILoveProgramming") {
        const p = new URL('./public/secret.html', import.meta.url)

        res.sendFile(decodeURI(p.pathname))

    } else {
        res.redirect('/')
    }
})

app.listen(3000,()=>console.log('listen at 3000'))