const Imc = require('../models/imcModel');

module.exports = {
  async create(req, res) {
    const { nome, altura, peso, imc, classificacao } = req.body;
    newImc = await Imc.create({ nome, altura, peso, imc, classificacao });
    return res.status(200).json(newImc);
  },
  async imc_details(req, res) {
    const imc_details = await Imc.find();
    res.json(imc_details);
  },
  async updateImc(req, res) {
    const { _id, nome, peso, altura, imc, classificacao } = req.body;
    const data = { nome, peso, altura, imc, classificacao };
    const ImcUpdate = await Imc.findOneAndUpdate({ _id }, data, {
      new: true,
    });
    res.json(ImcUpdate);
  },
  async deleteImc(req, res) {
    const { _id } = req.params;
    const ImcDelete = await Imc.findByIdAndDelete({ _id });
    res.json(ImcDelete);
  },
};
