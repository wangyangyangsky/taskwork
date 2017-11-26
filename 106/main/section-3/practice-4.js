'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

	const result =[];

    for(var i=0;i < collectionA.length;)
    {
      var c = 0;
      var res={};
      for(var j = i;j < collectionA.length;j++)
      {
      	 if(collectionA[i] == collectionA[j])
      	 {
      	 	c++;
      	 }
      	
      }
      if(collectionA[i].indexOf("-")>0)
      	 {
      	 	res['key'] = collectionA[i].split("-")[0];
      	 	res['count']= parseInt(collectionA[i].split("-")[1]);
      	 	result.push(res);
      	 	i++;
      	 	continue;
      	 }
        res["key"]=collectionA[i];
        res["count"]=c;

        result.push(res);
        i+=c;
   }
       var C=[];
       C=objectB.value;
       var a;
		for(var i=0;i<C.length;i++)
		  for(var j=0;j<result.length;j++)
		      if(C[i]==result[j].key)
		        {a=result[j].count;
		          result[j].count=a-parseInt(a/3);}
        return result;

  //return '实现练习要求，并改写该行代码。';
}
