
// const TAX_RATE = 0.08;

function calculateFInalAmmount(amount){
    amount = amount + (amount * TAX_RATE)
    return amount
}
const s = [1, 2 ,3]
console.log(typeof s)

// console.log(calculateFInalAmmount(

// ))

//empty objects/arrays are not falsy values.

console.log(1 === "1")

/**We’re not going to cover all the nitty-gritty details of how the coer‐
cion in == comparisons works here. Much of it is pretty sensible, but
there are some important corner cases to be careful of. You can read
section 11.9.3 of the ES5 specification to see the exact rules, and
you’ll be surprised at just how straightforward this mechanism is,
compared to all the negative hype surrounding it. */

// let a = 2
// foo();
// function foo(){
//     a = 3;
//     console.log(a);
//     let a
// }

//Adeleye Abdulrazaq

// console.log(a)

function foo(){
    var a = 1;

    function bar(){
        var b =2;

        function baz(){
            var c = 3;
            console.log(a, b, c)
        }

        baz();
        console.log(a, b)
    }

    bar();
    console.log(a)
}

// const foo = function(){
//     console.log('suuuuuup')
// }

(function IIFE(){
    console.log('Hello')
})()

function User(){
    let username, password;

    function createUser(user, pass){
        username: user;
        password: pass;
    }
}

function identify(){
    return this.name.toUpperCase()
}

var me = {
    name: 'Kyle'
}

console.log(identify.call(me))

var age = 20
function change(){
    return this * 2
}

console.log(change.call(age))

function foo(num){
    console.log("foo:" + num);

    foo.count++
}

foo.count = 0
var i;

for (i=0; i<10; i++){
    if (i>5){
        foo(i)
    }
}

console.log(foo.count)
