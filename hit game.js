$(document).ready(function(){
	var score=0;
	$("#score").text("Score :  "+score);
	var count=1;

	function algo(){
	
		if(count>0) {
		rand=(Math.floor(Math.random()*10))%9+1;
	    idreq='b'+rand;
		text="X"; count*=-1;
		}
		else {text="O"; count*=-1; }
		 $("#"+idreq).text(text);
			
			
		
		$("#"+idreq).click(function(){
			if($(this).text()==="X") {score+=100; $("#"+idreq).text("O"); }
			$("#score").text("Score :  "+score);

		});
		
	}
	setInterval(algo,1000);


});