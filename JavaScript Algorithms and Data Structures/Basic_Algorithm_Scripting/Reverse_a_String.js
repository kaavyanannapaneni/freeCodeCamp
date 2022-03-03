function reverseString(str) {
  //convert the string to an array to access each character
  str = [...str];
  console.log(str);
  // an empty string to collect the result
  let rev = "";
  //traverse the array from (n-1) char to the the 0th char 
  for(let i  = str.length - 1; i >= 0 ; i--){
    rev  +=  str[i];
  }
  return rev;
}

console.log(reverseString("hello"));
