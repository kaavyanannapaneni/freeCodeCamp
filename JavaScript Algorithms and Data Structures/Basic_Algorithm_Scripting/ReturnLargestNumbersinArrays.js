function largestOfFour(arr) {
  let largest;
  let result = [];
  for(let i = 0 ; i < arr.length; i++){
    //initialize largest to first element 
    largest  = arr[i][0];
    //iterate through sub-array
    for(let j = 1 ; j < arr[i].length ; j++){
      if(arr[i][j] > largest){
        largest = arr[i][j];
      }
    }
    result[i] = largest;
  }
  //console.log(result);
  return result;
}

largestOfFour(([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
