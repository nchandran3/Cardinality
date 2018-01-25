import Card from "./Cards/Card";
import _ from 'lodash';

export default class Deck {
  private cards: Card[];

  constructor() {
    this.initializeDefaultDeck();
    this.shuffle();
  }

  public initializeDefaultDeck() {
    this.cards = [
      new Card()

    ]

  }

  /**
   * Deals card from the provided position
   * @param position
   */
  public takeCard(position: number | 'bottom' | 'top'  = 'top') {
    if (!this.cards.length || (_.isNumber(position) && position >= this.cards.length) ) {
      throw new Error('Cannot take card from position greater than number of cards present');
    }

    const indexOfCard = new Map<string, number>([ ['top', 0], ['bottom', this.cards.length - 1] ]).get(position.toString()) || Number(position);

    return this.cards.splice(indexOfCard, 1);
  }

  public shuffle(): void {
    this.cards = _.shuffle(this.cards);
  }
}
