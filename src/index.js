const express = require('express')

const connect = require("./configs/db")
const teacherController = require("./controllers/teacher.controller")
const classController = require('./controllers/class.controller')
// const adminController = require("./controllers/admin.controller")
const cors = require("cors");
// const port = process.env.PORT || 2455;



const app = express()
app.use(express.json())
app.use(cors())

const { register, login } = require("./controllers/auth.controller");
app.post("/register", register);
app.post("/login", login);


app.use("/teachers", teacherController)
app.use('/classes', classController)
// app.use('/admin', adminController)

// app.listen(2455, async function () {
//     try {
//         await connect()
//         console.log(`listening on port ${port}`)
//     } catch (error) {
//         console.log('error:', error)
//     }
// })

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});