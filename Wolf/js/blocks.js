var varStack = new Array();
var varID = 0;
function iterative_compile(vars,params){
	var trim = false;
	var output = "";
	for (var i = 0; i < vars.length; i++) {
		//console.log(vars[i]);

		if (vars[i]) {

			if (typeof vars[i] === "object") {
				if(exportRoot.outputCompile){
					console.log("   unfolding "+vars[i].name);
				}
				var name = "$var"+varID;
				varStack.push(name+"="+exportRoot.compile(vars[i]));
				output += name+",";
				varID++;
			}else{
				if(exportRoot.outputCompile){
					console.log("   writting "+vars[i]);
				}
				trim = true;
				if(params[i][2] === "string"){
					var name = "$var"+varID;
					varStack.push(name+"=\""+vars[i]+"\"");
					output += name+",";
					varID++;
					//output += "\"" + vars[i] + "\",";
				}else{
					var name = "$var"+varID;
					varStack.push(name+"="+vars[i]);
					output += name+",";
					varID++;
					//output += "" + vars[i] + ",";
				}
			}
		
		}
	}

	if(output.charAt(output.length-1) === ','){
		//console.log("removed comma");
		output = output.substring(0,output.length-1);
	}

	//if (trim) {
	//	output = output.substring(0, output.length - 1);
	//}
	return output;
}

//////////////////////////CODE BLOCKS
var funcMap = new Map();
var Block = function(mc){
	this.root = true;
	this.vars = [null,null];
	this.focus = true;
	this.mc = mc;
	this.frame_color = 0;
	this.numChildBlocks = 0;
	this.varName = null;
	this.occupied = false;
	this.inputFrame = 0;
	this.outputFrame = 0;
	this.myColor = "#003973";
	this.returnsArray = false;
	function compile(){
		return iterative_compile(this.vars,this.params);
	}
	this.compile = compile;
	this.vars = [null, null];
	this.inputs = [null,null];
	this.childMCs = [null,null];
	this.blockObject = [false,false];
	
	function numParams(integer){
		this.vars = Array.apply(null, Array(integer));
		this.inputs = Array.apply(null, Array(integer));
		this.childMCs = Array.apply(null, Array(integer));
		this.blockObject = Array.apply(false, Array(integer));
	}
	this.numParams = numParams;


}

var Sentence = function (mc) {
	Block.apply(this,arguments);
	this.name = "Sentence";
	this.desc = "A list of characters";
	this.type = "primative";
	this.frame_color = 1;
	this.params = [
		["name", true, "string"],
		["value", true, "string"]
	];
	this.codeBegin = "";
	this.codeEnd = "";
	this.numParams(this.params.length);
	function compile(){
		return vars[1];
	}
	this.compile = compile;
}
Sentence.prototype = Block.prototype;       
Sentence.prototype.constructor = Sentence;  
funcMap.set("Sentence", Sentence);



var WolframAlpha = function (mc) {
	Block.apply(this,arguments);
	this.name = "wolframAlpha";
	this.desc = "Sends query to Wolfram|Alpha and imports the output.";
	this.type = "search";
	this.params = [
		["query", false, "string"],
		["format", true, "string"]
	];
	this.codeBegin = "WolframAlpha[";
	this.codeEnd = "]";
}
WolframAlpha.prototype = Block.prototype;       
WolframAlpha.prototype.constructor = WolframAlpha;  
funcMap.set("wolframAlpha", WolframAlpha);


