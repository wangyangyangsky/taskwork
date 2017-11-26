'use strict';
var even_group_calculate_average = function(collection){

   var arr = [];//偶数个数组集合
   var A = [];  //偶数个中的偶数集合
   var sum = 0;
   var ave;
   var B = [];//三位数结果
   var C = [];//两位数
   var D = [];//一位数
   var E = [];//三位
   var result = [];
   var sumc = 0,sumd = 0,sume = 0;
   var avec,aved,avee;
   for(var i=1;i < collection.length;i++)
   {
   	  arr.push(collection[i]);
   	  i +=2;
   }
   for(var j=0;j < arr.length;i++)
   {
   	 if(arr[j] % 2 === 0)
   	 {
        A.push(arr[j]);
   	 }
   }

   if(A.length > 0)
   {
   	    if(A[0].toString().length===3)
   	    {
   	    	for(var i = 0;i < A.length;i ++) 
   	    	{
   	    		sum += A[i];
   	    	}
            ave = sum/A.length;
            B.push(ave);
            return B ;
   	    }
   	    else 
   	    {
   	    	for(var i = 0;i < A.length;i ++)
   	    	{
   	    		if(A[i].toString().length == 2)
   	    			{
   	    				C.push(A[i]);
                        
   	    			}
   	    		else if(A[i].toString().length == 1)
   	    			{D.push(A[i]);}
   	    		else{
   	    			E.push(A[i]);
   	    		}
   	    	}
   	    	for(var i=0;i<C.length;i++)
            {
                sumc+=C[i];
            }
            avec =sumc/C.length;
            result.push(avec);
            for(var i=0;i<D.length;i++)
            {
                sumd+=D[i];
            }
            aved =sumd/D.length;
            result.push(aved);
            for(var i=0;i<E.length;i++)
            {
                sume+=E[i];
            }
            avee =sume/E.length;
            result.push(avee);

            return result;
   	    }
   }
   else
   {
   	    return [0];
   }
   
   
   
};
module.exports = even_group_calculate_average;
