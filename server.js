const express = require("express")
const userRouter = require("./routes/userRouter")
const app = express()
const PORT = 3000
app.use(express.json())
app.get("/", (req, res) => {
    res.json({
        message: "Node js Express API is Test Running!"
    })
})
app.use("/useRoutes/users", userRouter)
app.listen(PORT, () => {
    console.log(`Server Running Nodejs Express PORT::${PORT}`)
})