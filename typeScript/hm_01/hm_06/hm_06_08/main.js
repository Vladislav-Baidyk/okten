var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var coursesAndDurationArray = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 }
];
var sortFunc = coursesAndDurationArray
    .sort(function (a, b) { return a.monthDuration - b.monthDuration; })
    .filter(function (value) { return value.monthDuration > 5; })
    .map(function (value, index) {
    return __assign(__assign({}, value), { id: index + 1 });
});
;
console.log(sortFunc);
