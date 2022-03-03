function confirmEnding(str, target) {
console.log(str.length);
console.log(target.length);
let ending = str.slice(str.length - target.length) === target;
return ending;

}

console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));

---
  
function confirmEnding(str, target) {
  if(str.endsWith(target)){
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
