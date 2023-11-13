import Daemon from "../Daemon";
import Magician from "../Magician";

test.each([
    [new Daemon ("Alex"), {name: 'Alex', type: 'Daemon', attackValue: 20}],
    [new Magician ("Kate"), {name: 'Kate', type: 'Magician', attackValue: 20}],
])("Проверка создание персонажа", (object, expected) => {
    const recieved = object;
    expect(recieved).toEqual(expected);
});

test.each([
    [new Daemon ("Bilbo"), 2, 18, false],
    [new Daemon ("Saruman"), 3, 9, true],
    [new Magician ("Gandalf"), 4, 4, true],
    [new Magician ("Frodo"), 5, 12, false],
])("Проверка подсчета силы атаки персонажа", (object, distance, expected, stoned) => {
    const player = object;
    player.stoned = stoned;
    player.attack = distance;
    // const recieved = player.attack;
    expect(player.attack).toBe(expected);
    expect(player.stoned).toBe(stoned);
})
