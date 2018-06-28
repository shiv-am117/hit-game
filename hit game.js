$(document).ready(function(){
	var score=0;
	$("#score").text("Score :  "+score);
	var count=1;
	var time=2000;
	function algo(){
		time/2;
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
	function changetime(){
		if(time>700)
		time-=100;
		setTimeout(repeat,time);
	}
	function repeat(){
		algo();
		changetime();
	}
	setTimeout(repeat,time);


});