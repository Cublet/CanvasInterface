var lib_focusMC = null;
var lib_focusFunc = null;
var lib_offX = 0;
var lib_offY = 0;
var lib_me = null;
var lib_desc = null;
var lib_frame = 0;

function highlight_on(event){
	event.currentTarget.block.gotoAndStop(1);
	lib_desc.text = event.currentTarget.desc;
	
}

function highlight_off(event){
	event.currentTarget.block.gotoAndStop(0);
}

function initializeLibrary(funcLib, container, frame, fallback){
	lib_frame = frame;
	lib_me = container;
	lib_desc = container.description;
	for(var i=0; i<funcLib.length; i++){
		var btn = new lib.libFunc();
		btn.addEventListener("mouseover", highlight_on);
		btn.addEventListener("rollout", highlight_off);
		btn.addEventListener("mousedown", pressed);
		btn.x = 28;
		if(fallback){
			btn.y = 270+i*70;
		}else{
			btn.y = 320+i*70;
		}
		btn.gotoAndStop(lib_frame);
		btn.desc = funcLib[i].desc;
		btn.func = funcLib[i];
		btn.title.text = funcLib[i].name;
		container.addChild(btn);
	}
}

function pressed(evt){
	var button = evt.currentTarget;
	var myMC = new lib.libBlock();
	myMC.x=746;
	myMC.y=234;
	myMC.type.visible = false;
	myMC.title.text = button.func.name;
	//myMC.func = button.func;
	stage.addChild(myMC);
	lib_focusMC = myMC;
	lib_focusMC.x = evt.stageX-evt.localX;
    lib_focusMC.y = evt.stageY-evt.localY;
	lib_offX = Number(evt.localX);
	lib_offY = Number(evt.localY);
	stage.addEventListener("stagemousemove", dragged);
	stage.addEventListener("stagemouseup", released);
	lib_focusFunc = button.func;
	exportRoot.addFunc(lib_focusFunc.name, lib_focusMC);
}

function dragged(evt){
	lib_focusMC.block.gotoAndStop(lib_frame);
    lib_focusMC.x = evt.stageX-lib_offX;
    lib_focusMC.y = evt.stageY-lib_offY;
	try{
		lib_focusMC.checkForSnap();
	}catch(e){}
}

function released (evt){
	lib_me.parent.play();
	stage.removeEventListener("stagemousemove", dragged);
	stage.removeEventListener("stagemouseup", released);
	lib_focusMC.shrink();
	//console.log(evt.stageX);
	if(evt.stageX<960){
		stage.removeChild(lib_focusMC);
		stage.children[0].addChild(lib_focusMC);
		exportRoot.putLibsTopLayer(lib_focusMC);
	}
	
}