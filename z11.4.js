function sum(x) {
    return function(y) {
        return x + y;
    };
}

var f = sum(8);
console.log( f(0), f(1), f(2) );

console.log( sum(4)(2), sum(2)(1), sum(30)(2) );
