/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.
*/

const makeRandomNumber = (min,max) => {
  return Math.round(Math.random()*(max-min)+min);
}

const makeArray = () => {
  let output = [];
  let upper = makeRandomNumber(2,10);
  let temp;
  let i = 0;
  while  (i<upper) {
    temp = makeRandomNumber(1,99)
    if (output.find(function(element) {return element == temp}) != temp) {
      output.push(temp);
      i++
      console.log('i = ', i, ' , temp = ', temp)
    }
  }
  return output;
}

let test1 = makeArray();
console.log(test1)

$(document).ready(function() {
  $('#button1').click(function(){
    $('#output-section-0').text('hello world')
  })
});
