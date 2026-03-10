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
/*finding ace */
document.writeln(`<p>finding ace</p>`);
let clubAce = cards.find((card) => card.suitCard === ("clubs") && card.valueCard === ("ace"));
document.writeln(`<p>${clubAce.suitCard} + ${clubAce.valueCard}</p>`);

/*finding sixes */
document.writeln(`<p >finding sixes</p>`);
const allSixes = cards.filter(card => card.valueCard === 6);
for (const six of allSixes){
    document.writeln(`<p>${six.valueCard} + ${six.color}</p>`);
}

/*all red */
document.writeln(`<p style="color:red;">finding red</p>`);
let allRed = cards.filter(card => card.color === "red");
for (const red of allRed){
    document.writeln(`<p>${red.valueCard} + ${red.color}</p>`);
}

/*diamonds */
let allDiamonds = cards.filter(card => card.suitCard === "diamond");
for (const diamond of allDiamonds){
    document.writeln(`<p>${diamond.valueCard} + ${diamond.color} + ${diamond.suitCard}</p>`);
}

/*all spades above 9 */
let spadesAboveNine = cards
    .filter(card => card.suitCard === "spade")
    .filter(card => card.valueCard > 9 || 
        typeof card.valueCard === "string");
for (const lastTask of spadesAboveNine){
    document.writeln(`<p>${lastTask.valueCard} + ${lastTask.color} + ${lastTask.suitCard}</p>`);
}                 