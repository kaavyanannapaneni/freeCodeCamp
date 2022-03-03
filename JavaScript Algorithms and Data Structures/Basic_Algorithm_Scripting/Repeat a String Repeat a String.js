function repeatStringNumTimes(str, num) {
  let repeat = "";
  for(let i = 0; i < num ; i++){
      repeat += str;
  }
  console.log(repeat);
  return repeat;
}

repeatStringNumTimes("abc", 3);
