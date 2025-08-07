import { Bathroom } from "./bathroom.ts";
import { SecondFloor } from "./second-floor.ts";

export class EntryHall {
  //properties
  readonly name: string;

  //constructor
  constructor(name: string) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil do vstupní haly`);
  }
  //methods
  entryBathrom(): Bathroom {
    console.log(`${this.name} jde na toaletu`);
    return new Bathroom(this.name);
  }
  askReceptionistAQuestion(question: string): this {
    console.log(`Užívateľ ${this.name} sa pýta otázku: ${question}`);
    console.log("Recepční mlčí");
    return this; // Vracíme instanci třídy EntryHall
  }
  async toSecondFloorbyElevator(): Promise<SecondFloor> {
    console.log(`Uživatel ${this.name} si volá výtah ze vstupní haly.`);
    const waitingForElevatorMs = 2000; // Čekání na výtah 2 sekundy
    // Simulace čekání na výtah
    await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
    // Výtah přijíždí
    console.log(`Výtah přijel do vstupní haly.`);
    console.log(`Výtah dorazil, uživatel ${this.name} nastupuje.`);
    // Jízda výtahem 2 sekundy
    const elevatorRideMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
    console.log(`Uživatel ${this.name} vystupuje z výtahu v druhém patře.`);
    return new SecondFloor(this.name);
  }
}
