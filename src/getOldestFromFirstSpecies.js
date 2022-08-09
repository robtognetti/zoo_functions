const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsavel = data.employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const localizaAnimais = data.species.find((animal) => responsavel === animal.id).residents;
  const idadeAnimais = localizaAnimais.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);
  return Object.values(idadeAnimais);
}

module.exports = getOldestFromFirstSpecies;
