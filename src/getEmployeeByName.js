const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeedName) {
  if (employeedName === undefined) {
    return {};
  }
  return employees.find((employee) => employeedName === employee.firstName
  || employeedName === employee.lastName);
}

module.exports = getEmployeeByName;
