const express = require("express");
const livros_controller = require("../controllers/livros.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(livros_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(livros_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = livros_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = livros_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    livros_controller.destroy(req.params.id)
    res.json()
})

module.exports = router