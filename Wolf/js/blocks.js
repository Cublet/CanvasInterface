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
	function compile(){
		return iterative_compile(this.vars,this.params);
	}
	this.compile = compile;
	this.vars = [null, null];
	
	this.inputs = [null,null];
	this.childMCs = [null,null]
	
	function numParams(integer){
		this.vars = Array.apply(null, Array(integer));
		this.inputs = Array.apply(null, Array(integer));
		this.childMCs = Array.apply(null, Array(integer));
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
	    ["account_id", true, "integer"]
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
	this.params = [
		["Browse", true, "browse"],
		["URL", true, "string"],
	    ["CameraIcon", true, "integer"]
	];
	
	this.codeBegin = "Import[";
	this.codeEnd = "];\n%";
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