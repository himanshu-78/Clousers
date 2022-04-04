// Q1 :
function counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// Output : 1 2 3 4



// Q2 :
let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count);                     // What is logged : 1
    }
    console.log(count);                         // What is logged : 0
}) ()



// Q3 :
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i);                         // What is logged : 3 after 1s
    }, 1000);
}



// Q4 : Write a code to explain closure.
// 1 :
const OuterFun = (a) => {
    let b = 10;

    const innerFun = () => {
        let sum = a + b;
        console.log(`The sum of two no. ${sum}`);                              // The sum of two no. 15
    }
    innerFun()
}
OuterFun(5)


// 2 :
function S(A) {
    let B = 10

    function V() {
        let result = A * B                                                    // 70
        console.log(result)
    }
    V()
}
S(7)



// Q5 : Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function OuterFunction() {

    var  length = 7;

    function InnerFunction() {
        var width = 5;
        var area;
        console.log(area=length * width);                                              // 35
    }

    return InnerFunction;
}
var innerFunction = OuterFunction();

innerFunction(); 



// Q6 : Take a variable in outer function and create an inner function to increase the counter every time it is called.

var add = (function () {
    let counter = 0;

     return function () {
        counter += 1;
        console.log(counter)                                
    };
}) ();
add()
add()
add()
add()
add()

// Output : 1 2 3 4 5


function counter() {
    let counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
console.log(counter());
console.log(counter());
console.log(counter());

// Output : 1 2 3



// Q7 : Print Output :

var a = 12;
(function () {
    alert(a);
}) ()

// Output : 12



// Q8 : Print Output :

var a = 10;
var x = (function () {
    var a = 12;
    return function () {
        alert(a);
    }
}) ()
x()

// Output : 12



// Q9 : Print Output : 

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';


    (function innerFunc(innerArg) {
        var innerVar = 'b';
        console.log (
            "outerArg = " + outerArg + "\n" +
            "innerArg = " + innerArg + "\n" +
            "outerVar = " + outerVar + "\n" +
            "innerVar = " + innerVar + "\n" +
            "globalVar = " + globalVar
        );
    }) (456)
})(123)

// Output :
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz