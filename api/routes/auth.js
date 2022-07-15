import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, auth endpoint")
})

router.get("/register", (req, res) => {
    res.send("Hello, auth register endpoint")
})

export default router;