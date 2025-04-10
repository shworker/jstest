
    function LoadClick(){
	var curstep = 0;
	document.getElementById("step").value = curstep;
	document.getElementById("steps").value = 10;
	
	if(curstep >= 0){
	    document.getElementById("next").disabled = false;
	    document.getElementById("last").disabled = false;
	}
    }
    function FirstClick(){
	LoadClick();
    }
    function PrevClick(){
	var curstep = document.getElementById("step").value;
	if(curstep > 0){ 
	    curstep--; 
	    document.getElementById("step").value = curstep;
	}
    }
    function NextClick(){
	var curstep = document.getElementById("step").value;
	var stepcount = document.getElementById("steps").value;
	console.log(curstep + ":" + stepcount);
	if(curstep < stepcount){
	    curstep++;
	    document.getElementById("step").value = curstep;
	}
	if(curstep >= 0){
	    document.getElementById("prev").disabled = false;
	    document.getElementById("first").disabled = false;
	}
	if(curstep < stepcount){
	    document.getElementById("next").disabled = false;
	    document.getElementById("last").disabled = false;
	}else{
	    document.getElementById("next").disabled = true;
	}
    }
    function LastClick(){
	var stepcount = document.getElementById("steps").value;
	document.getElementById("step").value = stepcount;
	if(curstep >= 0){
	    document.getElementById("prev").disabled = false;
	    document.getElementById("first").disabled = false;
	}
	if(curstep < stepcount){
	    document.getElementById("next").disabled = false;
	    document.getElementById("last").disabled = false;
	}else{
	    document.getElementById("next").disabled = true;
	}
    }
