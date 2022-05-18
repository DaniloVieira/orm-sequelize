const database = require("../models");
const { exec, queryId } = require("./utils");

class PessoaController {
  static async fetchPessoas(req, res) {
    await exec(res, () => database.Pessoas.findAll());
  }

  static async findById(req, res) {
    const { id } = req.params;
    await exec(res, () => database.Pessoas.findOne(queryId(id)));
  }

  static async createPessoa(req, res) {
    const pessoa = req.body;
    await exec(res, () => database.Pessoas.create(pessoa));
  }

  static async updatePessoa(req, res) {
    const { id } = req.params;
    const pessoa = req.body;
    const query = queryId(id);
    await exec(res, async () => {
      await database.Pessoas.update(pessoa, query);
      const updated = await database.Pessoas.findOne(query);
      return updated;
    });
  }

  static async deletePessoa(req, res) {
    const { id } = req.params;
    await exec(res, async () => {
      await database.Pessoas.destroy(queryId(id));
      return { message: `id: ${id}, excluído com sucesso.` };
    });
  }

  static async findMatriculaById(req, res) {
    const { idPessoa, idMatricula } = req.params;
    await exec(res, () =>
      database.Matriculas.findOne({
        where: { 
          id: Number(idMatricula), 
          estudante_id: Number(idPessoa) 
        },
      })
    );
  }

  static async createMatricula(req, res) {
    const { idPessoa } = req.params;
    const matricula = { ...req.body, estudante_id: Number(idPessoa) };
    console.log(matricula);
    await exec(res, () => database.Matriculas.create(matricula));
  }

  static async updateMatricula(req, res) {
    const { idPessoa, idMatricula } = req.params;
    const matricula = { ...req.body, estudante_id: Number(idPessoa) };
    const query = {
      where: { 
        id: Number(idMatricula), 
        estudante_id: Number(idPessoa) 
      },
    };
    await exec(res, async () => {
      await database.Matriculas.update(matricula, query);
      const updated = await database.Matriculas.findOne(query);
      return updated;
    });
  }

  static async deleteMatricula(req, res) {
    const { idMatricula } = req.params;
    await exec(res, async () => {
      await database.Matriculas.destroy(queryId(idMatricula));
      return { message: `id: ${idMatricula}, excluído com sucesso.` };
    });
  }
}

module.exports = PessoaController;
