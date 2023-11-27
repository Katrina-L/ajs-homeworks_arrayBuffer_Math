import Character from "./Character";

export default class MathCharacter extends Character {
    set stoned(status) {
        this._stoned = status;
    };

    get stoned() {
        return this._stoned;
    };

    set attack(distance) {
        this._attack = this.attackValue;
        this._distance = distance;
    };

    get attack() {
        this._attack = Math.round(this._attack * (1.1 - 0.1 * this._distance));

        if (this._stoned) {
            this._attack -= Math.floor(Math.log2(this._distance) * 5);
        }
        return this._attack;
    };
}
