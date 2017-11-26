'use strict';

function even_to_letter(collection) {

  //在这里写入代码
   var collection_all = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
   var result = [];
    for(var i = 0; i < collection.length; i++){
        if(collection[i] % 2 == 0){
            result.push(collection_all[collection[i]-1]);
        }
    }
    return result;
}

module.exports = even_to_letter;
