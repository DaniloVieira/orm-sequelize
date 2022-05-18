const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get('/pessoas', PessoaController.fetchPessoas);
router.get('/pessoas/:id', PessoaController.findById);
router.post('/pessoas', PessoaController.createPessoa);
router.put('/pessoas/:id', PessoaController.updatePessoa);
router.delete('/pessoas/:id', PessoaController.deletePessoa);
router.get('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.findMatriculaById);
router.post('/pessoas/:idPessoa/matricula', PessoaController.createMatricula);
router.put('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.updateMatricula);
router.delete('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.deleteMatricula);

module.exports = router;
