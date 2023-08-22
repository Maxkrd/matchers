import showHealth from '../app';

test('testing healthy', () => {
  const health = showHealth({ name: 'Маг', health: 90 });
  expect(health).toBe('healthy');
});

test('testing wounded', () => {
  const health = showHealth({ name: 'Лучник', health: 40 });
  expect(health).toBe('wounded');
});

test('testing critical', () => {
  const health = showHealth({ name: 'Мечник', health: 10 });
  expect(health).toBe('critical');
});
