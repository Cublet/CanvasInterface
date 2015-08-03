
//List of function blocks


var funcMap = new Map();
var Block = function(mc){
	this.root = true;						//Is this block the root of the connections			
	this.focus = true;						//Is this block the one the user is focused on
	this.mc = mc;							//MovieClip that corresponds to this function block
	this.myColor = "#003973";				//Color of the block
	this.inputsType = new Array();			//Array of input types
	this.outputType = "Null";				//Output type

	function compile(){	
		return iterative_compile(this.vars,this.params);	//Default compiler option
	}
	this.compile = compile;
	
	function numParams(integer){							//Initializes arrays
		this.vars = Array.apply(null, Array(integer));		//The values of the inputs
		this.inputs = Array.apply(null, Array(integer));	//The DOM elements corresponding to the values
		this.childMCs = Array.apply(null, Array(integer));	//The child blocks MovieClips
	}
	this.numParams = numParams;
}

//Example on how to create a new block
var Blur = function (mc) {
	Block.apply(this,arguments);				//Extends Block
	this.name = "Blur";							//Name of Block
	this.desc = "Blurs an Image";				//Description of Blocks functionality
	this.type = "draw";							//Block category {primitive/search/draw/math}
	this.myColor = "#E38D00";					//Color of block
	this.params = [								//Block Parameters [Name, Optional,Type]
		["Image", false, "Image"],
		["Strength", true, "integer"]
	];
	this.inputsType = new Array("Image");		//Array of non-primitive parameter types; could be removed
	this.outputType = "Image";					//The output type of the block
	this.codeBegin = "Blur[";					//How the generated code should start
	this.codeEnd = "]";							//How the generated code should end
	this.numParams(this.params.length);
}
Blur.prototype = Block.prototype;       
Blur.prototype.constructor = Blur;  
funcMap.set("Blur", Blur);

//To add block to library scroll to the bottom and add it to one of the gen functions

//TODO: USE THIS FOR BLURARRAY
/*
		if(this.vars[0] && !this.vars[0].list){
			this.codeBegin = "Blur[";
			this.codeEnd = "]";
			return iterative_compile(this.vars,this.params);
		}else{
			this.codeBegin = "";
			this.codeEnd = "";
			//REMOVE THE CURLY BRACES
			if(this.vars[1] && this.vars[0]){
				return "Map[Blur[#,"+this.vars[1]+"]&,"+exportRoot.compile(this.vars[0])+"]";
			}else if(this.vars[0]){
				return "Map[Blur[#,"+"0"+"]&,"+exportRoot.compile(this.vars[0])+"]";
			}else{
				return "Blur[]";
			}
		}
*/

var Sentence = function (mc) {
	Block.apply(this,arguments);
	this.name = "Sentence";
	this.desc = "A list of characters";
	this.type = "primative";
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



var ImageImport = function (mc) {
	Block.apply(this,arguments);
	this.name = "ImageImport";
	this.desc = "A picture.";
	this.type = "search";
	this.params = [
		["Browse", true, "browse"],
		["URL", true, "string"],
	    ["Camera", true, "string"]
	];
	this.inputsType = new Array();
	this.outputType = "Image";
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
ImageImport.prototype = Block.prototype;       
ImageImport.prototype.constructor = ImageImport;  
funcMap.set("ImageImport", ImageImport);
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


var ImageIdentify = function (mc) {
	Block.apply(this,arguments);
	this.name = "ImageIdentify";
	this.desc = "Identifies an image";
	this.type = "search";

	this.params = [
		["Image", false, "Image"],
		["Category", true, "string"],
		["n", false, "integer"]
	];
	this.inputsType = new Array("Image");
	this.outputType = "Entity";
	
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
	this.params = [
		["Image", false, "Image"]
	];
	this.inputsType = new Array("Image");
	this.outputType = "ImageArray";

	this.codeBegin = "Map[";
	this.codeEnd = "]";
	this.numParams(this.params.length);
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

	this.params = [
		["Classifier", true, "string",["NotablePerson","Animal"]],
		["Image", false, "Image"]
	];
	this.inputsType = new Array("Image");
	this.outputType = "Entity";
	
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
	this.myColor = "#E38D00";

	this.params = [
		["Images", true, "ImageArray"],
		["Filling", true, "string"],
		["Method", true, "string"]
	];
	this.inputsType = new Array("ImageArray");
	this.outputType = "Image";

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




function genSearchLibs(){
	return new Array(
		new WolframAlpha(),
		new SocialMediaData(), 
		new ImageImport(),
		new ImageIdentify(), 
		new FetchFaces(),
		new Classify()
	);
}

function genGraphicsLibs(){
	return new Array(
		new Blur(),
		new ImageCollage()
	);
}

function genMathLibs(){
	return new Array(
	);
}

function genCustomLibs(){
	return new Array(
		new Blur()
	);
}
