/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {
  if (n === 1 || n === 0) return 1;
  if (n < 0) return null;
  return n * factorial(n - 1);

}
console.log(factorial(5))

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {

  // if (array.length === 0) {
  //   return 0;
  // }
  // return array[-1] + sum(array.slice(0, array.length - 1))

  // if (array.length === 0) {
  //   return 0;
  // }
  // return array.pop() + sum(array)
  const copyArray = [...array];
  //array.forEach(item=> copyArray.push(item))


  return copyArray.length === 0 ? 0 : copyArray.pop() + sum(copyArray) // [1,2,3,4,5]
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
  //return statement should look like :
  //return someInteger + next recusive call (     )

  if (array.length === 0) {
    return 0;
  }
  if (!Array.isArray(array[0])) {
    //      number  +   rest
    return array[0] + arraySum(array.slice(1))
  } else {
    return arraySum(array.flat())
  }

};

// 4. Check if a number is even.
var isEven = function (n) {
  //account for negative integers
  if (n < 0) {
    //changes from negative to a positive
    n = Math.abs(n)
  }
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
  return n > 0 ?
    (n === 0 ? 0 : (n - 1) + sumBelow(n - 1)) :
    (n === 0 ? 0 : (n + 1) + sumBelow(n + 1))

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {

  let inter = true;
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
    inter = false;
  }
  if (x === y) return [];
  if (x + 1 === y) return [];
  let array = range(x, y - 1);
  array.push(y - 1);
  return inter ? array : array.reverse();
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
  if (exp === 0) return 1;

  if (exp > 0) {
    return base * exponent(base, exp - 1)
  }
  if (exp < 0) {
    return exponent(base, exp + 1) / base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
  if (n < 1) return false;
  if (n === 1) return true
  return powerOfTwo(n / 2)
};

// 9. Write a function that reverses a string.
var reverse = function (string) {
  if (string.length === 0) return string;
  return reverse(string.substring(1)) + string.charAt(0)
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
  if (string.length === 0) return true;
  if (string.length === 1) return true;
  if (string.charAt(0).toLowerCase() !== string.charAt(string.length - 1).toLowerCase()) {
    return false;
  }
  let str = string.substring(1, string.length - 1);
  return palindrome(str);



};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }
  var result = 0;
  if (x === 0 && y === 0) {
    return NaN;
  } else if (x < y) {
    return isNegative ? -x : x;
  } else {
    result = modulo(x - y, y);
  }
  return isNegative ? -result : result;
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function (x, y) {
  if (x == 0 || y == 0) {
    return 0;
  } else if (y < 0) {
    return - x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function (x, y) {
  if (y === 0) {
    return NaN;
  }
  if (y === 1) return x;
  if (x === 0) return 0;
  if (x === y) return 1;

  if (x < y) {
    if (x < 0 && y < -x) {
      x = -x;
      return -(1 + divide(x - y, y));
    }
    return 0;
  }
  if (y < 0) {
    if (-y < x) {
      y = -y;
      return -(1 + divide(x - y, y));
    } else if (-y > x) {
      return 0;
    }
  }

  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
  if (x < 0 || y < 0) return null;
  if (y === 0) return x;
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
  if (str1.length === 0 && str2.length === 0) return true;
  if (str1[0] !== str2[0]) return false;
  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
  var arr = [];
  if (!str.length) {
    return arr;
  }
  arr.push(str[0]);
  return arr.concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  var reversed = [];
  if (!array.length) {
    return reversed;
  }
  reversed.push(array[array.length - 1]);
  return reversed.concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
  var newArr = [];
  if (length >= 1) {
    newArr.push(value);
    return newArr.concat(buildList(value, length - 1));
  }
  return newArr;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
  var arr = [];
  if (n === 0) return arr;

  if (n % 3 === 0 && n % 5 === 0) {
    arr.push('FizzBuzz');
  } else if (n % 3 === 0) {
    arr.push('Fizz');
  } else if (n % 5 === 0) {
    arr.push('Buzz');
  } else {
    arr.push('' + n);
  }
  return fizzBuzz(n - 1).concat(arr);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
  var count = 0;
  if (array.length !== 0) {
    if (array[0] === value) {
      count++;
    }
    count += countOccurrence(array.slice(1), value);
  }
  return count;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
  var newArray = [];
  if (!array.length) {
    return newArray;
  }
  newArray.push(callback(array[0]));
  return newArray.concat(rMap(array.slice(1), callback));
};


// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function (obj, key) {
  var count = 0;
  for (var prop in obj) {
    var item = obj[prop];
    if (prop === key) {
      count++;
    }
    if (typeof item === 'object') {
      count += countKeysInObj(item, key);
    }
  }
  return count
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
  var count = 0;
  for (var prop in obj) {
    var item = obj[prop];
    if (obj[prop] === value) {
      count++;
    }
    if (typeof item === 'object') {
      count += countValuesInObj(item, value);
    }
  }
  return count
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
// var obj = { 'e': { 'x': 'y' }, 't': { 'r': { 'e': 'r' }, 'p': { 'y': 'r' } }, 'y': 'e' };
// replaceKeysInObj(obj, 'e', 'm');

var replaceKeysInObj = function (obj, oldKey, newKey) {
  for (var key in obj) {
    var value = obj[key];
    if (key === oldKey) {
      obj[newKey] = value;
      delete obj[oldKey];
    }
    if (typeof value === 'object') {
      value = replaceKeysInObj(value, oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  var fib = fibonacci(n - 1);
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  return fib;

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

//using memoization
var nthFibo = function (n) {
  if (n < 0) {
    return null;
  }

  var mem = {};
  if (mem[n] === undefined) {
    if (n < 2) {
      mem[n] = n;
    }
    else {
      mem[n] = nthFibo(n - 2) + nthFibo(n - 1);
    }
  }
  return mem[n];
}

//naive algorithm
var nthFibo = function (n) {
  if (n < 0) {
    return null;
  }
  return n <= 1 ? n : nthFibo(n - 1) + nthFibo(n - 2);
}

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {
  var newArr = [];
  newArr.push(array[0].toUpperCase());
  if (array.length > 1) {
    return newArr.concat(capitalizeWords(array.slice(1)));
  }
  return newArr;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {
  var newArr = [];
  newArr.push((array[0][0].toUpperCase()) + array[0].slice(1));
  if (array.length > 1) {
    return newArr.concat(capitalizeFirst(array.slice(1)));
  }
  return newArr;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: 'car' }
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
  var sum = 0;
  for (var key in obj) {
    var item = obj[key];
    if (typeof item === 'number' && item % 2 === 0) {
      sum += item;
    }
    if (typeof item === 'object') {
      sum += nestedEvenSum(item);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArr = newArr.concat(flatten(array[i]));
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};


// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (str, obj = {}) {
  if (!str.length) {
    return obj;
  }
  if (str[0] in obj) {
    obj[str[0]]++;
  } else {
    obj[str[0]] = 1;
  }
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
  var arr = [];
  if (list.length === 0) {
    return arr;
  }
  if (list.length === 1) {
    arr.push(list[0]);
    return arr;
  }
  if (list[0] !== list[1]) {
    arr.push(list[0]);
  }
  return arr.concat(compress(list.slice(1)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
  if (!array.length) {
    return array;
  }
  array[0].push(aug);
  augmentElements(array.slice(1), aug);
  return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
  var newArr = [];
  if (!array.length) {
    return newArr;
  }
  if (array[0] !== 0 || array[0] !== array[1]) {
    newArr.push(array[0]);
  }
  return newArr.concat(minimizeZeroes(array.slice(1)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
  if (!array.length) {
    return array;
  }
  if (array[0] < 0) {
    array[0] = -array[0];
  }
  if (array[1] > 0) {
    array[1] = -array[1];
  }
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};


// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
  var myObj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };
  var result = "";
  if (!str) {
    return result;
  }
  var curChar = str[0];
  if (myObj[curChar]) {
    result += myObj[curChar];
  }
  else {
    result += curChar;
  }
  return result + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node = document.documentElement) {
  var count = 0;
  if (node.childNodes) {
    if (node.childNodes.length === 0) return 0;
    if (node.childNodes.length > 0) {
      node.childNodes.forEach(firstLevelChild => {
        if (firstLevelChild.nodeName === tag.toUpperCase()) {
          count++;
        }
        if (firstLevelChild.childNodes.length > 0) {
          count += tagCount(tag, firstLevelChild);
        }
      });
    }
  }
  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function (array, target, min = 0, max = array.length - 1) {
  var guess = Math.floor((min + max) / 2);
  if (max < min) {
    return null;
  }
  if (array[guess] === target) {
    return guess;
  }
  if (array[guess] < target) {
    return binarySearch(array, target, guess + 1, max);
  }
  if (array[guess] > target) {
    return binarySearch(array, target, min, guess - 1);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  let arrA = mergeSort(array.slice(0, mid));
  let arrB = mergeSort(array.slice(mid, array.length));

  return merge(arrA, arrB);
};

function merge(arrA, arrB) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      result.push(arrA[i++]);
    } else {
      result.push(arrB[j++]);
    }
  }
  return result.concat(arrA.slice(i)).concat(arrB.slice(j));
}

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {
  if (typeof input === 'object') {
    if (input === null) return {};
    var result = {};
    for (var key in input) {
      var value = input[key];
      if (typeof value === 'object') {
        result[key] = clone(value);
      } else {
        result[key] = value;
      }
    }
  }
  if (Array.isArray(input)) {
    if (input.length === 0) return [];
    var result = [];
    input.forEach(key => {
      if (typeof key === 'object') {
        result.push(clone(key));
      } else {
        result.push(key);
      }
    })
  }
  return result;
};