const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nome: String,
  peso: { type: Number },
  altura: { type: Number },
  imc: { type: Number },
  classificacao: String,
});

const Imc = mongoose.model('Imc', DataSchema);
module.exports = Imc;
