const database = require('../models')
const {exec, queryId} = require("./utils");

class NivelController {
  
  static async fetchNiveis(req, res){
    await exec(res, () => database.Niveis.findAll());
    // try {
    //   const todosOsNiveis = await database.Niveis.findAll()
    //   return res.status(200).json(todosOsNiveis)  
    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

  static async findById(req, res) {
    const { id } = req.params;
    await exec(res, () => database.Niveis.findOne(queryId(id)));
    // const { id } = req.params
    // try {
    //   const umNivel = await database.Niveis.findOne( { 
    //     where: { 
    //       id: Number(id) 
    //     }
    //   })
    //   return res.status(200).json(umNivel)
    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

  static async createNivel(req, res) {
    const nivel = req.body;
    await exec(res, () => database.Niveis.create(nivel));
    // const novoNivel = req.body
    // try {
    //   const novoNivelCriado = await database.Niveis.create(novoNivel)
    //   return res.status(200).json(novoNivelCriado)
    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

  static async updateNivel(req, res) {
    const { id } = req.params;
    const nivel = req.body;
    const query = queryId(id);
    await exec(res, async () => {
      await database.Niveis.update(nivel, query);
      const updated = await database.Niveis.findOne(query);
      return updated;
    });
    // const { id } = req.params
    // const novasInfos = req.body
    // try {
    //   await database.Niveis.update(novasInfos, { where: { id: Number(id) }})
    //   const nivelAtualizado = await database.Niveis.findOne( { where: { id: Number(id) }})
    //   return res.status(200).json(nivelAtualizado)
    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

  static async deleteNivel(req, res) {
    const { id } = req.params;
    await exec(res, async () => {
        await database.Niveis.destroy(queryId(id));
        return {message: `id: ${id}, excluído com sucesso.`};
      });
    // const { id } = req.params
    // try {
    //   await database.Niveis.destroy({ where: { id: Number(id) }})
    //   return res.status(200).json({ mensagem: `id ${id} deletado` })

    // } catch (error) {
    //   return res.status(500).json(error.message)
    // }
  }

}

module.exports = NivelController