var SocialMediaData = function (mc) {
	Block.apply(this,arguments);
	this.name = "SocialMediaData";
	this.desc = "gives the value of the specified property for the social media entity.";
	this.type = "search";
	this.params = [
		["name", false, "string"],
		["property", true, "string"],
	    ["acc_id", true, "string"]
	];
	
	this.codeBegin = "SocialMediaData[";
	this.codeEnd = "]";
	this.numParams(this.params.length);
	function compile(){
		if(getHashedState(this.vars)===10){
			//ignoreID
			var vars = this.vars;
			vars[2] = null;
			return iterative_compile(this.vars,this.params);
		}
		if(getHashedState(this.vars)===30){
			var vars = this.vars.slice(0); 
			var params = [[false,false,"list"],[false,false,"string"]];
			vars[0] = "{\""+vars[0]+"\","+vars[2]+"}";
			vars[2] = null;
			return iterative_compile(vars,params);
		}
		return iterative_compile(this.vars,this.params);
	}
	this.compile = compile;
}
SocialMediaData.prototype = Block.prototype;       
SocialMediaData.prototype.constructor = SocialMediaData;  
funcMap.set("SocialMediaData", SocialMediaData);



var Image = function (mc) {
	Block.apply(this,arguments);
	this.name = "Image";
	this.desc = "A picture.";
	this.type = "search";
	this.inputFrame = 0;
	this.params = [
		["Browse", true, "browse"],
		["URL", true, "string"],
	    ["Camera", true, "string"]
	];
	
	this.codeBegin = "Import[";
	this.codeEnd = "]";
	this.numParams(this.params.length);
	function compile(){
		//console.log("Hashed: "+getHashedState(this.vars));
		var hash = getHashedState(this.vars);
		if(hash === 2 && this.inputs[1] && this.inputs[2]){
			this.inputs[1].btn.readOnly = true;
			this.inputs[2].btn.readOnly = true;

		}
		
		return iterative_compile(this.vars,this.params);
	}
	this.compile = compile;
}
Image.prototype = Block.prototype;       
Image.prototype.constructor = Image;  
funcMap.set("Image", Image);
/*
var WikipediaData = function (mc) {
	Block.apply(this,arguments);
	this.name = "WikipediaData";
	this.desc = "Scrapes Wikipedia using the parameters given.";
	this.type = "search";
	this.params = [
		["article", false, "string"],
		["property", true, "string"],
	    ["options", true, "string"]
	];
	this.codeBegin = "SocialMediaData[";
	this.codeEnd = "]";
	this.numParams(this.params.length);
	function compile(){
		if(getHashedState(this.vars)===10){
			//ignoreID
			var vars = this.vars;
			vars[2] = null;
			return iterative_compile(this.vars,this.params);
		}
		if(getHashedState(this.vars)===30){
			var vars = this.vars;
			var params = [[false,false,"list"],[false,false,"string"]];
			vars[0] = "{\""+vars[0]+"\","+vars[2]+"}";
			vars[2] = null;
			return iterative_compile(vars,params);
		}
		return iterative_compile(this.vars,this.params);
	}
	this.compile = compile;
}
WikipediaData.prototype = Block.prototype;       
WikipediaData.prototype.constructor = WikipediaData;  
funcMap.set("WikipediaData", WikipediaData);
*/
var getHashedState = exportRoot.getHashedState;

//GRAPHICS LIBS
var Blur = function (mc) {
	Block.apply(this,arguments);
	this.name = "Blur";
	this.desc = "Blurs an Image";
	this.type = "draw";
	this.outputFrame = 2;
	this.frame_color = 2;
	this.myColor = "#E38D00";
	this.params = [
		["Image(s)", false, "Image/FetchFaces"],
		["Strength", true, "integer"]
	];
	
	this.codeBegin = "Blur[";
	this.codeEnd = "]";
	this.numParams(this.params.length);
	if(true){
			this.codeBegin = "";
			this.codeEnd = "";
	}
	function compile(){
		if(true){
			//REMOVE THE CURLY BRACES
			if(this.vars[1] && this.vars[0]){
				console.log(this.vars);
				return "Map[Blur[#,"+this.vars[1]+"]&,"+exportRoot.compile(this.vars[0])+"]";
			}else if(this.vars[0]){
				return "Map[Blur[#,"+"0"+"]&,"+exportRoot.compile(this.vars[0])+"]";
			}else{
				return "Blur[]";
			}
		}
		return iterative_compile(this.vars,this.params);
	}
	this.compile = compile;
}
Blur.prototype = Block.prototype;       
Blur.prototype.constructor = Blur;  
funcMap.set("Blur", Blur);



