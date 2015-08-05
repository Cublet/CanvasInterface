var focusBtn = null;
var lastLib = "none";
var openHandler = null;
var focusLib = null;
var outputCompile = false;
var focusBlock = null;
var focusMC = null;
var checkUpdate = false;

function removeEmptyStrings(array){
	for(var i=0; i<array.length;){
		if(array[i]===""){
			array.splice(i,1);
		}else{
			i++;
		}
	}
	return array;
}