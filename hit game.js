$(document).ready(function(){
	var score=0;
	$("#score").text("Score :  "+score);
	var count=1;
	var time=2000;
	var ftime=1000;
	function algo(){
		flag=0;
		var rand=(Math.floor(Math.random()*10))%9+1;
		var idreq='b'+rand;
		if(count>0) {text="X"; count*=-1; time=1000;}
		else {text="O"; count*=-1; time=ftime--;}
		for (var i = 1 ; i <= 9; i++) {
			var curid='b'+i;
			if(curid===idreq) $("#"+curid).text(text);
			else $("#"+curid).text("O");
			
		}
		$("#"+idreq).click(function(){
			if($("#"+idreq).text()==="X") {score+=100; $("#"+idreq).text("O"); }
			$("#score").text("Score :  "+score);
		});

		
	}

	setInterval(algo,time);

});