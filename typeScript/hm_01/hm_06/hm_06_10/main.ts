/*
#bolvdlhP

 описати колоду карт (від 6 до туза без джокерів). 
 Більшу частину колоди можна описати з використанням циклу

Після опису, використовуючи функції масивів:

 – знайти піковий туз

 – всі шістки

 – всі червоні карти

 – всі буби

 – всі трефи від 9 та більше

 

Приклад моделі об’єкту карти:

{

    cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’

    value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’

    color:”, // ‘red’,’black’

}
     */
type Suit = 'spade' | 'diamond' | 'heart' | 'clubs';
type Color = 'red' | 'black';
type CardValue = 6 | 7 | 8 | 9 | 10 | 'ace' | 'jack' | 'queen' | 'king';

interface Card {
    suitCard: Suit;
    valueCard: CardValue;
    color: Color;
}

const values: CardValue[] = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
const suits: Suit[] = ['spade', 'diamond', 'heart', 'clubs'];
const cards: Card[] = []; 

for (const v of values) {
    for (const s of suits) {
        const color: Color = (s === 'spade' || s === 'clubs') ? 'black' : 'red';
        cards.push({
            valueCard: v,
            suitCard: s,
            color: color
        });
    }
}