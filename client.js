const verbose = false;
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
}//end isTheTruth

//variable scope: where does a variable exist?
//variables only exist in the code block where they are defined
//global variables are declared outside of all code blocks and therefore are available to the whole script


// loops
// basic for loop
// for ( let i=0; i<ARRAYNAME.length; i++ ){
//    //logic in here, use "i" as index
//  ARRAYNAME[ i ]//each item
// }//end for loop

let names = [ 'Dev', 'Abdirahman', 'Alex', 'Anthony', 'Ben' ];
//loop thru array and display all names:
for( let i=0; i<names.length; i++ ) {
    const thisName = names[i];
    console.log( 'index:', i );
    console.log( thisName );
}//end for

let stringNumber = '42';

//loop through the characters of a string
//return the string without spaces

function removeSpaces( sentence ) {
    let returnString = '';
    //loop thru characters of a string
    for ( let i=0; i<sentence.length; i++ ) {
        if( verbose ) console.log( sentence.charAt( i ));
        if( sentence.charAt( i ) != ' '){
            console.log('space found');
        }//found space
        else{
            //not a space
            returnString+= sentence.charAt( i );
        }
    }//end for
    //if there is a space, remove it
    //return the string without spaces
    return returnString;
}//end removeSpaces


function areTheseTheSame( thing1, thing2 ) {
    if ( thing1 == thing2 ){
        return 'yes, the same with ==';
    }
    else if (thing1 === thing2) {
        return 'the same with ===';
    }
    else {
        return 'different';
    }
}//end isTheTruth
