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
     */

let value = [6,7,8,9,10,"ace","jack","queen","king"]
let suit = ["spade","diamond","heart","clubs"];
let cards = [];
for(let i = 0; i < value.length; i++){
    for(let k = 0; k < suit.length;k++){
        if(suit[k] === "spade" || suit[k] ===  "clubs"){
        cards.push({
        valueCard: value[i],
        suitCard: suit[k],
        color: "black"
    });
        }
        else{
        cards.push({
        valueCard: value[i],
        suitCard: suit[k],
        color: "red"
    });   
        }
    }
}

let sortedCards = cards.reduce((acc, card) => {
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