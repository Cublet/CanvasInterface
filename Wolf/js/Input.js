var Input = function (defaultValue, optional, x, y, size, width, index, browse, block, slider) {
	this.defaultValue = defaultValue;
	this.optional = optional;
	this.index = index;
	this.browse = browse;
	this.block = block;
	var btn = document.createElement("input");
	btn.style.position = "absolute";
	btn.style.top = "" + y + "px";
	btn.style.left = "" + (x + 80) + "px";
	btn.style.fontSize = "" + size + "px";
	btn.placeholder = defaultValue;
	btn.style.width = "" + 350 + "px";

	var myMC = new lib.inputOptions();
	myMC.x = x - 20;
	myMC.y = y - 12;
	myMC.scaleX = 1;
	myMC.scaleY = 1;
	this.options = myMC;
	stage.addChild(myMC);
	myMC.inputTitle.text = defaultValue + ":";
	this.btn = btn;
	var me = this;

	if (slider) {
		btn.type = "Range";
		btn.style.top = "" + (y + 13) + "px";
		btn.style.width = "" + 250 + "px";
		myMC.extraVal.visible = true;
		btn.value = 0;
	} else {
		myMC.extraVal.visible = false;
	}

	if(block.params[index][3]){
		var _form = document.body.appendChild(document.createElement('form')),
		_datalist = _form.appendChild(document.createElement('datalist'));

		_datalist.id = 'exampleList';
		btn.setAttribute('list','exampleList');

		var _option = "";
		for (var i = 0; i < block.params[index][3].length; i++) {
			_option += "<option value='" + block.params[index][3][i] + "' />";
		};

		_datalist.innerHTML = _option;
	}
	
	if (browse) {
		if (block.vars[index]) {
			var btn = document.createElement("DIV");
			btn.innerHTML = block.vars[index];
			btn.style.position = "absolute";
			btn.style.top = "" + (y + 12) + "px";
			btn.style.left = "" + (x + 70) + "px";
			btn.style.fontSize = "" + 24 + "px";
			me.btn = btn;
			var myMC = new lib.closeIcon();
			myMC.scaleX = .5;
			myMC.scaleY = .5;
			myMC.x = x+355;
			myMC.y = y + 1;
			stage.addChild(myMC);
			myMC.addEventListener("click", function (e) {
				block.vars[index] = null;
				stage.removeChild(e.currentTarget);
				stage.removeChild(me.options);
				document.body.removeChild(me.btn);
				e.currentTarget.removeAllEventListeners();
				me.block.mc.removeImage();
				var textB = new Input(defaultValue, optional, x, y, size, width, index, browse, block);
				block.inputs[me.index] = textB;
				me = textB;
			});

		} else {
			btn.setAttribute("type", "file");
			btn.style.fontSize = "" + 24 + "px";
			btn.style.top = "" + (y + 10) + "px";
			btn.browse = true;
		}
	}
	document.body.appendChild(btn);
	if (!optional) {
		btn.style.background = "rgb(232, 110, 110)";
	}



	function dispImage(k) {
		var dir = k.currentTarget.value;
		var bitmap = new lib.JASON();
		bitmap.scaleX = .5;
		bitmap.scaleY = .5;
		me.block.mc.addImage(bitmap);
		me.block.vars[index] = "\"" + dir + "\"";
		exportRoot.updateCode();
	}
	function sliderBlockHandler(e) {

		if (!me.block.vars[me.index] && btn.value != 0) {
			var altered = me.defaultValue;
			me.block.mc.addBlock("string", altered + ":", block, me.index);
		}

		me.block.vars[me.index] = me.btn.value;
		if (btn.value != 0) {
			me.block.mc.updateVal(block);
		} else {
			me.block.mc.removeBlock(me.block, me.index,false);
			me.block.vars[me.index] = null;
		}
		console.log("slider changed, updating code");
		exportRoot.updateCode();
	}
	function updateVal(e) {
		me.options.extraVal.text = btn.value;
	}
	function createListener() {
		if (slider) {
			btn.addEventListener("mousemove", updateVal);
			btn.addEventListener("change", sliderBlockHandler);
		} else if (browse) {
			btn.addEventListener("change", dispImage);
		} else {
			btn.addEventListener("keyup", function (k) {
				inputHandler(k, me)
			});
		}
	}
	this.createListener = createListener;

	function removeListener() {
		stage.removeChild(me.options);
		document.body.removeChild(me.btn);
		btn.removeEventListener("keyup", function (k) {
			inputHandler(k, me)
		});
		if (slider) {
			btn.removeEventListener("mousemove", updateVal);
		} else if (browse) {
			btn.removeEventListener("change", dispImage);
		} else {
			btn.removeEventListener("keyup", function (k) {
				inputHandler(k, me)
			});
		}
	}
	this.removeListener = removeListener;

	function setInput(val) {
		if (typeof val !== 'object') {
			if (!btn.browse) {
				btn.value = val;
			}
		} else {
			console.log("IS OBJECT");
		}
	}
	this.setInput = setInput;

	createListener();
}

function getTextBoxBlock(textBox) {
	var funcBlocks = exportRoot.getAllBlocks();
	for (var i = 0; i < funcBlocks.length; i++) {
		for (var j = 0; j < funcBlocks[i].inputs.length; j++) {
			if (textBox === funcBlocks[i].inputs[j]) {
				return funcBlocks[i];
			}
		}
	}
}

function inputHandler(k, input) {
	var block = getTextBoxBlock(input);
	if (!block) {
		return;
	}
	var varsIndex = input.index;
	if (!block.vars[varsIndex] && input.btn.value !== "") {
		var altered = input.defaultValue;
		block.mc.addBlock("string", altered + ": ", block, varsIndex);
	}

	block.vars[varsIndex] = input.btn.value;
	if (input.btn.value === "") {
		block.mc.removeBlock(block, varsIndex, false)
	} else {
		block.mc.updateVal(block);
	}

	if (!input.optional) {
		if (input.btn.value === "") {
			input.btn.style.background = "rgb(232, 110, 110)";
		} else {
			input.btn.style.background = "white";
		}
	}
	console.log("input handler, update code..");
	exportRoot.updateCode();
}