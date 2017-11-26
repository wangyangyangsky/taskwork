'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

	 var C=[];
     C=objectB.value;
     var a;

 for(var i=0;i<C.length;i++)
  for(var j=0;j<collectionA.length;j++)
      if(C[i]==collectionA[j].key)
        {a=collectionA[j].count;
          collectionA[j].count=a-parseInt(a/3);}

    return collectionA; 
 // return '实现练习要求，并改写该行代码。';
}
