// PSEUDOCODE

// Generate an empty list
// Iterate over the list until it's filled
// For each iteration generate a random number
// Round the number so only integers are returned
// Add 1 so 0 is never returned
// Run a check to see if the number already exists in the list, if it does not then push it to the end of the list


// ALGORITHM ANALYSIS

// Because the size of the list is bounded by a value and does not grow based on inputs, this algorithm runs in O(1) Space.
// The number of iterations are bounded by a value, but because the each value needs to be ran through a check this algorithm runs in O(n) Time.

const generateList = () => {
  let arr = [];
  while(arr.length < 10000){
    const num = Math.floor(Math.random() * 10000) + 1;
    if(arr.indexOf(num) === -1) arr.push(num);
  }
  console.log(arr);
}

generateList()