document.getElementById("btn").addEventListener("click",function(){
  let str = document.getElementById("input").value;
  palindrome(str);
})

function palindrome(str) {
  let reverse = "";
  let result = document.getElementById("result");
    let convertToLower = str.toLowerCase();
    str = convertToLower.replace(/[^a-z^A-Z^0-9]/ig, '');
    for(let i = str.length - 1; i >= 0; i--){
      reverse += str[i];
    }
    if(str === reverse){
      result.textContent = "Palindrome!"
    return result;
    }
    else
    {
      result.textContent = "Not a palindrome!";
      return result;
    }
  }
  
  