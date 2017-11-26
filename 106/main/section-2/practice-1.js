'use strict';

module.exports = function countSameElements(collection) {
  
   var result =[];
   for(var i=0;i < collection.length;)
   {
      var c = 0;
      for(var j = i;j < collection.length;j++)
      {
      	 if(collection[i] == collection[j])
      	 {
      	 	c++;
      	 }
      }
   
        result.push({
            key: collection[i],
            count: c
            })
        i+=c;
   }
   
    return result;
  //return '实现练习要求，并改写该行代码。';
}
