'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
   var result = [];
    for (var i = 0; i < collection_a.length; i ++){
        if(collection_b.indexOf(collection_a[i]) == -1){
            result.push(collection_a[i]);
        }
    }
    return result;
}

module.exports = choose_no_common_elements;
