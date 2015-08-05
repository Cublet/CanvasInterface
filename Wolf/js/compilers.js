var varStack = new Array();

function iterative_compile(vars,params,paramIDs){
	var trim = false;
	var output = "";
	
	for (var i = 0; i < vars.length; i++) {
		if (vars[i]) {
			if (typeof vars[i] === "object") {
				if(outputCompile){
					console.log("   unfolding "+vars[i].name);
				}
				var name = "$"+params[i][0]+paramIDs[i];
				varStack.push(name+"="+exportRoot.compile(vars[i]));
				output += name+",";
			
			}else{
				if(outputCompile){
					console.log("   writting "+vars[i]);
				}
				trim = true;
				if(params[i][2] === "string"){
					var name = "$"+params[i][0]+paramIDs[i];
					varStack.push(name+"=\""+vars[i]+"\"");
					output += name+",";
					
				}else{
					var name = "$"+params[i][0]+paramIDs[i];
					varStack.push(name+"="+vars[i]);
					output += name+",";
					
				}
			}
		
		}
	}

	if(output.charAt(output.length-1) === ','){
		output = output.substring(0,output.length-1);
	}
	return output;
}
