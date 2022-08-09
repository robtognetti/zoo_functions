const data = require('../data/zoo_data');

const { employees, species } = data;

const array = employees.map((employee) => {
  const objetoEmployee = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor
      .map((animal) => species.filter((specie) => specie.id === animal)[0].name),
    locations: employee.responsibleFor
      .map((animal) => species.filter((specie) => specie.id === animal)[0].location),
  };
  return objetoEmployee;
});

function getEmployeesCoverage(elemento) {
  if (!elemento) {
    return array;
  }
  const entry = array.find((element) => element.fullName.includes(Object.values(elemento))
  || element.id.includes(Object.values(elemento)));
  if (employees.find((employee) => employee.firstName === employee.name)) {
    return entry;
  }
  if (employees.find((employee) => employee.lastName === employee.name)) {
    return entry;
  }
  if (!entry) {
    throw new Error('Informações inválidas');
  }
  return entry;
}

module.exports = getEmployeesCoverage;
