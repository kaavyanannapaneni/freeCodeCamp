//using recursion

function factorialize(num) {
  if(num === 0){
    return 1;
  }
  else if(num < 0){
    return -1;
  }
  else
  {
  return num * factorialize(num-1);
  }
}

console.log(factorialize(7));


---

function factorialize(num) {
  let fact  = 1;
  for(let i = num; i > 1 ; i--){
      fact *= i; 
  }
  return fact;
}

console.log(factorialize(5));

---
//using multiple ternary operator
  
 return num > 0 ? num*factorialize(num - 1) 
         : num == 0 ? 1 : undefined;
