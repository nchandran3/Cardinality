import Card from "./Card";
import { Suit } from "../models/Suit";
import { CardValue } from "../models/CardValue";

export class MarkableCard<TMark> extends Card {
  protected marks: Map<string, TMark>;

  constructor(readonly value: CardValue, readonly suit: Suit, marks?: Map<string, TMark>) {
    super(value, suit);
    this.marks = marks || new Map();
  }

  public addMark(key: string, value: TMark) {
    if (this.marks.get(key)) { throw new Error(`Mark already exists at key: ${key}`); }
    return this.marks.set(key, value);
  }

  public removeMark(key: string) {
    return this.marks.delete(key);
  }

  public getMarks() { return this.marks; }

}
