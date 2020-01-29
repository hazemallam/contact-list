require('express-async-errors')
const express = require('express')
const error = require('./middleware/error')
//db
require('./db/mongoose')

//routers
const userRouter = require('./routers/user')
const contactRouter = require('./routers/contact')

//app
const app = express()

//port 
port = process.env.PORT || 3000

//using routers and middlewares
app.use(express.json())
app.use(userRouter)
app.use(contactRouter)
app.use(error)

//running server
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})