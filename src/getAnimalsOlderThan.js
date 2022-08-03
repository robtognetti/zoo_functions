const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const busca = data.species
    .filter((specie) => specie.name === animal);
  return busca
    .every((anos, index) => anos.residents[index].age > age);
}

module.exports = getAnimalsOlderThan;
