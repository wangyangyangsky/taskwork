'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
   const C =[];
   for(var i=0;i < collectionA.length;)
   {
      var c = 0;
      for(var j = i;j < collectionA.length;j++)
      {
      	 if(collectionA[i] == collectionA[j])
      	 {
      	 	c++;
          
      	 }
      }
   
        C.push({
            key: collectionA[i],
            count: c
            })
        i+=c;
   }

   var array=[];
   array=objectB.value;
   var f;
   for(var i=0;i<array.length;i++)
   {
     for(var j=0;j<C.length;j++)
      if(array[i]==C[j].key)
              {f=C[j].count;
          C[j].count=f-parseInt(f/3);}

    }


    return C;


  //return '实现练习要求，并改写该行代码。';
}
