const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  const animais = species.filter((specie) => ids.includes(specie.id));
  return animais;
}

module.exports = getSpeciesByIds;
