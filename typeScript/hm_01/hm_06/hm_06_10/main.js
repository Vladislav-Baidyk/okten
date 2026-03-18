var values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
var suits = ['spade', 'diamond', 'heart', 'clubs'];
var cards = [];
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var v = values_1[_i];
    for (var _a = 0, suits_1 = suits; _a < suits_1.length; _a++) {
        var s = suits_1[_a];
        var color = (s === 'spade' || s === 'clubs') ? 'black' : 'red';
        cards.push({
            valueCard: v,
            suitCard: s,
            color: color
        });
    }
}
