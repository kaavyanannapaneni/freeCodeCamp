function booWho(bool) {
  if(bool === true || bool === false){
  return true;
  }
  return false;
}

console.log(booWho(1));


---
  
  function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(null));
