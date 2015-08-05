var deploy_btn;
var blockit_btn;
var b_me;
var name_input;
var desc_input;
var b_myInputs = new Array();
var b_myOutputs;
var varBlocks = new Array();
var root_block;


function blockination(){
	var newBlock = new Block();
	newBlock.name = b_me.title.text;
	newBlock.desc = desc_input.value;
	newBlock.type = "custom";
	newBlock.myColor = "#9A1F3C";
	var params = new Array();
	for(var i=0; i<varBlocks.length; i++){
		params.push([varBlocks[i].title.text,false,varBlocks[i].varType]);
	}
	newBlock.params = params;
	newBlock.inputsType = b_myInputs;
	newBlock.outputType = b_myOutputs;
	var outputLines = btn.value.split("\n");

	for(var i=0; i<varBlocks.length; i++){
		for(var j=0; j<outputLines.length;){
			var varID = varBlocks[i].varID;
			if(outputLines[j].indexOf(varID) === 1){
				outputLines.splice(j,1);
			}else{
				j++;
			}
		}
		
	}

	outputLines = removeEmptyStrings(outputLines);
	
	var output = outputLines[outputLines.length-1];
	outputLines = outputLines.splice(outputLines-1,1);
	newBlock.imports = outputLines;

    newBlock.numParams(newBlock.params.length);
    exportRoot.addCustomBlock(newBlock);

    newBlock.compile = function(){
		
    }
    newBlock.compile();
}

function initializeBlockinater(container){
	b_me = container;
	//deploy_btn = new Button("deploy",container.deploy);
	blockit_btn = new Button("blockit",container.blockit);
	blockit_btn.mc.addEventListener("click", blockination);
}

function updateName(evt){	
	if(name_input.value===""){
		b_me.title.text = "NewBlock001";
	}else{
		b_me.title.text = name_input.value;
	}
}

function createDOMs(){
	setTimeout(function(){
	var nameInput = document.createElement("input");
	nameInput.style.position = "absolute";
	nameInput.style.top = "" + 388 + "px";
	nameInput.style.left = "" + 1277 + "px";
	nameInput.style.fontSize = "" + 29 + "px";
	nameInput.placeholder = "NewBlock001";
	nameInput.style.width = "" + 300 + "px";
	name_input = nameInput;
	document.body.appendChild(nameInput);
	exportRoot.inputClean.push(nameInput);
	nameInput.addEventListener("keyup", updateName);


	var descInput = document.createElement("textarea");
	descInput.style.position = "absolute";
	descInput.style.top = "" + 435 + "px";
	descInput.style.left = "" + 1085 + "px";
	descInput.style.fontSize = "" + 29 + "px";
	descInput.placeholder = "Enter Description Here";
	descInput.style.width = "" + 488 + "px";
	desc_input = descInput;
	document.body.appendChild(descInput);
	exportRoot.inputClean.push(descInput);

	},200);
}

//TODO:MAKE THIS WORK FOR MULTIPLE INPUTS
function getInputType(block){
	var returnArray = new Array();
	for(var i=0; i<block.inputsType.length; i++){
		var varName = block.inputsType[i];
		for(var j=0; j<block.params.length; j++){
			if(varName===block.params[j][2]){
				if(!block.vars[j]){
					returnArray.push(block.inputsType[i]);
				}else{
					returnArray.concat(getInputType(block.vars[j]));
				}
			}
		}
		
	}
	return returnArray;
}

function createInputOutputIcons(outputType,inputsType){

	shapeLoad = true;
		for(var i=0; i<inputsType.length; i++){
				var input = new createjs.Shape();
				input.graphics.beginFill("#9A1F3C").drawRect(0, -30, 20, 30);
				b_me.addChild(input);
				input.x = 270;
				input.y = 100;
				
				var inputMC = new lib.con_sym();
				inputMC.x = 280;
				inputMC.y = 40;
				b_me.addChild(inputMC);
				b_myInputs.push([input,inputMC]);
				input.scaleY=1.5;
				inputMC.name.text=inputsType[i];
			
		}
		//output
		var output = new createjs.Shape();
		output.graphics.beginFill("#9A1F3C").drawRect(0, 0, 20, 10);
		b_me.addChild(output);
		output.x = 270;
		output.y = 135;
		output.scaleY=3;
		var outputMC = new lib.con_sym();
		outputMC.x = 280;
		outputMC.y = 175;
		b_me.addChild(outputMC);
		outputMC.name.text= outputType;
		b_myOutputs =[output,outputMC];
}
function disableVar(m){
	console.log("clicked");
	var btn = m.currentTarget;
	btn.varEnabled = !btn.varEnabled;
	if(btn.varEnabled){
		btn.gotoAndStop(0);
	}else{
		btn.gotoAndStop(1);
	}
	
}
function generateVarBlocks(block){

	for(var i=0; i<block.vars.length; i++){
		if(block.vars[i]){
			if(block.params[i][2] ==="integer" || block.params[i][2] ==="string"){
				//active primitive type
				var varMC = new lib.varBlock();
				varMC.x=45;
				varMC.y=500+varBlocks.length*70;
				varMC.varEnabled = true;
				varMC.title.text = block.params[i][0];
				varMC.varType = block.params[i][2];
				varMC.varID = block.params[i][0]+block.paramIDs[i];
				b_me.addChild(varMC);
				varMC.addEventListener("click",disableVar);
				console.log(block.params[i][0]);
				varBlocks.push(varMC);
			}else{
				//active block
				generateVarBlocks(block.vars[i]);
			}
		}
	}
}

function createBlockination(h_blocks){
	b_me.nothing.visible = false;
	var output = "Block Composition: [";
	var outputType;
	var inputTypes;
	for(var i=0; i<h_blocks.length; i++){
		output+=h_blocks[i].name+",";
		if(h_blocks[i].root){
			root_block = h_blocks[i];
			outputType = h_blocks[i].outputType;
			inputTypes = getInputType(h_blocks[i]);
			generateVarBlocks(h_blocks[i]);
		}
	}
	createInputOutputIcons(outputType,inputTypes);
	output = output.substring(0,output.length-1);
	b_me.blockLayers.text = output+"]";
	createDOMs();
	
}