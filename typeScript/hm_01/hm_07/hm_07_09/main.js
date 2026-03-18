/*

#gsKLAsNWM

*Через Array.prototype. створити власний foreach, filter

 */
Array.prototype.myForEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
Array.prototype.myFilter = function (callback) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
