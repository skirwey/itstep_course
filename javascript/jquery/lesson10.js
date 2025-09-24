const calc = {
        summ: function(a, b) {
            console.log(a + b);
        return this;
    },
    sub: function(a, b) {
        console.log(a - b);
        return a - b;
    },
    mul: function(a, b) {
        console.log(a * b);
        return this;
    },
    div: function(a, b) {
        if(b == 0) {
            console.log(0);
        } else {
            console.log(a / b);
        }
        return this;
    }
}

calc.summ(2, 2).div(2, 2);