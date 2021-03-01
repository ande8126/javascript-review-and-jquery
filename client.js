//declare a variable
let something
//initialize a variable
let somethingElse = 'thingy'

let num0 = 47;
console.log( 'num0:', num0 );
//incremetn (add 1)
num0++ //48
console.log( 'num0:', num0 );
// decrement
num0-- //47
console.log( 'num0', num0 );
// add a value to existing
num0+=3.14
console.log( 'num0', num0 );
// sub a value
num0-=3.14
console.log( 'num0', num0 );
//equals self * a number
num0*=3.14
console.log( 'num0', num0 );
//divide self by number
num0/=3.14
console.log( 'num0', num0 );


function addToNum0( thingToAdd ) {
    return num0 += thingToAdd;
}//end addToNum0

//conditional edge cases
let test = true;
let tester = false;

function isTheTruth( thingToCheck ) {
    if ( thingToCheck ){
        return 'is the truth';
    }
    else{
        return 'is a lie';
    }
}

//variable scope: where does a variable exist?
//variables only exist in the code block where they are defined
