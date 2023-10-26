import Team from '../Team';
import Character from '../Character';



test('Создание новой команды', () => {
  const team = new Team('DreamTeam');
  const result = {name: 'DreamTeam', members: new Set()};
  expect(result).toEqual(team);
});

test('Добавление нового персонажа в команду', () => {
  const team = new Team('DreamTeam');
  const character = new Character('monster');
  team.add(character);
  const result = {name: 'DreamTeam', members: new Set([{name: 'monster', health: 100, level: 1}])};
  expect(result).toEqual(team);
});

test('Ошибка при повторном добавлении персонажа в команду', () => {
  const team = new Team('DreamTeam');
  const character = new Character('monster');
  team.add(character);
  expect(()=>team.add(character)).toThrow(new Error('Такой персонаж уже существует!'));
});

test('Добавление сразу нескольких персонажей в команду', () => {
  const team = new Team('DreamTeam');
  const character1 = new Character('bowman');
  const character2 = new Character('magic');
  const character3 = new Character('swordsman');

  team.addAll(character1, character2, character3);
  const result = {name: 'DreamTeam', members: new Set([
    {name: 'bowman', health: 100, level: 1},
    {name: 'magic', health: 100, level: 1},
    {name: 'swordsman', health: 100, level: 1}
  ])};
  expect(result).toEqual(team);
});

test('Конвертация set в массив', () => {
  const team = new Team('DreamTeam');
  const character1 = new Character('bowman');

  team.addAll(character1);
  const result = [
    {name: 'bowman', health: 100, level: 1},
  ];
  expect(result).toEqual(team.toArray());
});

