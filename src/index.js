const express = require("express")
const livros_router = require("./routes/livros.js")
const estudante_router = require("./routes/estudante.js")
const aluguel_router = require("./routes/aluguel.js")
const app = express()
const port = 4000

app.use("/aluguel", aluguel_router)
app.use("/estudante", estudante_router)
app.use("/livros", livros_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})