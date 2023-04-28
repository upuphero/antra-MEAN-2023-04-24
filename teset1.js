
function sortAlphabetically(str) {
    return str.toLowerCase().split('').sort().join('');
  }
  console.log(sortAlphabetically('webmaster')); // Output: 'abeemrstw'