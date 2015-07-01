(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#EFEFEF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.drawPane = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("Egq9AfPMAAAg+eMBV6AAAMAAAA+eg");
	this.shape.setTransform(275,200);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,400);


(lib.darken_pencil = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.backpane = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A7A7").s().p("AjffPMAAAg+dIHAAAMAAAA+dg");
	this.shape.setTransform(527.5,200);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D2D2").s().p("Egq9AfPMAAAg+eMBO4AAAMAAAA+eIHCAAMAAAg+eIAAAAMAAAA+egEgl8AatMBG5AAAMAAAg3vMhG5AAAg");
	this.shape_1.setTransform(275,200);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,400);


(lib.pencil_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.instance_1 = new lib.darken_pencil();
	this.instance_1.setTransform(16,16,1,1,0,0,0,16,16);
	this.instance_1.filters = [new cjs.ColorFilter(0.67, 0.67, 0.67, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,36,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


// stage content:
(lib.imageCanvy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(20);
		var everything = this.everything;
		var drawPane = this.drawPane;
		//var document = document;
		var drawArea = this.drawArea;
		var pencil_btn = this.pencil_btn;
		pencil_btn.addEventListener("click", grab_pencil);
		pencil_btn.addEventListener("rollover", make_point);
		pencil_btn.addEventListener("rollout", make_cursor);
		var tool = null;
		var focusPoly = null;
		var focusData = null;
		
		var textarea = document.createElement("TEXTAREA");
		textarea.value = "Wolfram Code Generated Here";
		textarea.rows= "5";
		textarea.cols = "60";
		document.body.appendChild(textarea);
		
		
		var Point = function(_x,_y){
			this.x = _x;
			this.y = _y; 
		}
		
		var Poly = function(){
			this.type = "pencil";
			this.linePts = new Array();
		}
		
		var blocks = new Array();
		
		
		function pencil_draw(evt){
			console.log("pencils move");
			focusPoly.graphics.lineTo(evt.stageX, evt.stageY);
			focusData.linePts.push(new Point(evt.stageX, evt.stageY));
		}
		
		
		function pencil_down(evt){
			console.log("pencils down");
			var polygon = new createjs.Shape();
			polygon.graphics.beginStroke("black");
			polygon.graphics.moveTo(evt.stageX, evt.stageY);//.lineTo(60, 60).lineTo(30, 90).lineTo(0, 60);
			drawPane.addEventListener("pressmove",pencil_draw);
			focusPoly = polygon;
			drawPane.addChild(focusPoly);
			
			var poly = new Poly();
			poly.linePts.push(new Point(evt.stageX, evt.stageY));
			blocks.push(poly);
			focusData = poly;
		}
		
		function grab_pencil(event){
			//tool=pencil;
			pencil_btn.gotoAndStop(1);
			pencil_btn.removeEventListener("rollover", make_point);
			pencil_btn.removeEventListener("rollout", make_cursor);
			document.body.style.cursor='crosshair';
			drawPane.addEventListener("mousedown",pencil_down);
		}
		
		function make_point(event) {
		    document.body.style.cursor='pointer';
		} 
		
		function make_cursor(event) {
		    document.body.style.cursor='default';
		} 
		
		
		
		window.addEventListener("keydown", function(k){
		if(k.keyCode == 192){
			console.log("generating..");
			var logger;
			for(var i=0; i<blocks.length; i++){
				console.log("new element:");
				switch(blocks[i].type){
					case "pencil":
						var output = "ListLinePlot[{";
						for(var j=0; j<blocks[i].linePts.length; j++){
							output+="{"+blocks[i].linePts[j].x+","+blocks[i].linePts[j].y+"},";
						}
						output = output.substring(0, output.length-1);
						output+="}]";
						textarea.value=output;
						break;
				}
			}
		}
	});

	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.pencil_btn = new lib.pencil_btn();
	this.pencil_btn.setTransform(530,30,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.pencil_btn).wait(1));

	// Layer 3
	this.everything = new lib.backpane();
	this.everything.setTransform(275,200,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get(this.everything).wait(1));

	// Layer 4
	this.drawPane = new lib.drawPane();
	this.drawPane.setTransform(275,200,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get(this.drawPane).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,550,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;