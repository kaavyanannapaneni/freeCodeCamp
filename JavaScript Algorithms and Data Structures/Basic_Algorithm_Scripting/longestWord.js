function findLongestWordLength(str) {
  let longestWord = 0;
  let word = str.split(' ');
  //console.log(word);
  for(let i = 0 ; i < word.length ;i++){
    //console.log(word[i].length);
    if(word[i].length > longestWord){
      longestWord = word[i].length;
    }
  }
  console.log(longestWord);
  return longestWord;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
