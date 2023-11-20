// declaring a variable
// var a = 10;
// let b = 10;
// const C = 5;
// console.log(a)
// var a = 11;
// b = 21;
// a = 58;
// C = 2;
// console.log(C)

// Data types
// var i = 0;
// console.log(typeof(i));

// var s = 'S';
// console.log(typeof(s));

// var a; // unassigned a -> kind of null value
// console.log(a);

// var b = null;// null value
// console.log(b);

// boolean -> True, False
// var bol = true;
// console.log(typeof(bol));

// data types
// number
// string
// null
// undefined
// Boolean
// // BigInt
// // Symbol
// Object
//     Array
//     Object
//     // Date

// arrays
// a = [20,30,40,50];
// console.log( a[2] );
// a[2] = 6;
// a[4] =56;
// a[30] = 5;
// console.log(a);

// object
// var fan = {
//     numOfBlades : 4,
//     rpm: 3000,
//     color: 'Burgandy',
//     company: 'Bajaj',
//     motor: {
//         company: 'CG',
//         power: 50,
//         cores: 28
//     }
// }

// console.log( fan.motor.company );

// Operators
// arthematic operators
// a = 9;
// b = 8;
// console.log( a % b )

// assignment operator
// a = 7;
// a = a + 2;
// a /= 2;

// console.log( ++a );
// console.log(a);

// comparision operators
// <, >, ==, ===, <=, >=.
// console.log(5 <= 4)

// logical operators
// AND && OR || NOT !

// var a = 9;
// var b = 5
// //              P    OR    Q
// console.log( ! (b < 3))

// var num = 3;

// if (num === 0) {
//     console.log("its a whole num");
// } else if (num === 2) {
//     console.log("its the first even");
// } else if (num % 2 === 0) {
//     console.log("its a even num");
// } else {
//     console.log("its an odd num");
// }


// var key = 3;
// switch (key) {
//     case 1:
//         console.log('its one')
//         break;
    
//     case 2: 
//         console.log('its two')
//         break;

//     default:
//         console.log('its not one or two')
//         break;
// }

// Looping statements
// while
// var k = 0;// initialise a counter
// do{
//     console.log('Hello');   //statements
//     k++;// incrementation
// } while (k<5)//condition check

a = [5,6,5,9,5,6,9]
// a[k]
for (k = 0; k < a.length; k+=2){
    console.log(a[k]);
}

