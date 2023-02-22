const router = require("express").Router();

const ClientesRouter = require("./views/ClientesRouter")
const ProductosRouter = require("./views/ProductosRouter")

router.use('/clientes', ClientesRouter)


module.exports = router;