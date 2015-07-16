document.body.style.overflowY = 'scroll';
var btn = document.createElement("textarea");
btn.style.position = "absolute";
btn.style.top = "" + 880 + "px";
btn.style.left = "" + 5 + "px";
btn.style.fontSize = "" + 35 + "px";
btn.style.width = "" + 1600 + "px";
btn.style.height = "" + 210 + "px";
document.body.appendChild(btn);


var wolfDiv = document.createElement("DIV");
wolfDiv.style.position = "absolute";
wolfDiv.style.top = "" + 7 + "px";
wolfDiv.style.right = "" + (15) + "px";
wolfDiv.style.width = "" + (900) + "px";
wolfDiv.style.height = "" + 1090 + "px";
wolfDiv.style.background = "rgb(39, 37, 37)";
wolfDiv.innerHTML = "<img src = 'non_gen_images/wolfIcon.png' style='position:absolute;top:250px;left:250px'>";
document.body.appendChild(wolfDiv);


/*
var coverDiv = document.createElement("DIV");
coverDiv.style.position = "absolute";
coverDiv.style.top = "" + 7 + "px";
coverDiv.style.right = "" + (15) + "px";
coverDiv.style.width = "" + (900) + "px";
coverDiv.style.height = "" + 980 + "px";
coverDiv.style.background = "rgb(39, 37, 37)";
coverDiv.innerHTML = "<img src = 'non_gen_images/wolfIcon.png' style='position:absolute;top:250px;left:250px'>";
document.body.appendChild(coverDiv);
*/

function loadedUp(){
	var output = document.getElementById("output");
	//console.log("width: "+ output.width +"height:"+output.height);
	if(output.width>output.height){
		output.style.width="100%";
		output.style.position = "absolute";
		output.style.top = "calc(50% - "+output.height/2+"px)";
	}else{
		output.style.height="100%";
	}
	//coverDiv.style.display = "none";
}

function updateWolfDiv(string){
	string = string.replace(/(\n)/g,";");
	string = string.substring(0, string.lastIndexOf(";"))
	console.log(string + " is the code.");
	wolfDiv.innerHTML = "<img onload='loadedUp()' id='output' src='https://www.wolframcloud.com/objects/user-59b3837e-6a61-4346-96aa-80da1718a00d/expression?input=" + encodeURIComponent(string) + "'>";
	//coverDiv.style.display = "default";

}