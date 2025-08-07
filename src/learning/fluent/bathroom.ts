import { EntryHall } from "./entry_hall";

export class Bathroom {
  //properties
  readonly name: string;

  //constructor
  constructor(name: string) {
    this.name = name;
    console.log(`Užívateľ ${name} vstúpil na toaletu.`);
  }

  //methods
  returnToEntryHall(): EntryHall {
    console.log(`Užívateľ ${this.name} sa vracia do vstupnej haly.`);
    return new EntryHall(this.name);
  }
  washHands(): this {
    console.log(`Užívateľ ${this.name} si umyl ruce.`);
    return this;
  }
}
