function setCookie(name, value, time) {
	var cook = name+"="+encodeURIComponent(value);
	if(time!=0){
		var now = new Date(); 
		now.setMonth(now.getMonth()+time);
		cook+="; expires="+now.toUTCString();
	}
	document.cookie = cook;
}

function getCookie(name) {
	var cook = document.cookie;
	var cookArray = cook.split("; ");
	var find = "";
	for(var i = 0; i<cookArray.length; i++){
		if(cookArray[i].indexOf(name+"=")==0){
			find = decodeURIComponent(cookArray[i].slice(cookArray[i].indexOf("=")+1));
			break;
		}
	}
	return find;
}