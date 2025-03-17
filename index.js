const express = require('express')
const app = express()
const db = require('./models')

app.use(express.json())
//Routes
const userRouter = require('./routes/user')
app.use('/user', userRouter)

const redirRouter = require('./routes/redir')
app.use('/', redirRouter)


db.sequelize.sync().then(() => {

    app.listen(3001, () => {
        console.log('server is running')
    })
})