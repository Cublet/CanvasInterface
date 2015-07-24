var LibButton = function(name,mc){
	Button.apply(this,arguments);
	mc.addEventListener("click", openLib);
	function openLib(event) {
		if((!openHandler || openHandler.currentFrame > 19) /*&& lastLib !== getButtonName(event.currentTarget)*/){
			exportRoot.clearInputs();
			var name = exportRoot.getButtonName(event.currentTarget);
			event.currentTarget.removeEventListener("mouseover", this.btnOver);
			event.currentTarget.removeEventListener("rollout", this.btnOut);
			if (focusBtn) {
				focusBtn.addEventListener("mouseover", this.btnOver);
				focusBtn.addEventListener("rollout", this.btnOut);
			}
			focusBtn = event.currentTarget;
			var libX = 1057;
			var libY = 0;
			lastLib = name;
			switch (name) {
				case "draw":
					var myMC = new lib.drawLib();
					myMC.x = libX;
					myMC.y = 59 + libY;
					stage.addChild(myMC);
					focusLib = myMC;
					openHandler = myMC;
					break;
				case "func":
					var myMC = new lib.funcLib();
					myMC.x = libX - 1;
					myMC.y = 149 + libY;
					stage.addChild(myMC);
					focusLib = myMC;
					openHandler = myMC;
					break;
				case "search":
					var myMC = new lib.graphicsLib();
					myMC.x = libX - 1;
					myMC.y = 234 + libY;
					stage.addChild(myMC);
					focusLib = myMC;
					openHandler = myMC;
					break;
				case "variables":
					var myMC = new lib.varLib();
					myMC.x = libX - 1;
					myMC.y = 319 + libY;
					stage.addChild(myMC);
					focusLib = myMC;
					openHandler = myMC;
					break;
			}
		}
	}
}
LibButton.prototype = Button.prototype;       
LibButton.prototype.constructor = LibButton;  