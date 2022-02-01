let hero = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]
function compare(a, b) {
  let healthA = a.health;
  let healthB = b.health;

  let comparison = 0;

  if (healthA > healthB) {
    comparison = -1;
  } else if (healthB > healthA) {
    comparison = 1;
  }
  return comparison;
}

hero.sort(compare);
