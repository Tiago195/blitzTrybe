import express from 'express'
import user from './routers/user.routes'
import task from './routers/task.routes'
import errorGeneric from './middlewares/errorGeneric'

const app = express()
app.use(express.json())

app.use('/user', user)
app.use('/task', task)

app.use(errorGeneric)

export default app