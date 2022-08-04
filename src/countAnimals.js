const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species
      .reduce((acc, curr) => {
        acc[curr.name] = curr.residents.length;
        return acc;
      }, {});
  }
  const animais = species
    .find((animals) => animals.name === Object.values(animal)[0]);
  if (!animal.sex) {
    return animais.residents.length;
  } if (animal.sex === 'female') {
    return animais.residents.filter((animals) => animals.sex === 'female').length;
  } if (animal.sex === 'male') {
    return animais.residents.filter((animals) => animals.sex === 'male').length;
  }
};

module.exports = countAnimals;
