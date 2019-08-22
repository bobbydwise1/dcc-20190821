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
      console.log('i = ', i, ' , temp = ', temp)
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
  console.log('length = ', yourArray.length, copy.length)
  for (let i = 0; i < copy.length; i++) {
    picked = Math.floor(Math.random()*copy.length)
    console.log(copy[picked])
    output.push(copy[picked])
    copy.splice(picked,1)
    //console.log('output = ', output)
    //console.log('copy = ', copy)
  }
  return output;
}

let test1 = makeArray();
console.log('test1 = ', test1)
let test2 = shuffleArray(test1);
console.log('test2 = ', test2)

$(document).ready(function() {
  $('#button1').click(function(){
    $('#output-section-0').text('hello world')
  })
});
