const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
 
const router = Router()
router
 .get('/turmas', TurmaController.fetchTurmas)
 .get('/turmas/:id', TurmaController.findById)
 .post('/turmas', TurmaController.createTurma)
 .put('/turmas/:id', TurmaController.updateTurma)
 .delete('/turmas/:id', TurmaController.deleteTurma)
module.exports = router