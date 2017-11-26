'use strict';

module.exports = function countSameElements(collection) {
	 
    const result =[];

    for(var i=0;i < collection.length;)
    {
      var c = 0;
      var res={};
      for(var j = i;j < collection.length;j++)
      {
      	 if(collection[i] == collection[j])
      	 {
      	 	c++;
      	 }
      	
      }
      if(collection[i].indexOf("-")>0)
      	 {
      	 	res['key'] = collection[i].split("-")[0];
      	 	res['count']= parseInt(collection[i].split("-")[1]);
      	 	result.push(res);
      	 	i++;
      	 	continue;
      	 }
        res["key"]=collection[i];
        res["count"]=c;

        result.push(res);
        i+=c;
   }
   
   return result;
  //return '实现练习要求，并改写该行代码。';
}
