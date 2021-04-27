var myAge = 8;
//  the value saved to this variable will change.
var earlyYears = 2;
earlyYears = earlyYears * 10.5;
// myAge variable, and subtract 2 from it.
var laterYears = myAge - 2;
// the number of dog years accounted for by your later years
laterYears = laterYears * 4;
console.log(earlyYears);
console.log(laterYears);
// Add earlyYears and laterYears together
var myAgeInDogYears = earlyYears + laterYears;
// all lowercase letters.
var myName = 'Grace'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);