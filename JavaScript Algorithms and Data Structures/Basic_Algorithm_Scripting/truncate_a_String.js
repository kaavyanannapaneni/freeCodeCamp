function truncateString(str, num) {
  let truncate = "";
  if(str.length <= num){
    return str;
  }
  str = [...str];
  for(let i = 0; i < num ;i++){
  truncate += str[i];
  }
  return truncate + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length +2));

---
  
#### using substring() method

function truncateString(str, num) {
  if(str.length <= num){
    return str;
  }
  let strTruncate = str.substring(0,num);
  return strTruncate + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
