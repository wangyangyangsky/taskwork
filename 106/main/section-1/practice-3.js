'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
     const result = [];
	 for(var i=0;i<collectionA.length;i++)
        if(objectB.value.indexOf(collectionA[i])>-1)
                result.push(collectionA[i]);

    return result;
  //return '实现练习要求，并改写该行代码。';
}
