'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
    var result = [];
    var collection_all = [
        '','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var i;
    
	if(number_a < number_b)
	{
	    for(i=number_a;i<=number_b;i++)
	    {
	    	result.push(collection_all[i]);
	    }
    }
	else if(number_a > number_b)
		 {
		 	for(i=number_a;i>=number_b;i--)
		 	result.push(collection_all[i]);	
		 }
	else if(number_a == number_b)
		 {
		 	result.push(collection_all[number_a]);
		 }

  return result;
}

module.exports = get_letter_interval;
