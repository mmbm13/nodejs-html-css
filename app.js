const express = require('express');
const path = require('path');

const app = express();

app.set('PORT', process.env.PORT || 3000)

app.use(express.static(path.resolve(__dirname, './public')))

app.listen(app.get('PORT') , ()=>console.log(`servidor corriendo en puerto ${app.get('PORT')}`))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})