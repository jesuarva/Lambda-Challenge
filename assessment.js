/*
Work through the problems in this file.  As you work through each problem periodically run: npm test
Your function name and the string must match the instructions exactly otherwise the tests will fail.
After writing your function uncomment the matching function reference at the bottom of the file.
*/

// 1. Write a function called helloWorld that returns the string 'Hello World!'.

function helloWorld() {
  return "Hello World!";
}

/*
2. Write a function called lambdaSchool that has a single parameter called num.
     num will be a positive integer.
     If num is divisible by 3 return the string 'Lambda'
     If num is divisible by 5 return the string 'School'
     If num is divisible by 3 AND 5 return the string 'Lambda School' (notice the space)
     If num is NOT divisible by 3 or 5 then return num.

     Example:
             lambdaSchool(15); // returns 'Lambda School'
             lambdaSchool(8); // returns 8
*/

function lambdaSchool( num ) {
  if (num < 1) {
    throw (new Error("Argument must be a positive integer, please enter a valid value."));
  } else if ( num%3 === 0 && num%5 === 0) {
    return "Lambda School";
  } else if ( num%5 === 0 ){
    return "School";
  } else if ( num%3 === 0) {
    return "Lambda";
  } else {
    return num;
  }
}

/*
3. Write a function called longestString that has a single parameter called strs.
     strs will be an array of strings.
     Return the longest string that is in strs.
     If there is a tie for the longest string then return the one that occurs first.

     Example:
             longestString(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
             longestString(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
*/

function longestString( strs ) {

  if(!Array.isArray(strs)) {
    throw ( new Error('Function longestString. Argument is not an Array.'));
  } else {
    // Items must be of String type.
    strs.forEach( function( item ) {
      if (typeof item !== 'string') {
        throw (new Error('Function longestString. Elements in the Array must be of String type. At least one element in the Array is not of String type.'));
      }
    });
  }

  var longest = "";
  var longestLength = 0;

  strs.forEach( function( item ) {
    var itemLength = item.length;
    if (itemLength > longestLength) {
      longest = item;
      longestLength = itemLength;
    }
  });

  return longest;
}

/*
4. Write a function called computeUserAverageAge that has a single parameter called users
     users is an array of user objects.
     Each user object has a property called age that is a number.
     Compute the average age of all user objects in the users array.
     Round off the decimals if needed and return the number.

     Example:
             const users = [{
               name: 'Brendan Eich',
               age: 56,
             }, {
               name: 'Linus Torvalds',
               age: 48,
             }, {
               name: 'Margaret Hamilton',
               age: 81,
             }];
             computeUserAverageAge(users); // returns 62 (This number is rounded up from 61.6666)
*/

function computeUserAverageAge( users ) {

  if(!Array.isArray(users)) {
    throw ( new Error('Function computeUserAverageAge. Argument is not an Array.'));
  } else {
    // Items must be of String type.
    users.forEach( function( item ) {
      if (typeof item !== 'object') {
        throw (new Error('Function computeUserAverageAge. Elements in the Array must Objects. At least one element in the Array is not an Object.'));
      }
    });
  }

  var usersLength = users.length;
  var ageSum = 0;

  users.forEach( function ( user ) {
    ageSum += user.age;
  });

  return Math.ceil(ageSum/usersLength);
}

module.exports = {
 helloWorld,
 lambdaSchool,
 longestString,
 computeUserAverageAge
};
