//1

function reversedNum(num) {
    return (
      parseFloat(num.toString().split('').reverse().join('')) 
    )                 
  }
// Example usage:
console.log(reversedNum(32243)); // Output: 34223


//2
function checkPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  console.log(checkPalindrome('madam'));
  console.log(checkPalindrome('nurses run'));

//3
function generateCombinations(str) {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        combinations.push(str.slice(i, j));
      }
    }
    return combinations;
  }
  console.log(generateCombinations('dog'));
  
//4
function sortAlphabetically(str) {
    return str.toLowerCase().split('').sort().join('');
  }
  
console.log(sortAlphabetically('webmaster')); // Output: 'abeemrstw'

//5
function capitalizeFirstLetter(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
      return firstLetter.toUpperCase();
    });
  }
  
  // Example usage:
  console.log(capitalizeFirstLetter('the quick brown fox')); // Output: 'The Quick Brown Fox'
  
//6
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  
  // Example usage:
  console.log(findLongestWord('Web Development Tutorial')); // Output: 'Development'

//7  
function countVowels(str) {
  let count = 0;
  let vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('The quick brown fox')); // Output: 5

//8
function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Example usage:
    console.log(isPrime(17)); // Output: true

//9
function getType(value) {
    return typeof value;
  }
  

  console.log(getType('hello')); // Output: 'string'
  console.log(getType(42)); 

//10
function generateIdentityMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        matrix[i][j] = (i === j) ? 1 : 0;
      }
    }
    return matrix;
  }
  
  // Example usage:
  console.log(generateIdentityMatrix(3)); // Output: [[1,0,0],[0,1,0],[0,0,1]]
  

//11
function findSecondLowestAndGreatest(arr) {
    let sortedArr = arr.sort((a,b) => a-b);
    let secondLowest = sortedArr[1];
    let secondGreatest = sortedArr[sortedArr.length - 2];
    return [secondLowest, secondGreatest];
  }
  
  // Example usage:
  console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5])); // Output: [2, 4]

//12
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return (sum === num);
  }
  
  // Example usage:
  console.log(isPerfectNumber(6)); // Output: true
  console.log(isPerfectNumber(28)); // Output: true
  console.log(isPerfectNumber(8128)); // Output: true

//13
function computeFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
  
  // Example usage:
  console.log(computeFactors(12)); // Output: [1, 2, 3, 4, 6, 12]

//14
function amountToCoins(amount, coins) {
    let result = [];
    let coinIndex = 0;
    while (amount > 0) {
      if (amount >= coins[coinIndex]) {
        result.push(coins[coinIndex]);
        amount -= coins[coinIndex];
      } else {
        coinIndex++;
      }
    }
    return result;
  }
  
  // Example usage:
  console.log(amountToCoins(46, [25, 10, 5, 2, 1])); // Output: [25, 10, 10, 1]

//15
function computePower(b, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= b;
    }
    return result;
  }
  
  // Example usage:
  console.log(computePower(2, 3)); // Output: 8
  
//16
function uniqueCharacters(str) {
  let unique = '';
  for (let i = 0; i < str.length; i++) {
    if (unique.indexOf(str[i]) === -1) {
      unique += str[i];
    }
  }
  return unique;
}

console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));
// Output: "thequickbrownfxjmpsvlazydg"


//17
function countLetters(str) {
  let counts = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (counts[letter]) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
}

console.log(countLetters("thequickbrownfoxjumpsoverthelazydog"));
// Output: { t: 2, h: 2, e: 3, q: 1, u: 2, i: 1, c: 1, k: 1, b: 1, r: 2, o: 4, w: 1, n: 1, f: 1, x: 1, j: 1, m: 1, p: 1, s: 1, v: 1, l: 1, a: 1, z: 1, y: 1, d: 1, g: 1 }

//18
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1; // target not found
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // Output: 4

//19
function largerThan(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(largerThan([1, 5, 2, 9, 4, 3, 8], 4)); // Output: [5, 9, 8]

//20
function generateId(length) {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = '';
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * characters.length);
    id += characters[index];
  }
  return id;
}

console.log(generateId(10)); // Output: "sUfZ6d8Q2K"

//21
function getSubsets(arr, length) {
  let subsets = [];
  for (let i = 0; i < arr.length; i++) {
    if (length === 1) {
      subsets.push([arr[i]]);
    } else {
      let subsubsets = getSubsets(arr.slice(i+1), length-1);
      for (let j = 0; j < subsubsets.length; j++) {
        subsets.push([arr[i], ...subsubsets[j]]);
      }
    }
  }
  return subsets;
}

console.log(getSubsets([1, 2, 3], 2)); // Output: [[1, 2], [1, 3], [2, 3]]

//22
function countOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences('microsoft.com', 'o')); // Output: 3


//23
function firstNotRepeated(str) {
  let counts = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (counts[letter]) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (counts[letter] === 1) {
      return letter;
    }
  }
  return null; // all characters are repeated
}

console.log(firstNotRepeated('abacddbec')); // Output: 'e'

//24
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); // Output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

//25
function longestCountryName(countries) {
  let longest = '';
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longest.length) {
      longest = countries[i];
    }
  }
  return longest;
}

console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
// Output: "United States of America"

//26
function longestSubstring(str) {
  let longest = '';
  let current = '';
  for (let i = 0; i < str.length; i++) {
    let index = current.indexOf(str[i]);
    if (index !== -1) {
      current = current.slice(index + 1);
    }
    current += str[i];
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}

console.log(longestSubstring("abcabcbb")); // Output: "abc"

//27
function longestPalindrome(str) {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.slice(i, j);
      if (substr === substr.split('').reverse().join('') && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}

console.log(longestPalindrome("babad")); // Output: "bab"

//28
function myFunction(param) {
  console.log("Hello from myFunction");
  param();
}

function otherFunction() {
  console.log("Hello from otherFunction");
}

myFunction(otherFunction);

//29
function myFunction() {
}

console.log(myFunction.name); // Output: "myFunction"