var ImageIdentify = function (mc) {
	Block.apply(this,arguments);
	this.name = "ImageIdentify";
	this.desc = "Identifies an image";
	this.type = "search";
	this.outputFrame = 1;
	this.frame_color = 2;
	//this.myColor = "#E38D00";
	this.params = [
		["Image", false, "Image"],
		["Category", true, "string"],
		["n", false, "integer"]
	];
	
	this.codeBegin = "ImageIdentify[";
	this.codeEnd = "]";
	this.numParams(this.params.length);
	function compile(){
		return iterative_compile(this.vars,this.params);
	}
	this.compile = compile;
}
ImageIdentify.prototype = Block.prototype;       
ImageIdentify.prototype.constructor = ImageIdentify;  
funcMap.set("ImageIdentify", ImageIdentify);


//DEMO FUNCTIONS
var FetchFaces = function (mc) {
	Block.apply(this,arguments);
	this.name = "FetchFaces";
	this.desc = "Grabs all the faces in the image";
	this.type = "search";
	this.outputFrame = 1;
	this.frame_color = 2;
	//this.myColor = "#E38D00";
	this.params = [
		["Image", false, "Image"]
	];
	
	this.codeBegin = "Map[";
	this.codeEnd = "]";
	this.numParams(this.params.length);
	this.returnsArray = true;
	function compile(){
		//return iterative_compile(this.vars,this.params);
		//console.log("locally compiled");
		if(this.vars[0]){
			var name = "$var"+varID;
			varStack.push(name+"="+exportRoot.compile(this.vars[0]));
			//output += name+",";
			varID++;
			//var img = exportRoot.compile(this.vars[0]);
			return "ImageTrim["+name+",#]&,FindFaces["+name+"]";
		}else{
			return "ImageTrim["+",#]&,FindFaces["+"]";
		}
	}
	this.compile = compile;
}
FetchFaces.prototype = Block.prototype;       
FetchFaces.prototype.constructor = FetchFaces;  
funcMap.set("FetchFaces", FetchFaces);

var Classify = function (mc) {
	Block.apply(this,arguments);
	this.name = "Classify";
	this.desc = "Classify something to something";
	this.type = "search";
	this.outputFrame = 2;
	this.frame_color = 2;
	//this.myColor = "#E38D00";
	this.params = [
		["Classifier", true, "string",["NotablePerson","Animal"]],
		["Object", false, "FetchFaces"]
		

	];
	
	this.codeBegin = "Classify[";
	this.codeEnd = "]";
	this.numParams(this.params.length);
	function compile(){
		return iterative_compile(this.vars,this.params);
	}
	this.compile = compile;
}
Classify.prototype = Block.prototype;       
Classify.prototype.constructor = Classify;  
funcMap.set("Classify", Classify);


var ImageCollage = function (mc) {
	Block.apply(this,arguments);
	this.name = "ImageCollage";
	this.desc = "Returns a collage of Images";
	this.type = "draw";
	this.outputFrame = 2;
	this.frame_color = 2;
	this.myColor = "#E38D00";
	this.params = [
		["Images", true, "Blur/FetchFaces/Image"],
		["Filling", true, "string"],
		["Method", true, "string"]
	];
	
	this.codeBegin = "ImageCollage[";
	this.codeEnd = ",\"Fill\", Method->\"Rows\"]";
	this.numParams(this.params.length);
	function compile(){
		//return iterative_compile(this.vars,this.params);
		if(this.vars[0]){
			return exportRoot.compile(this.vars[0]);
		}else{
			return ;
		}
	}
	this.compile = compile;
}
ImageCollage.prototype = Block.prototype;       
ImageCollage.prototype.constructor = ImageCollage;  
funcMap.set("ImageCollage", ImageCollage);

