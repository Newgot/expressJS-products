import express from 'express'
import path from 'path'

import {routerWeb} from './routes/web.js'

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000

app.set('view engine', 'ejs')
app.use(routerWeb)


app.listen(PORT, () => {
    console.log(`Start Express from port: ${PORT}`)
})