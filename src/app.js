import express from 'express'
import { apiRouter } from './routes/api.router.js'

const app = express()

app.use(express.urlencoded({extended:true}))

app.use('/api', apiRouter)

app.listen(8080, ()=>{
    console.log('escuchado')
})
