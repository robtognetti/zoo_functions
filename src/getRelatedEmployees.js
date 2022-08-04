const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((item) => item.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return data.employees.filter((item) => item.managers.includes(managerId))
      .map((item) => `${item.firstName} ${item.lastName}`);
  }
}
/* return data.employees.find((item) => id === item.id).managers
    .every((item) => item.includes('9e7d4524-363c-416a-8759-8aa7e50c0992')); */
module.exports = { isManager, getRelatedEmployees };
