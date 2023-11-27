import MathCharacter from "./MathCharacter";

export default class Magician extends MathCharacter {
    constructor(name, type = 'Magician' ) {
        super(name, type);
        this.attackValue = 100;
    }
}
