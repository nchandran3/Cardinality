import { Suit } from "../models/Suit";
import { CardValue } from "../models/CardValue";

export default class BasicCard {
  public visible: boolean;

  constructor(public readonly value: CardValue, public readonly suit: Suit) {
    this.visible = false;
  }
}


export class MarkableCard<TMark> extends Card {
  protected marks = new Map<string, TMark>();

  public addMark(key: string, value: TMark) {
    if (this.marks.get(key)) { throw new Error(`Mark already exists at key: ${key}`); }
    return this.marks.set(key, value);
  }

  public removeMark(key: string) {
    return this.marks.delete(key);
  }

  public getMarks() { return this.marks; }

}
