import Daemon from "../Daemon";
import Magician from "../Magician";

test.each([
    [new Daemon ("Alex"), {name: 'Alex', type: 'Daemon', attackValue: 100}],
    [new Magician ("Kate"), {name: 'Kate', type: 'Magician', attackValue: 100}],
])("Проверка создание персонажа", (object, expected) => {
    const recieved = object;
    expect(recieved).toEqual(expected);
});

test.each([
    [new Daemon ("Bilbo"), 2, 90, false],
    [new Daemon ("Saruman"), 3, 73, true],
    [new Magician ("Gandalf"), 4, 60, true],
    [new Magician ("Frodo"), 5, 60, false],
])("Проверка подсчета силы атаки персонажа", (object, distance, expected, stoned) => {
    const player = object;
    player.stoned = stoned;
    player.attack = distance;
    expect(player.attack).toBe(expected);
    expect(player.stoned).toBe(stoned);
})
