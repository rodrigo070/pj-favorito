const express = require('express')
const app = express();
const port = 3000
const path = require('path')

app.use(express.static("public"))

app.get('/', (req, res)=>{res.send("estas en el Home xd")})

app.get('/prueba-html',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.listen(port,()=>{console.log(`servidor activo en el puerto ${port}\n http://localhost:${port}`)})

