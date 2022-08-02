const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((allVisitors, visitor) => {
    const totalVisitors = allVisitors;
    if (visitor.age < 18) {
      totalVisitors.child += 1;
    } else if (visitor.age >= 18 && visitor.age < 50) {
      totalVisitors.adult += 1;
    } else {
      totalVisitors.senior += 1;
    }
    return allVisitors;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, senior, child } = prices;
  const t = countEntrants(entrants);
  return (t.child * child) + (t.adult * adult) + (t.senior * senior);
}

module.exports = { calculateEntry, countEntrants };
