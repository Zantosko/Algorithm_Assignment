// PSEUDOCODE

// Generate a list of 1 to 10000 in order
// Iterate over the list starting from the end
// Get random number ranging between 0 and current list length
// floor the number so the list shrinks during each iteration
// Swap the element at the end with the element of the randomly generated index
// Shrink the list and repeat the same steps until the entire array is shuffled


// ALGORITHM ANALYSIS

// The array is sorted in place and doesn't generate a new array, this means the algorithm uses O(1) Space.
// The the number of iterations dependent on the list size, this means the algorithm runs in O(n) Time.

const shuffle = () => {
  let list = Array.from({length: 10000}, (_, i) => i + 1);
  let i = list.length, j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1)); 
    temp = list[j];
    list[j] = list[i];
    list[i] = temp;
  }
  console.log(list)
}

shuffle()