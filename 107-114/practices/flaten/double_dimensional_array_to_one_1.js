'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return (collection + '').split(',').map(x => Number(x));
}

module.exports = double_to_one;
