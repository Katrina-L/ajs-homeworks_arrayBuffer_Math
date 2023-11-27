import MathCharacter from "./MathCharacter";

export default class Daemon extends MathCharacter {
    constructor(name, type = 'Daemon') {
        super(name, type);
        this.attackValue = 100;
    }
}
