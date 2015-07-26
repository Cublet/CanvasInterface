var BlockInput = function (defaultValue, optional, type, yShift, block, index) {
	this.defaultValue = defaultValue;
	this.optional = optional;
	this.index = index;
	this.type = type;
	this.yShift = yShift;
	this.block = block;
	this.index = index;
	var button = new lib.libFunc();
	button.x = 1100;
	button.y = 306 + yShift;
	if (block.childMCs[index]) {
		button.alpha = 1;
	} else {
		button.alpha = .5;
	}
	button.title.text = type;
	stage.addChild(button);
	this.button = button;
	function removeListener() {
		stage.removeChild(button);
	}
	this.removeListener = removeListener;

}