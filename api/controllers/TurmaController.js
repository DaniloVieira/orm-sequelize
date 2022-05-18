const database = require('../models')
const {exec, queryId} = require("./utils");

class TurmaController {

  static async fetchTurmas(req, res){
    await exec(res, () => database.Turmas.findAll());
    // try {
    //   const todasAsTurmas = await database.Turmas.findAll()
    //   return res.status(200).json(todasAsTurmas)  
    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

  static async findById(req, res) {
    const { id } = req.params;
    await exec(res, () => database.Turmas.findOne(queryId(id)));
    // const { id } = req.params
    // try {
    //   const umaTurma = await database.Turmas.findOne( { 
    //     where: { 
    //       id: Number(id) 
    //     }
    //   })
    //   return res.status(200).json(umaTurma)
    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

  static async createTurma(req, res) {
    const turma = req.body;
    await exec(res, () => database.Turmas.create(turma));
    // const novaTurma = req.body
    // try {
    //   const novaTurmaCriada = await database.Turmas.create(novaTurma)
    //   return res.status(200).json(novaTurmaCriada)
    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

  static async updateTurma(req, res) {
    const { id } = req.params;
    const turma = req.body;
    const query = queryId(id);
    await exec(res, async () => {
      await database.Turmas.update(turma, query);
      const updated = await database.Turmas.findOne(query);
      return updated;
    });
    // const { id } = req.params
    // const novasInfos = req.body
    // try {
    //   await database.Turmas.update(novasInfos, { where: { id: Number(id) }})
    //   const turmaAtualizada = await database.Turmas.findOne( { where: { id: Number(id) }})
    //   return res.status(200).json(turmaAtualizada)
    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

  static async deleteTurma(req, res) {
    const { id } = req.params;
    await exec(res, async () => {
        await database.Turmas.destroy(queryId(id));
        return {message: `id: ${id}, excluído com sucesso.`};
      });
    // const { id } = req.params
    // try {
    //   await database.Turmas.destroy({ where: { id: Number(id) }})
    //   return res.status(200).json({ mensagem: `id ${id} deletado` })

    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

}

module.exports = TurmaController