import Character from "./Character";

export default class MathCharacter extends Character {
    set stoned(status) {
        this._stoned = status;
    };

    get stoned() {
        return this._stoned;
    };

    set attack(distance) {
        this._attack = Math.round(this.attackValue * (1.1 - 0.1 * distance));

        if (this._stoned) {
            this._attack -= Math.floor(Math.log2(distance) * 5);
        }
    };

    get attack() {
        return this._attack;
    };
}
