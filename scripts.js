/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.
*/

//O(N).. linear time: one loop, and O(1) .. memory spaces does not grow with size of input

//The next functions are array maniupulations
const makeRandomNumber = (min,max) => {
  return Math.round(Math.random()*(max-min)+min);
}

const findInArray = (yourArray,singleEle) => {
  return yourArray.find(function(element) {
    return element == singleEle
  });
}

const filterArray = (yourArray,getRidof) => {
  return yourArray.filter(function(value, index, arr) {
    return value != getRidof;
  })
}

const insertIntoMiddle = (someArray,value,index) => {
  if ((index > someArray.length-1)||(index < 0)) {
    return null;
  } else if (index == 0) {
    return someArray.slice().shift(value)
  } else if (index == someArray.length-1) {
    return someArray.slice().push(value)
  } else {
    let left = someArray.slice(0,index);
    let right = someArray.slice(index,someArray.length);
    return left.concat([value], right)
  }
}

const makeArray = () => {
  let output = [];
  let upper = makeRandomNumber(2,9);
  let temp;
  let i = 0;
  while  (i<upper) {
    temp = makeRandomNumber(1,99)
    if (findInArray(output,temp) != temp) {
      output.push(temp);
      output.push(temp);
      output.push(temp);
      i++
      //console.log('i = ', i, ' , temp = ', temp)
    }
  }
  temp = makeRandomNumber(1,99)
  if (findInArray(output,temp) != temp) {
    output.push(temp);}
  return output;
}

const shuffleArray = (yourArray) => {
  let picked;
  let output = [];
  let copy = yourArray.slice();
  while (copy.length > 0) {
    picked = Math.floor(Math.random()*copy.length)
    output.push(copy[picked])
    copy.splice(picked,1)
  }
  return output;
}

const sortArray = (yourArray) => {
  let copied = yourArray.slice();
  return copied.sort(function(a,b) {
    return a-b})
}
//End of functions that generate arrays

const findSingle = (yourArray) => {
  let copied = sortArray(yourArray);
  console.log(copied)
  for (i = 0; i < copied.length; i++) {
    if (
      ((copied[i-1] == undefined) && (copied[i] != copied[i+1])) ||
      ((copied[i-1] != copied[i]) && (copied[i] != copied[i+1])) ||
      ((copied[i-1] != copied[i]) && (copied[i+1] == undefined))
    ) {
      return copied[i];
    }
  }
  return null;
}


let test1 = makeArray();
//console.log('test1 = ', test1)
let test2 = shuffleArray(test1);
console.log('test2 = ', test2)
let outcome = findSingle(test2);
console.log('outcome = ', outcome)

$(document).ready(function() {
  $('#button1').click(function(){
    $('#output-section-0').text('hello world')
  })
});
