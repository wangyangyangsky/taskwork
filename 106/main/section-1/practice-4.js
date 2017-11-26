'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
 
      const result = [];
      const A = [];
       
      for(var i=0;i < collectionA.length;i++)
          A.push(collectionA[i].key);

      for(var j=0;j < A.length;j++)
      	 if(objectB.value.indexOf(A[j])> -1)
      	 	result.push(A[j]);

       return result;

  //return '实现练习要求，并改写该行代码。';
}
