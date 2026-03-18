"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var values = [6, 7, 8, 9, 10, "ace", "jack", "queen", "king"];
var suits = ["spade", "diamond", "heart", "clubs"];
var cards = [];
for (var i = 0; i < values.length; i++) {
    for (var k = 0; k < suits.length; k++) {
        if (suits[k] === "spade" || suits[k] === "clubs") {
            cards.push({
                valueCard: values[i],
                suitCard: suits[k],
                color: "black"
            });
        }
        else {
            cards.push({
                valueCard: values[i],
                suitCard: suits[k],
                color: "red"
            });
        }
    }
}
var sortedCards = cards.reduce(function (acc, card) {
    if (card.suitCard === 'spade') {
        acc.spades.push(card);
    }
    else if (card.suitCard === 'diamond') {
        acc.diamonds.push(card);
    }
    else if (card.suitCard === 'heart') {
        acc.hearts.push(card);
    }
    else if (card.suitCard === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(sortedCards);
