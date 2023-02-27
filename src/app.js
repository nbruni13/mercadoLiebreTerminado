const express = require("express");
const app = express();

const path= require("path");

/* recursos publicos */
app.use(express.static(path.resolve(__dirname, "../public")))


app.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/registro.html"));
})


const port = process.env.PORT || 3001;
app.listen(port,()=>console.log("servidor corriendo en el puerto ${port}"));