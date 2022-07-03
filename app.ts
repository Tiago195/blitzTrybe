import express from 'express'
import user from './routers/user.routes'
import task from './routers/task.routes'

const app = express()
app.use(express.json())

app.use('/user', user)
app.use('/task', task)

export default app