var varStack = new Array();
var varID = 0;
function iterative_compile(vars,params){
	var trim = false;
	var output = "";
	for (var i = 0; i < vars.length; i++) {
		if (vars[i]) {

			if (typeof vars[i] === "object") {
				if(outputCompile){
					console.log("   unfolding "+vars[i].name);
				}
				var name = "$var"+varID;
				varStack.push(name+"="+exportRoot.compile(vars[i]));
				output += name+",";
				varID++;
			}else{
				if(outputCompile){
					console.log("   writting "+vars[i]);
				}
				trim = true;
				if(params[i][2] === "string"){
					var name = "$var"+varID;
					varStack.push(name+"=\""+vars[i]+"\"");
					output += name+",";
					varID++;
				}else{
					var name = "$var"+varID;
					varStack.push(name+"="+vars[i]);
					output += name+",";
					varID++;
				}
			}
		
		}
	}

	if(output.charAt(output.length-1) === ','){
		output = output.substring(0,output.length-1);
	}
	return output;
}
