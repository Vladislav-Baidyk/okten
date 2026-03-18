/*
 

#EP5I1UUzAX

Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

Приклад моделі кінцевого об’єкту

{

    spades:[],

    diamonds:[],

    hearts:[],

    clubs:[]

}
     */export {};

type Suit = 'spade' | 'diamond' | 'heart' | 'clubs';
type Color = 'red' | 'black';
type CardValue = 6 | 7 | 8 | 9 | 10 | 'ace' | 'jack' | 'queen' | 'king';

interface Card {
    suitCard: Suit;
    valueCard: CardValue;
    color: Color;
}

interface SortedCards {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}

let values: CardValue[] = [6, 7, 8, 9, 10, "ace", "jack", "queen", "king"];
let suits: Suit[] = ["spade", "diamond", "heart", "clubs"];
let cards: Card[] = [];

for (let i:number = 0; i < values.length; i++) {
    for (let k:number = 0; k < suits.length; k++) {
        if (suits[k] === "spade" || suits[k] === "clubs") {
            cards.push({
                valueCard: values[i],
                suitCard: suits[k],
                color: "black"
            });
        } else {
            cards.push({
                valueCard: values[i],
                suitCard: suits[k],
                color: "red"
            });
        }
    }
}

let sortedCards = cards.reduce((acc: SortedCards, card: Card): SortedCards => {
    if (card.suitCard === 'spade') {
        acc.spades.push(card);
    } else if (card.suitCard === 'diamond') {
        acc.diamonds.push(card);
    } else if (card.suitCard === 'heart') {
        acc.hearts.push(card);
    } else if (card.suitCard === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(sortedCards);