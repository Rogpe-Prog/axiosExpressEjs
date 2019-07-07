const express = require('express')
const app = express()

const axios = require('axios')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async (req,res)=>{
    await axios.get('https://reqres.in/api/users')
          .then(res=> {
              data = res.data.data
          })
    res.render('home', { data })
})

app.listen(3000,()=> {
    console.log('Express online')
})

