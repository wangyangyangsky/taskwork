'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var A = [];
  for(var i=0;i<collection.length;i++)
  {
  	if(collection[i]%2 == 0)
  		A.push(collection[i]);
  }
  return A[0];
}

module.exports = find_first_even;

