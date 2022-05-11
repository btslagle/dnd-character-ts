export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  //  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
  }

  static randomDiceRoll() {
    return Math.ceil(Math.random() * 6);
  }
  static topThreeDiceRolls() {
    const diceRoll = [];
    while (diceRoll.length < 4) {
      diceRoll.push(this.randomDiceRoll());
    }
    const lowestDice = Math.min(...diceRoll);
    return diceRoll.filter((roll) => roll != lowestDice);
  }
  static generateAbilityScore() {
    const topThree = this.topThreeDiceRolls();
    const sum = 0;
    return topThree.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      sum
    );
  }
}
/*  get rollForStrength() {
    this.caculateSum;
  }
  get rollForDexterity() {
    this.caculateSum;
  }
  get rollForConstitution() {
    this.caculateSum;
  }
  get rollForIntelligence() {
    this.caculateSum;
  }
  get rollForWisdom() {
    this.randomDiceRoll;
  }
  get rollForCharisma() {
    this.randomDiceRoll;
  }
}*/
