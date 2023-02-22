const express = require("express")
const router = express.Router()

const ClientsController = require('../controllers/ClientsController')

router.get('/', ClientsController.getAllClients)
router.get('/', ClientsController.getClientByName)
router.post('/', ClientsController.addClient)

module.exports = router