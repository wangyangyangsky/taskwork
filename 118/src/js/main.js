$(function() {
            $( "#dialog" ).dialog({
            	autoOpen: false,
      			show: {
        		effect: "blind",
        		duration: 1000
      			},
      			
			});

			$( "#selectable" ).selectable();
 
    		$( "#add" ).click(function() {
      			$( "#dialog" ).dialog( "open" );
    		});
    		$( "#submit" ).click(function() {
      			$( "#dialog" ).dialog( "close" );
      			if($(".ui-selected").attr("id") == "text"){
      				$("#container").append('<p>文本<input type="text" id="addtext"><button class="delete">删除</button></p>')
      			}
      			if($(".ui-selected").attr("id") == "time"){
      				$("#container").append('<p>时间<input type="text" id="addtime"><button class="delete">删除</button></p>')
      			}
    		});
    		$( "#close" ).click(function() {
      			$( "#dialog" ).dialog( "close" );
    		});
    		$(".delete").click(function(){
    			$(this).parent().remove();
    		});

    		$("#showedit").click(function(){
    			if($(this).html()=="预览"){
               		$(this).text('编辑');
               		$("#add").hide();
               		$(".delete").hide();
    			}
    			else if($(this).html()=="编辑"){
               		$(this).text('预览');
               		$("#add").show();
               		$(".delete").show();
    			 }
    		});

 	 	});
   		 