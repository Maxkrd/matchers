import sortHeroes from '../app';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const heroesSorted = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sorting Persons', () => {
  const heroesNew = sortHeroes(heroes);
  expect(heroesNew).toEqual(heroesSorted);
});
