function primitivePrompt(type, defaultVal, mc) {
	clearInputs();
	if (focusLib) {
		focusLib.play();
		focusLib = null;
	}
	if (type === "sentence") {
		func_title.text = "Sentence";
		func_desc.text = "A list of letters.";
		//defaultValue, optional, x, y, size, width, index
		var varName = new Input("Variable Name", true, 1140, 306, 38, 390, 0, false, null);
		var varValue = new Input("Value", true, 1140, 371, 38, 390, 0, false, null);
		varValue.btn.value = defaultVal;
		var text = new createjs.Text("Create a variable by naming it.", "25px Verdana", "#000000");
		text.x = 1140;
		text.y = 500;
		text.textBaseline = "alphabetic";
		stage.addChild(text);
		canvasClean.push(text);
		inputClean.push(varName);
		inputClean.push(varValue);
		//TODO: block.inputs[j] = txtBox;
	}
	focusMC = mc;
}
this.primitivePrompt = primitivePrompt;

function savePrimitive() {
	if (inputClean[0]) {
		if (inputClean[0].btn.value !== "") {
			var block = new Sentence(focusMC);
			block.inputs[0] = inputClean[0];
			block.inputs[1] = inputClean[1];
			funcBlocks.push(block);
			block.vars[0] = inputClean[0].btn.value;
			block.vars[1] = inputClean[1].btn.value;
			variables.push(block);
			focusBlock = block;
			block.mc.title.text = "\"" + block.vars[0] + "\"";
			focusMC.block.isVar.visible = true;
		} else {
			for (var i = 0; i < inputClean.length; i++) {
				inputClean[i].removeListener();
				document.body.removeChild(inputClean[i].btn);
			}
		}
	}
}