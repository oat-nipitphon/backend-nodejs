const express = require("express")
const router = express.Router()

const fs = require("fs")
const path = require("path")
const filePath = path.join(__dirname, "../data/users.json")

const axios = require("axios")

router.get("/get-default", (req, res) => {
    try {
            const users = [
        { id: 1, name: "Oat", email: "oat@example.com", }, { id: 2, name: "John", email: "john@example.com", }, { id: 3, name: "Jane", email: "jane@example.com", },
    ]
    res.status(200).json({
        success: true,
        data:users,
    })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            success: false,
            message: `function get default error: ${e}`
        })
    }
})

router.get("/get-path", (req, res) => {
    try {
        const data = fs.readFileSync(filePath, "utf-8")
        const users = JSON.parse(data)
        res.status(200).json({
            success: true,
            data: users,
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            success: false,
            message: `get data users path error: ${e}`
        })
    }
})

router.get("/get-link", async(req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        res.status(200).json({
            success: true,
            message: "function get api link success.",
            data: response.data
        })
    } catch (e) {
        console.error(`function get api link error: ${e}`)
        res.status(500).json({
            success: false,
            message: `function get api link error: ${e}`
        })
    }
})

module.exports = router