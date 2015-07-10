(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 1600,
	height: 860,
	fps: 45,
	color: "#2D2D2D",
	manifest: []
};



// symbols:



(lib.closeIcon = function() {
	this.spriteSheet = ss["wolf_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.JASON = function() {
	this.spriteSheet = ss["wolf_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Magnifier_64 = function() {
	this.spriteSheet = ss["wolf_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Pencil_edit_button_64 = function() {
	this.spriteSheet = ss["wolf_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Square_root_of_x_math_formula_64 = function() {
	this.spriteSheet = ss["wolf_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Two_books_64 = function() {
	this.spriteSheet = ss["wolf_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.yellow_btn = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9C6401").ss(1,1,1).p("EgiNgE1MBEbAAAIAAJrMhEbAAAg");
	this.shape.setTransform(219.1,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE8E01").s().p("EgiNAE2IAAprMBEbAAAIAAJrg");
	this.shape_1.setTransform(219.1,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8AE2E").s().p("EgiNAE2IAAprMBEbAAAIAAJrg");
	this.shape_2.setTransform(219.1,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,440.2,64);
p.frameBounds = [rect, rect];


(lib.variable_btn = function(mode,startPosition,loop) {
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

	// Layer 3
	this.instance = new lib.Two_books_64();
	this.instance.setTransform(16.7,21,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#249302").s().p("AmZGoIAAtPIMzAAIAANPg");
	this.shape.setTransform(41,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#227701").s().p("AmZGoIAAtPIMzAAIAANPg");
	this.shape_1.setTransform(41,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82.1,84.9);
p.frameBounds = [rect, rect];


(lib.slider = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D0606").s().p("AheGPIAAseIC8AAIAAMeg");
	this.shape.setTransform(9.5,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AheGPIAAseIC8AAIAAMeg");
	this.shape_1.setTransform(9.5,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3D0606").ss(1,1,1).p("EgBZgpoICzAAMAAABTRIizAAg");
	this.shape_2.setTransform(9,266.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("EgBZAppMAAAhTRICzAAMAAABTRg");
	this.shape_3.setTransform(9,266.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("EgBZgpoICzAAMAAABTRIizAAg");
	this.shape_4.setTransform(9,266.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("EgBZAppMAAAhTRICzAAMAAABTRg");
	this.shape_5.setTransform(9,266.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,20,535.2);
p.frameBounds = [rect, rect];


(lib.search_btn = function(mode,startPosition,loop) {
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
	this.instance = new lib.Pencil_edit_button_64();
	this.instance.setTransform(23,25,0.584,0.584);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5703A5").s().p("AmZGoIAAtPIMzAAIAANPg");
	this.shape.setTransform(41,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E0079").s().p("AmZGoIAAtPIMzAAIAANPg");
	this.shape_1.setTransform(41,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82.1,84.9);
p.frameBounds = [rect, rect];


(lib.save_btn = function(mode,startPosition,loop) {
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
	this.text = new cjs.Text("Save", "bold 30px 'Verdana'", "#EFEFEF");
	this.text.lineHeight = 32;
	this.text.lineWidth = 100;
	this.text.setTransform(63,10.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("AryExIAAgUIAUAAIAApNIXRAAIAAJhg");
	this.shape.setTransform(103.5,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("AryExIAAgUIAUAAIAApNIXRAAIAAJhg");
	this.shape_1.setTransform(103.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(28,0,151.1,61);
p.frameBounds = [rect, rect];


(lib.red_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF1123").s().p("AndG9IAAt5IO7AAIAAN5g");
	this.shape.setTransform(47.8,44.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,95.7,89);
p.frameBounds = [rect];


(lib.purple_btn = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#340234").ss(1,1,1).p("EgiNgE1MBEbAAAIAAJrMhEbAAAg");
	this.shape.setTransform(219.1,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#730472").s().p("EgiNAE2IAAprMBEbAAAIAAJrg");
	this.shape_1.setTransform(219.1,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#89359E").s().p("EgiNAE2IAAprMBEbAAAIAAJrg");
	this.shape_2.setTransform(219.1,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,440.2,64);
p.frameBounds = [rect, rect];


(lib.purple_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E0079").s().p("AndG9IAAt5IO7AAIAAN5g");
	this.shape.setTransform(47.8,44.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,95.7,89);
p.frameBounds = [rect];


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
	this.instance = new lib.Magnifier_64();
	this.instance.setTransform(1.8,-2.5,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC1429").s().p("Aj5EDIAAoFIHzAAIAAIFg");
	this.shape.setTransform(13.7,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF1123").s().p("Aj5EDIAAoFIHzAAIAAIFg");
	this.shape_1.setTransform(13.7,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.4,-16.9,50.2,51.9);
p.frameBounds = [rect, rect];


(lib.orange_pane = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C37703").s().p("AhyGoIAAtQIDlAAIAANQg");
	this.shape.setTransform(11.5,42.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,23,85);
p.frameBounds = [rect];


(lib.newBtn = function(mode,startPosition,loop) {
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
	this.text = new cjs.Text("New", "bold 30px 'Verdana'", "#EFEFEF");
	this.text.lineHeight = 32;
	this.text.lineWidth = 100;
	this.text.setTransform(28.6,10.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("Aq2EnIAApNIVsAAIAAJNg");
	this.shape.setTransform(69.5,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("Aq2EnIAApNIVsAAIAAJNg");
	this.shape_1.setTransform(69.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,139,59);
p.frameBounds = [rect, rect];


(lib.math_lib_content = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Name", "bold 20px 'Verdana'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.setTransform(49.2,267.1);

	this.description = new cjs.Text("This is where the description of the function should go", "bold 20px 'Verdana'", "#333333");
	this.description.name = "description";
	this.description.lineHeight = 22;
	this.description.lineWidth = 492;
	this.description.setTransform(5.1,73.1);

	this.text_1 = new cjs.Text("Math", "bold 40px 'Verdana'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 236;
	this.text_1.setTransform(251.2,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#694602").s().p("AwpFWIAAqrMAhTAAAIAAKrg");
	this.shape.setTransform(106.7,285.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6AD9F").s().p("EgnhAMvIAA5dMBPDAAAIAAZdg");
	this.shape_1.setTransform(253.1,151.6);

	this.addChild(this.shape_1,this.shape,this.text_1,this.description,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,506.1,319.6);
p.frameBounds = [rect];


(lib.load_btn = function(mode,startPosition,loop) {
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
	this.text = new cjs.Text("Load", "bold 30px 'Verdana'", "#EFEFEF");
	this.text.lineHeight = 32;
	this.text.lineWidth = 94;
	this.text.setTransform(33.7,10.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("AryEnIAApNIXlAAIAAJNg");
	this.shape.setTransform(75.5,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("AryEnIAApNIXlAAIAAJNg");
	this.shape_1.setTransform(75.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,151.1,59);
p.frameBounds = [rect, rect];


(lib.isVarBorder = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("EgivgFEMBFfAAAIAAKJMhFfAAAg");
	this.shape.setTransform(222.5,32.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,447,67);
p.frameBounds = [rect];


(lib.inputOptions = function() {
	this.initialize();

	// Layer 1
	this.extraVal = new cjs.Text("0", "30px 'Verdana'", "#565656");
	this.extraVal.name = "extraVal";
	this.extraVal.textAlign = "center";
	this.extraVal.lineHeight = 32;
	this.extraVal.lineWidth = 68;
	this.extraVal.setTransform(406,10);

	this.inputTitle = new cjs.Text("Camera", "30px 'Verdana'", "#565656");
	this.inputTitle.name = "inputTitle";
	this.inputTitle.textAlign = "right";
	this.inputTitle.lineHeight = 32;
	this.inputTitle.lineWidth = 123;
	this.inputTitle.setTransform(90,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8B8B8").s().p("EgmJAErIAApVMBMTAAAIAAJVg");
	this.shape.setTransform(208.3,29.9);

	this.addChild(this.shape,this.inputTitle,this.extraVal);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-36,0,488.6,59.9);
p.frameBounds = [rect];


(lib.green_slider = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#315B1F").s().p("AheGPIAAseIC8AAIAAMeg");
	this.shape.setTransform(9.5,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AheGPIAAseIC8AAIAAMeg");
	this.shape_1.setTransform(9.5,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#315B1F").ss(1,1,1).p("EgBZgpoICzAAMAAABTRIizAAg");
	this.shape_2.setTransform(9,266.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#589E32").s().p("EgBZAppMAAAhTRICzAAMAAABTRg");
	this.shape_3.setTransform(9,266.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("EgBZgpoICzAAMAAABTRIizAAg");
	this.shape_4.setTransform(9,266.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("EgBZAppMAAAhTRICzAAMAAABTRg");
	this.shape_5.setTransform(9,266.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,20,535.2);
p.frameBounds = [rect, rect];


(lib.green_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#227701").s().p("AndG9IAAt5IO7AAIAAN5g");
	this.shape.setTransform(47.8,44.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,95.7,89);
p.frameBounds = [rect];


(lib.gray_slider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AheGPIAAseIC8AAIAAMeg");
	this.shape.setTransform(9.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("EgBZgpoICzAAMAAABTRIizAAg");
	this.shape_1.setTransform(9,266.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("EgBZAppMAAAhTRICzAAMAAABTRg");
	this.shape_2.setTransform(9,266.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,20,535.2);
p.frameBounds = [rect];


(lib.glower = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003973").s().p("EgiCAE7IAAp1MBEFAAAIAAJ1g");
	this.shape.setTransform(218,31.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,436,63);
p.frameBounds = [rect];


(lib.function_btn = function(mode,startPosition,loop) {
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
	this.instance = new lib.Square_root_of_x_math_formula_64();
	this.instance.setTransform(18.9,22.3,0.632,0.632);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E48B04").s().p("AmZGoIAAtPIMzAAIAANPg");
	this.shape.setTransform(41,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C37703").s().p("AmZGoIAAtPIMzAAIAANPg");
	this.shape_1.setTransform(41,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82.1,84.9);
p.frameBounds = [rect, rect];


(lib.export_btn = function(mode,startPosition,loop) {
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
	this.text = new cjs.Text("Export", "bold 30px 'Verdana'", "#EFEFEF");
	this.text.lineHeight = 32;
	this.text.lineWidth = 166;
	this.text.setTransform(90.1,10.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("At5EsIAApXIbzAAIAAJXg");
	this.shape.setTransform(149.1,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("At5EsIAApXIbzAAIAAJXg");
	this.shape_1.setTransform(149.1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60.1,0,200.1,60);
p.frameBounds = [rect, rect];


(lib.explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.parent.block.visible = false;
		this.parent.title.visible = false;
	}
	this.frame_16 = function() {
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(4).call(this.frame_16).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0)").s().p("AghDdIgfgGIgKgIIgIgHIgHgIIgDgHIgCgIIgCgHIgEgHIgGgIIgHgIIgGgHIgDgIIgDgTIgOgEIgdgJIgQgFIgKgIIgHgHIgIgIIgCgHIgCgIIgDgHIAAgIIAAgHIAAgPIAAgPIAAgGQAFgPAIgOQAMgWATgRIAXgWIANgDIAAgHIACgIIABgHIgBgHIgCgIIAAgHIAAgPIAAgIIADgHIADgHIALgQIAPgPIAKgHIAPgFIAPgCIAAgBIAoABQAWABAQAOIAHAHIAQAGQAUAJAPAPIAWAWIADAHIAEAIIADAIIACAHIABAIIAAAHIAAANIAfAEQAdAFAWASIAIAIIADAHIADAIIAEAHIADAHIAEAIIABAHIABAOIABAPIAAAWIAAAPIgDAIIgDAHIgEAIIgDAHIgHAHIgLAIIgHAFIgXAFIgCADIgGAGIgJAJIgFAFIgPAEQgbAGgagBIAAAGIAAAHIgCAIIgDAHIgEAIIgDAHIgHAIIgIAHIgJAIIgGAFIgFACQgSAFgQAAIgSgBg");
	this.shape.setTransform(21.8,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AghDdIgfgGIgKgIIgIgHIgHgIIgDgHIgCgIIgCgHIgEgHIgGgIIgHgIIgGgHIgDgIIgDgTIgOgEIgdgJIgQgFIgKgIIgHgHIgIgIIgCgHIgCgIIgDgHIAAgIIAAgHIAAgPIAAgPIAAgGQAFgPAIgOQAMgWATgRIAXgWIANgDIAAgHIACgIIABgHIgBgHIgCgIIAAgHIAAgPIAAgIIADgHIADgHIALgQIAPgPIAKgHIAPgFIAPgCIAAgBIAoABQAWABAQAOIAHAHIAQAGQAUAJAPAPIAWAWIADAHIAEAIIADAIIACAHIABAIIAAAHIAAANIAfAEQAdAFAWASIAIAIIADAHIADAIIAEAHIADAHIAEAIIABAHIABAOIABAPIAAAWIAAAPIgDAIIgDAHIgEAIIgDAHIgHAHIgLAIIgHAFIgXAFIgCADIgGAGIgJAJIgFAFIgPAEQgbAGgagBIAAAGIAAAHIgCAIIgDAHIgEAIIgDAHIgHAIIgIAHIgJAIIgGAFIgFACQgSAFgQAAIgSgBg");
	this.shape_1.setTransform(21.8,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgcEPIgPgEIgKgIIgFgFIgFAAQgzAJgsgYQgSgJgLgRIgGABQhTADhIgrIgHgHIgPgPIgPgQIgFgHIgDgHQgEgLABgMIABglIACgXIAFgHIANgPIAPgPIAHgDIAFgCIABAAIgBgBIgCgHIgDgIIgCgHIAAgPIAAgIIAAgHIAAgIIACgPIAFgHIAFgIIAIgHIAHgIIAPgHIAHgJIADgGIABgIIAEgHIAFgIIAIgHIAHgIIAKgEIAKgDIAPgCIAAgBQAYABAYAIIAAgBIAAgIIACgHIADgHIAMgQIAIgHIARgPIAPgGQAWgIAWgHQAUgFAVgBIAAgBQAjAAAhADQAOABANAEQAZAGAXgHQAfgKAeACIAHgGIAHgFIAFgDIAKgCIAPgCIAAgBIBaABQAcABATAVIAFAHIADAHIAFAIIAHAIIAIAHIAFAIIAFAHIACAIIADAHIACAIIAFAPIAFAPIAAAHIAAAIIAAAHIADAHIAFAIIAAAHIACAQIAAAWIAAAeIAAAIIgCAHIgFAPIgFANQgCAKgFAIIACAEIAEAIIAEAHIAHAQIACAPIAAAHIAAAPIgCAPIgFAIIgDAHIgFAIQgpAig4gKIgFADIgKACIgXAGIgFAHIgEAIIgDAHIgIAHIgKAHIgOAJIgIAEIgFADIgKADQgPADgPAFQgIADgHAEIgPAHQgIAIgIAFQgmAXgrAAQgXAAgcgJg");
	this.shape_2.setTransform(20.4,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AmjGJIg2gPIgKgIIgIgHIgHgHIgDgIIgCgHIgDgIIAAgtIAAhLIAAgbIgHgGIgIgHIgHgHIgDgIIgCgHIgDgIIgDgHIgHgIIgMgPIgFgPQgCgHAAgIIgBgPIAAgWIAAgXIAAgDQgJgBgIACQhAAihMgTIgegIIgKgHIgLgHIgOgIIgIgGIgHgIIgFgHIgEgIQgDgHgBgIIAAgHIAAgHIAAgPIAAgIIADgHIACgIIAFgPIADgHIACgIIADgHIAHgIIAPgPIAIgHIAPgIIAHgHIAAgIIAAgHIAAgIIADgHIACgIIADgHIAHgIIASgPQAPgEAPAAIAigBIgCgFIgCgHIgDgIIAAgHIAAgPIAAgIIAAgHIAAgPIAAgIIADgHIACgIIADgHIAHgIIASgPQA3gSA7AOQAbAGAXANIAyAbQAlgiAxgSIAPgFQAHAAAHgBIABgBIAnAAQAXABARAOIAIAHIAEAGIAUADQATADASAHIABgEIAAgHIAFgIIAGgHIAOgPIALgFIAKgDIAOgCIAoAAQAQABAOAGQBGgPA5AjQAJAFAHAIQAWAWAaAPQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIAIgGIAQgPIAJgIQAIgCAIgBQAXgEATgOIAHgGQAtgUAyAKQAOADANAHQAkASAOAnIADAIIABAHQADALgBAMIAAAHIAAAXIAAAaQBUglBiAcQAUAFANAPIAEAIIADAHQAXAPAdAIQAVAGARAOIAPAPIADAHIAEAIIADAHIACAIIABAHIAAAPIAAAIIAAAHIADAHIAEAIIAFAIIADAHIACAIIADAHIAAAIIAAAPIAAAHIAAAGIAAAPIAAAHIgDAIIgCAHIgIAPIgFAHIgJAIIgGAFIgFACQgVAFgVAGIgUAHIgSAOQgMAJgNAGQgHAEgIACIgWAFIgKAHIgIAGQgcAHgaALIgpASIgbALIgKAHIgIAGIgJACIgNAFIAAAIIAAAHIAAAIIgDAHIgCAHIgIAQQgPAPgRAKQg4Afg+ABIgFAHIgJAIIgGAFIgFACIgKADIgPADIgJgBIgNgCIgFAFIgIAHIgPANQhAAWhCgVQgXgHgWgLIhigRQgqgHgrgJIgHgHIgBAEIgBAIIgBAIIgEAHIgEAHIgEAIQgTAVgdABIhSADQgdAKgdAAQgXAAgWgFg");
	this.shape_3.setTransform(29.5,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AORBtIgIgYQg5ALgUAVQgOAQgjAAQg8AAgOgzIgVABQhBAAgTgcQgGgIgBgJIABgFQAAgYAdgMQAZgNAkAAIATABIgBgGQAAgUAIgJQAQgUBiAAQAKAAAcgVQAkgZASgIQA/gcAhBIIACgBQAigKAVALQAaAOgBAmQABAcgXAXIgDADQAGALAAAOQgBAugYASQgZAShCAAQgfAAgPgYgAw1BOQgPgMgBgSIABgbQAAgVAcgZQAdgaAlgKQBkgbApBiIAZgCQgIg/BOAAQAzAAAnA1QAeAnAAAQQAAAXiUANQhJAHhKAEQAAAIAFADQhvgFgigcgAhLBQQgMgMgNAAQgLAAgCAEIgFAIQgKANhFAAQhgAAgdgeQgPgPAFgPQAAgfARgFQATgHBPAAQAWAAArgdQA8gpAKgFQAlgTASATQAYAYAABUQAAAegIAPQgLAZgeAAQgMAAgLgNg");
	this.shape_4.setTransform(13.4,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("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");
	this.shape_5.setTransform(9.5,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("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");
	this.shape_6.setTransform(9.1,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("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");
	this.shape_7.setTransform(9.4,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("ALNHQIAAgMIAAgPIAAgIIgBgIIgBgHIgLgXQgHgRgOgNQgUgUgcgCIgPADIgKADIgKAEIgIAIIgHAHIgFAIIgFAHQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgIAEgJAAIgRgFIgPgDIgKAAIgPADIgKACIgFADIgIAFIgMACIgUgFQgbgYgjgLQgVgHgVAAIgsgUQgMgOgRgKQgTgKgWgEQgZgPgdgJQgSgFgSgDIAAgUIAAgXIAAgPIgCgPIgFgIIgDgHIgBgIIgBgHIgFgIIgDgHIgFgHQgDgEgFgDQgMgHgNgEQgMgEgMgBIAAABIgPACIgPAFIgKAHIgHAIIgHAIIgBAHIgDAHIgCAIIAAAHIAAAXIAAAOIACAQIADAHIABAIQACADAAAEIgBAHIgCAIIAAAIIgDAHQhTgNhIAhQlVAElSAfQgSgCgRAGIgpAEIgHAFIgIAHIgKAIIgUAFIgPAFIgKAHIgHAIIgIAHIgKAFIgFADIgRAAIgIgDQglgJgmACQgOgHgQgBQgjgDgjAGIgEgGIgEgHIgEgHQhAgrhPAIIgDgIIgEgHIgIgHQgGgFgHgDIgMgFIgKgDIgFgFIgNgHIgMgFIgPgDIgJACIgBgHIgEgIIgEgHIgEgHIgVgPIgMgFIgPgDIAAABIgPACIgKADIgKAEIgOAPIgGAIIgEAHIgDAIIgEADIgEgBIgPADIgKACIgFADIgHAFIgIAHIgHAIIgMAWIgFAPIgDAPQAAAEgCADIgGAIIgUAFIgPADIgPAFIgHAFIgIAHIgFAFQiwgWizAMQgGgCgFgEIgGgGIgDgIIgFgHIgFgIIgHgHIgJgPQgFgIgHgHIgTgPQgHgNgKgKQgHgHgFgJQgFgGgEgIIgHgIIgKgPIgDgHIgHgPIgCgIIgBgHIgEgIIgDgHIAAgHIgBgIIgCgHIgDgIIgEgIIgDgHIgCgHIgFgIIgFgHIgFgIIAAgHIgBgIIgBgIIgBgHIgEgIIgDgHIgCgIIgBgHIgEgIIgLgWIgHgNIgFgPIAAglIAAgSIAAgFIAAgCIAAgPIAAgFIAEgIIADgHIACgIIABgHIAOgGQAHgDAGgFIAIgGIAEgIIAEgHIAEgIIABgHIACgPIAFgPIACgIIADgHIAAgIIAAgPIAAgPIAAgHIACgIQAcAEAYgNQALgGAKgHIAEgIIAEgHIAEgIIACgPIABgPIgBgPIgCgPIAKgCIAFACIAKACIAPADIAPgDIAKgCIAFgCIAFgFIAKgIIAFgHIAFgIQAWgGAUgJQALgFAKgHIAEgIIAEgHIABgDIAPAMIAmAhIAKAIIAPAFIgCACIgDAHIgEAIIgDAIIgDAHIgCAIIAAAPIAAAHIAAAIIAAAHIACAIIAAAHIAFAIIADAHIACAIIAAAHIAFAIIADAHIACAIIAAAHIAFAIIADAHIAEAIIADAHIAIAIIAHAHIAKAIIAPAEIAPADIAeAFIAKAIIAPADQASADARgBQANAAAMgEIAFgBIAFgFIAJgJIAGgGIAFgIIADgHIACgIIACgIIABgHQAXAGAYgDQAOgCANgGQALgFAKgHIAEgIIAEgHIAEgIQADgPAAgPIAAgPIAAgWIAAgPIAAgPIAEgIIADgHIADgIIAAgHIAAgIIAAgHIAAgDIAHgBQANgBAMgEIAFgBIBJABIABAAIAGABIAFAFIAIAIIAHAHIAKAIIAPAEIAPADIAPgDIAKgCIAIgFIAEgDIAmAIIASAMQAiAVAnADQBHAFBHACQAoAJAqAEIAZAEQBKARA7gnQAZAIAbAEIBLAOQBuAXBxANIAMAHIAPAFIAeAIIAyAKQAPAGAQAEQAxAMAxgNIA0gOIBAgRQA1gDAzgIIAsgHIAAAUIAAAIIAAAPIAAAPIAAAPIACAHIADAIIAAAHIAIAIIAHAHIAKAIIAPAEIAPADIAKAAIAPgDQAGgCAGgDIANgIIAHgGIAFgIIADgHIAFgIIABgHQADgLgBgMIgBgHIAAgXIAAgHIAAgXQgBgMgGgKIAUgJQALgFALgHIAUgOIAFgIIADgHIAFgIIABgHIAAgCIAeAGQBaAVBbAAIADAHIAHAIIAIAHIAKAIQAPADAPACQAjADAjACIAFACQCVAvCZggQAIgBAHgEICyAAIAKAIIAPAEQAfAJAcAPQAVALAWAIIADADIAMADIADABIAKADIAFAFIAKAIIAPAFIAHACQAUATAbAEQA4AJAsgcIAIgGIAFgIIADgHIAFgIIABgHIAAgHQANgHAMgJQC2gDC2gEQAMAAANgEIAFgBIAFgFIAJgJIAGgGIABgDICLAFIAHAIIAQAOQAMAKAKANQALANAOAKQAHACAIABQAmAGAlADIAFAFQAHAIAJAGQALAJANAHIAIAHIAMAIIAMAIIAIAHIAeAQQALAGALADIAAAIIAAAPIADAHIACAIIADAHIAHAIIAFAHIACAIIABAHIAEAIIADAHIACAIIABAHIAEAIIAEAHIAEAIIADAHIAHAIIAEAGIgBABIgHAIIgGAFIgCAIIgCAHIgBAIIgEAHIgDAIIgDAHIAAAIIAAAHIAAAHIgCAIIgDAHIgEAIIgEAHIgEAIIgBAHIgCAIIgDAHIgEAIIgBAHIgBAIIgBAHIgCAIIgDAHIgEAIIgEAHIgEAIIgDAIIgHAHIgIAIIgHAHIgIAIIgEAHIgEAHIgEAIIgKAFIgFADIgHAFIgIAHIgIAIIgMAEIgPAGQgTAQgWALIgiAPIgIAIIgMAEIgKADIgFADIgIAFQgLAHgMAGQgOAHgPAFIgKAHIgIAIIgHAHIgDAHIgFAIIgHAIIgKAEIAAAAQgKABgKgDIgNgHIgMgFIgPgDIgPADIgeAKIgPAFQgLAHgJAKIhQAAQgagPgdgJQglgMgmgJIgKgFIgNgGIgFgCQgMgIgNgGQgNgPgTgCIgPgBQgNgMgPgHQiMhBiiATQgsAFgdAhQgSAHgTAFQgYAHgTAQIgWAGQgUAGgUAEQgQADgOAIIgIAIIgMAEIgKADIgFADIgHAFIgIAHIgIAHIgMAIIg3AFQgQABgOAHIgHAFIgEADIgRgBgAddjkIgPACQgFABgFACIgKAEIgIAIIgHAHIgFAHIgFAGIgeADQgNACgMADIgKAEIgIAIIgRACIgPADIgKADIgKAEIgIAIIgHAHIgFAIIgFAHIgCAPIgBAPIAAAIIAAAHIAAAIIAJAWIAHAPIADAIIABAHIAAAIIAAAHIAAAIIAAAFIAAAIIADAHIACAIIADAHIAHAIIAIAHIAKAIQAvAPAsAVQASAIARACIAEAEIAeAGIAqAJIAIAHIAKAIIAPAEIAPADIAKAAIAPgDIAKgCIAHgFIAKgIIAIgHIADgHIAEgIIADgHIACgIIAAgWIAAgXIAAgPIgCgPIgFgIIgDgGIgFgGQgJgHgJgFIABgBIADgHIAEgIIADgHIACgIIAAgPIAAgHIAAgIIgCgIIAAgHIgVglQgIgNgKgLQgFgGgEgIIgCgIIAAgHIgFgIIgDgHIgFgHQgKgIgLgFQgMgGgOgCQgPgCgPAAg");
	this.shape_8.setTransform(8.4,26.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("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HIAGAGQAFAEAGADQCzgMCxAVIAEgEIAIgIIAHgFIAPgEIAPgEIAUgEIAGgJQACgDAAgDIADgPIAFgPIAMgXIAHgHIAIgIIAHgFIAFgCIAKgDIAPgCIAEABIAEgEIADgHIAEgIIAGgHIAOgPIAKgFIAKgCIAPgCIAAgBIAPADIAMAFIAVAOIAEAIIAEAHIAEAIIABAGIAJgBIAPADIAMAFIANAHIAFAFIAKACIAMAGQAHADAGAEIAIAHIAEAIIADAHQBPgIBAArIAEAIIAEAHIAEAFQAjgFAjACQAQACAOAGQAmgCAlAKIAIACIARAAIAFgCIAKgFIAIgIIAHgHIAKgIIAPgFIAUgFIAKgIIAIgHIAHgFIApgEQARgFATACQFRggFVgDQBIgiBTAOIADgIIACgHIACgIIABgHQAAgEgCgEIgDgIIgDgHIgCgPIAAgPIAAgWIAAgIIACgHIADgIIADgHIAFgIIAHgHIAKgIIAPgFIAPgBIAAgBQAMABAMADQANAEAMAIQAFACADAEIAFAIIADAHIAFAIIABAHIABAIIADAHIAFAIIACAPIAAAPIAAAWIAAAUQASAEASAFQAdAIAZAQQAWADATALQARAJAMAOIAsAUQAVAAAVAHQAjAMAbAYIAUAFIAMgDIAIgFIAFgCIAKgDIAPgCIAKAAIAPACIARAFQAJAAAIgDQAAgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAIAFgIIAFgHIAHgIIAIgHIAKgFIAKgDIAPgCQAcABAUAUgAAHFeIANACIAIgHIgVAFgAeyBbIgPgDIgPgEIgKgIIgIgHIgqgIIgegHIgEgDQgRgCgSgIQgsgVgvgQIgKgGIgIgHIgHgHIgDgIIgCgHIgDgIIAAgHIAAgIIAAgHIAAgIIAAgHIgBgIIgDgIIgHgPIgJgWIAAgHIAAgIIAAgHIABgPIACgPIAFgIIAFgHIAHgIIAIgHIAKgFIAKgDIAPgCIARgDIAIgHIAKgEQAMgEANgCIAegDIAFgFIAFgHIAHgIIAIgHIAKgFQAFgCAFAAIAPgCIAAgBQAPAAAPABQAOACAMAGQALAGAKAHIAFAIIADAHIAFAIIAAAHIACAIQAEAHAFAGQAKALAIANIAVAmIAAAHIACAIIAAAHIAAAIIAAAPIgCAHIgDAHIgEAIIgDAIIgBAAQAJAFAJAHIAFAIIADAHIAFAIIACAPIAAAPIAAAUIAAAXIgCAHIgDAHIgEAIIgDAIIgIAHIgKAHIgHAGIgKACIgPADIgKgBg");
	this.shape_9.setTransform(8.9,32);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("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");
	this.shape_10.setTransform(6,34.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("A8BKfIgKgHIgIgIIgHgHIgDgIIgCgHIgDgIIAAgHIAAgIIABgHIACgIIADgHIAEgHIAIgIIAHgHIAIgGIAFgCIAKgCIAOgCIABgBQBGAABGABQAcABATAUIAFAIIADAHIAFAIIAAAHIACAIIgBAHIgBAIIgDAHIgDAIIgEAHIgGAHIgJAJIgFAEIgGACQgvANgvAAQgyAAgygPgAw2KQIgPgFIgKgHIgIgIIgHgHIgDgIIgCgHIgDgIIAAgHIAAgIIAAgHIAAgIIADgHIACgIIADgGIAHgJIAIgHIAKgIIAPgFIAOgBIABgBQAPAAAOACQAOACANAGQALAFAKAHIAFAIIADAHIAFAIIAAAHIACAIIgBAHIgBAIIgDAHIgDAIIgEAHIgGAHIgJAJIgFAEIgGADIgbAHIgbAIIgPgDgACvJ+QgQgDgOgEIgfgKIgJgHIgQgPIgOgPIgGgIQgCgDgBgEQgDgLAAgMIgCglQgBgMAEgKIAEgHQAFgIAHgHQAVgVAcgHIAPgCIAAgBIAyABQAXABARANIAIAIIAEAHIAEAHIAEAIIABAHIABAQIABAOQAAAQgDAOIgEAIIgDAHIAAAIIAAAHIAAAIIgDAHIgDAIIgEAIIgDAHIgHAHIgKAIIgIAFIgKACIgPADIgJgBgAmTJ/IgPgDIgPgFIgKgHIgIgIIgHgHIgNgPIgCgIIgCgPIgCgOQgBgQAFgPIADgHIAEgHIAIgIIAHgHIAIgFIAFgDIAKgCIAOgCIABgBIBuABQAcABATAVIAFAHIADAHIAFAIIAAAHIACAIIgBAHIgBAIIgDAHIgDAIIgEAHIgGAHIgJAJIgFAEIgGACIgZAFIgnAGIgIAHIgKAIIgHAFIgLACIgOADIgKAAgEgi0AJyIgPgFIgKgHIgIgIIgHgHIgIgPIgHgPIgLgWIgEgIIgIgIIgHgHIgIgIIgHgHIgDgHIgFgIIgFgHIgHgIIgDgHIgCgIIgDgHIAAgIIAAgHIgEgIIgDgHIgCgIIgBgHIABgPIABgQIABgHIAFgHIAFgIIAHgHIAIgIIAKgEIAKgDIAOgCIABgBQANAEANAFQARAHALAOIALAPIACAIIADAHIACAIIAAAHIAYAjQAWAfATAgIANAWIAAAHIACAIIAAAHIAAAPIAAAIIgCAHIgDAIIgEAIIgDAHIgIAHIgKAIIgHAFIgKACIgPADIgPgDgAfaJKIgQgFIgJgHIgIgIIgIgHIgCgIIgDgHIgCgIIAAgHIAAgIIAAgHIACgHIADgIIAFgHIAIgIIAOgMIAGgDIAJgCIAPgCIAAgBIAPADIAMAFIAVAPIAEAHIAEAHIAEAIIABAHIACAIIgBAHIgCAIIgCAHIgIAPIgFAHIgJAJIgGAEIgFADIgKACIgPADIgOgDgAWRIuQgQgDgPgEIgJgHIgIgIIgIgHIgDgHIgEgIIgFgHIgIgIIgCgHIgDgIIgCgHIAAgIIAAgHIABgIIABgHIADgIIAFgHIAHgIIAIgHIAHgFIAGgDIAJgCIAPgCIAAgBIAyABQAXABARANIAIAIIAEAHIAEAHIAEAIIADAHIAHAQIACAHIABAIIAAAHIAAAIIgDAHIgCAHIgDAIIgFAHIgFAHIgJAJIgGAEIgFADQgUAFgVAAQgLAAgMgBgAMMIsIgQgFIgJgHIgIgIIgIgHIgCgIIgDgHIgCgHIAAgIIAAgHIAAgIIAAgHIACgIIADgHIADgHIAHgIIAIgIIAJgHIAPgFQAIAAAHgCIAAgBIAoABQAXABARANIAIAIIAEAHIAEAHIAEAIIABAHIACAIIgBAHIgCAIIgCAIIgDAHIgFAHIgFAHIgJAJIgGAEIgFACIgYAHIgaAGIgPADIgOgDgEAlMADsIgQgEIgJgIIgIgHIgIgIIgCgHIgDgIIgCgHIAAgIIAAgHIAAgIIAAgHIACgIIADgHIADgHIAHgIIAIgIIAJgHIAPgFIAPgCIAAgBIAPADIAMAFIAVAPIAEAHIAEAHIAEAIIABAHIABAIIABAIIgBAHIgBAIIgBAHIgEAIIgEAHIgEAIIgIAGQgGAFgHACIgbAJIgOgDgEgmkAB0IgPgEIgKgIIgIgHIgHgIIgDgHIgCgIIgDgHIAAgIIAAgHIABgPIACgXIAFgHIAFgHIAHgGIAIgIIAOgIIAKgHIAIgHIADgIIAFgHIAFgIIAPgPIAKgEIAKgDIAOgCIABgBIAOADQAHACAGAEIAUAOIAFAHIADAHIAFAIIAAAHIACAIIAAAIIAAAHIgCAIIAAAFQgMAXgQAUQgeAlglAeIgKACIgPADIgPgDgEAl+gBcIgQgEIgJgIIgIgHIgIgIIgDgHIgEgIIgDgHIgFgIIAAgHIgCgIIAAgHIAAgIIACgIIAAgHIAFgHIAGgIIAHgHIAHgIIALgEQAEgCAFgBIAPgCIAAgBQASABARAEQANAEAMAHQAEADAEAEIAEAHIAEAHIAEAIIABAHIACAIIgBAHIgFAPIgGAQIgLAWIgHAHIgKAIIgIAFIgKACIgPADIgOgDgAxKmcIgPgEIgKgIIgIgHIgHgIIgDgHIgCgIIgDgHIAAgIIAAgPIAAgWQAAgTADgTIAFgHIAFgIIAHgHIAIgIIAKgEIAKgDIAOgCIABgBIAoABQAWABARAOIAIAHIAFAHIADAHIAFAIIAAAHIABAIIABAIIgBAHIgBAIIAAAHIgFAIIgDAHIgFAIIgIAGIgMAJIgKAHIgEAIIgDAHIgIAHIgKAIIgHAFIgKACIgPADIgPgDgEgi5gG0IgKgIIgIgHIgHgIIgDgHIgCgIIgDgHIAAgIIAAgHIABgIIACgHQADgIAFgHIAOgPIASgPIAPgFQAHAAAHgCIABgBQAMABAMAEQANAEAMAHIAIAHIAFAHIADAHIAFAIIAAAHIACAIIAAAIIAAAHIgCAIIAAAHIgFAIIgDAHIgFAIQgNAOgTAFQgNADgNAAQgUAAgTgHgAR0nOIgQgEIgJgIIgGgFIgJgDIgQgEIgJgIIgIgHIgIgIIgCgHIgDgIIgCgHIAAgIIAAgHIABgIIABgHIADgIIAFgHIAHgIIAIgHIAHgFIAGgDIAKgCIAOgCIAAgBIAoABQAXABARAOIAIAHIAEAHIAEAHIAEAIIABAHIABAIIABAIIAAAHIAAAPIgDAIIgDAHIgEAIIgDAHIgHAHIgKAIIgIAFIgKACIgPADIgOgDgA5/nmIgKgIIgIgHIgHgIIgDgHIgCgIIgDgHIAAgIIAAgHIABgIIACgHIADgIIAEgHIAIgIIACgHIADgIIACgHIADgHIAHgIIAIgIIAKgHIAPgFQAHAAAHgCIABgBQAMABAMAEQANAEAMAHQAEADAEAEIAFAHIADAHIAFAIIACAPIAAAIIAAAPIAAAPIgCAHIgDAIIgCAHQgOAYgZAMQgUAJgUAAQgSAAgSgHgAKUntQgQgDgPgFIgPgFIgJgIIgIgHIgIgIIgCgHIgDgIIgCgHIAAgIIAAgHIABgIIABgHIAEgHIAMgQIAPgPIAJgHIAPgFIAPgCIAAgBQAZgDAXALQAUAKANAUIAEAHIADAIIACAHIADAIIAAAHIAAAIIAAAHIgDAIIgDAHIgEAIIgDAHIgHAHIgKAIIgIAFIgKACIgPADIgYgEgAmJoYIgKgIIgIgHIgHgIIgDgHIgCgIIgDgHIAAgIIAAgHIAAgIIAAgHIAAgIIADgPIAFgHIAFgIIAHgHIAIgIIAKgEIAKgDIAOgCIABgBQAbABAbAGQAcAFAWATIAGAHIAEAHIADAIIADAHIACAIIAAAHIAAAIIAAAHIgCAIIgDAHIgEAIIgDAHIgIAHIgKAIIgHAFIgaAEQgPACgPAAQgeAAgdgIgAYcobIgOgDIgQgEIgJgIIgIgHIgIgIIgCgHIgDgIIgCgHIAAgIIAAgHIAAgIIAAgHIACgIIADgHIADgHIAHgIIAHgIIAPgPIALgEQAEgCAFgBIAPgCIAAgBIAPADQAHACAFAEIAVAOIAEAHIAEAHIAEAIIABAHIABAIIABAIIAAAPIAAAHIgDAIIgDAHIgEAIIgDAHIgHAHIgKAIIgIAFIgKACIgPADIgKAAgEAhcgIfQgIgBgIgCIgJgIIgQgPIgOgPIgGgHIgDgIIgCgHIgCgIIAAgHIAAgIIACgIIAAgHIAFgHIAGgIIAHgHIAHgIIALgEQAEgCAFgBIAPgCIAAgBQAZgDAWAMQAVALAPARIAHAIIADAHIAEAIIADAIIADAHIAAAIIgBAHIgCAIIgDAHIgEAIIgDAHIgHAHIgKAIIgIAFQgMADgNAAIgGAAQgOAAgOgCg");
	this.shape_11.setTransform(6.5,30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,43.5,44.5);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-19.3,-3.2,79.6,56), rect, rect=new cjs.Rectangle(-52.2,-13.2,163.5,79.8), rect, rect=new cjs.Rectangle(-137.2,-24.2,293.5,103.8), rect, rect=new cjs.Rectangle(-228.3,-31.2,475.6,115.8), rect, rect=new cjs.Rectangle(-242.3,-39.2,502.6,142.6), rect, rect=new cjs.Rectangle(-245.2,-37.2,502.6,142.8), rect, rect=new cjs.Rectangle(-245.2,-38.3,503.5,137.2), rect];


(lib.draw_lib_content = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Name", "bold 20px 'Verdana'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.setTransform(49.2,267.1);

	this.description = new cjs.Text("This is where the description of the function should go", "bold 20px 'Verdana'", "#333333");
	this.description.name = "description";
	this.description.lineHeight = 22;
	this.description.lineWidth = 492;
	this.description.setTransform(5.1,73.1);

	this.text_1 = new cjs.Text("Draw", "bold 40px 'Verdana'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 236;
	this.text_1.setTransform(251.2,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#140038").s().p("AwpFWIAAqrMAhTAAAIAAKrg");
	this.shape.setTransform(106.7,285.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6AD9F").s().p("EgnhAMvIAA5dMBPDAAAIAAZdg");
	this.shape_1.setTransform(253.1,151.6);

	this.addChild(this.shape_1,this.shape,this.text_1,this.description,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,506.1,319.6);
p.frameBounds = [rect];


(lib.click_on_lib_alert = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Click on a library to get started", "35px 'Verdana'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 410;
	this.text.setTransform(315.1,100);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AHDBVQjhiLkEhyIoRAEIhzApQASAIBAAsQA5AoAPANQgEAPgVAHQgbgMhSg2Qhag9gagaQApgNBBhEQA8g/AegGIAPAPQgGAeg8AtIgKAPQANABAigNIArgRIIlAEQBNAqCmBLQCyBQBIAjQESCMAHB5QgFAPgTAKQiChriphrg");
	this.shape.setTransform(111,70);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#949494").s().p("EgqLA+qMAAAh9UMBUXAAAMAAAB9UgEgRygyYQCpBrCCBrQAUgKAFgPQgIh5kSiMQhIglixhQQimhLhOgqIomgEIgrARQgjANgMgBIAKgPQA8gtAFgeIgPgPQgeAGg8A/QhBBEgoANQAZAaBaA9QBSA2AcAOQAUgJAFgPQgPgNg6goQhAgsgSgIIBzgpIISgEQEFByDhCNg");
	this.shape_1.setTransform(270.1,401.1);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,540.2,802.2);
p.frameBounds = [rect];


(lib.blue_slider = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#09063D").s().p("AheGPIAAseIC8AAIAAMeg");
	this.shape.setTransform(9.5,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AheGPIAAseIC8AAIAAMeg");
	this.shape_1.setTransform(9.5,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#09063D").ss(1,1,1).p("EgBZgpoICzAAMAAABTRIizAAg");
	this.shape_2.setTransform(9,266.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040266").s().p("EgBZAppMAAAhTRICzAAMAAABTRg");
	this.shape_3.setTransform(9,266.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("EgBZgpoICzAAMAAABTRIizAAg");
	this.shape_4.setTransform(9,266.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("EgBZAppMAAAhTRICzAAMAAABTRg");
	this.shape_5.setTransform(9,266.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,20,535.2);
p.frameBounds = [rect, rect];


(lib.blue_btn = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#002647").ss(1,1,1).p("EgiNgE1MBEbAAAIAAJrMhEbAAAg");
	this.shape.setTransform(219.1,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003973").s().p("EgiNAE2IAAprMBEbAAAIAAJrg");
	this.shape_1.setTransform(219.1,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C68A9").s().p("EgiNAE2IAAprMBEbAAAIAAJrg");
	this.shape_2.setTransform(219.1,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,440.2,64);
p.frameBounds = [rect, rect];


(lib.Arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AkDgxIBkAAIABigIE/ACIgBCgIBkAAIkEEBg");
	this.shape.setTransform(0,-19.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-26,-40.3,52,42.1);
p.frameBounds = [rect];


(lib.ContentVar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var funcLib = exportRoot.getVariables();
		var others = exportRoot.getAllBlocks();
		for(var i=0; i<funcLib.length; i++){
			var btn = new lib.libFunc();
			btn.gotoAndStop(funcLib[i].frame_color);
			btn.addEventListener("mouseover", highlight_on);
			btn.addEventListener("rollout", highlight_off);
			btn.addEventListener("mousedown", pressed);
			btn.x = 28;
			btn.y = 290+i*70;
			btn.desc = funcLib[i].vars[1];
			btn.func = funcLib[i];
			btn.title.text = funcLib[i].vars[0];
			this.addChild(btn);
		}
		
		
		var focusMC = null;
		var offX = 0;
		var offY = 0;
		var me = this;
		
		
		var desc = this.desc;
		function highlight_on(event){
			event.currentTarget.block2.gotoAndStop(1);
			desc.text = event.currentTarget.desc;
			
		}
		
		function highlight_off(event){
			event.currentTarget.block2.gotoAndStop(0);
		}
		
		
		function pressed(evt){
			var button = evt.currentTarget;
		
			var myMC = new lib.libBlock();
			myMC.block.gotoAndStop(0);
			myMC.x=746;
			myMC.y=234;
			myMC.title.text = button.func.vars[0];
			myMC.func = button.func;
			myMC.type.visible = false;
		
			
			stage.addChild(myMC);
			focusMC = myMC;
			focusMC.x = evt.stageX-evt.localX;
		    focusMC.y = evt.stageY-evt.localY;
			offX = Number(evt.localX);
			offY = Number(evt.localY);
			myMC.block.isVar.visible = true;
			stage.addEventListener("stagemousemove", dragged);
			stage.addEventListener("stagemouseup", released);
			
		}
		
		function dragged(evt){
		    focusMC.x = evt.stageX-offX;
		    focusMC.y = evt.stageY-offY;
			focusMC.checkForSnap(others);
		}
		
		function released (evt){
			me.parent.play();
			stage.removeEventListener("stagemousemove", dragged);
			stage.removeEventListener("stagemouseup", released);
			focusMC.shrink();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.desc = new cjs.Text("Hover on a function for it's description.", "bold 20px 'Verdana'", "#333333");
	this.desc.name = "desc";
	this.desc.lineHeight = 22;
	this.desc.lineWidth = 492;
	this.desc.setTransform(5.1,73.1);

	this.text = new cjs.Text("Variables", "bold 40px 'Verdana'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 236;
	this.text.setTransform(251.2,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6AD9F").s().p("EgnhAMvIAA5dMBPDAAAIAAZdg");
	this.shape.setTransform(253.1,151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.desc}]}).wait(1));

	// Layer 2
	this.instance = new lib.green_slider();
	this.instance.setTransform(499.3,508.4,1,0.974,0,0,0,9,266.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#569B35").s().p("EAgGAopIAAgBMhH7AAAMAAAhRQMBPrAAAMAAABRQIgcAAMAAAhPrIhbAAMAAAA44IAnAAIAAW0g");
	this.shape_1.setTransform(253.4,508.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.6,0,510.9,768.7);
p.frameBounds = [rect];


(lib.squar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var me = this;
		function go(frame){
			me.gotoAndStop(frame);
		}
		this.go = go;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 4
	this.isVar = new lib.isVarBorder();
	this.isVar.setTransform(222.5,32.5,1,1,0,0,0,222.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.isVar).wait(3));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003973").s().p("EgirAE2IAApqMBFWAAAIAAJqg");
	this.shape.setTransform(223,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#340234").ss(1,1,1).p("EgirgE1MBFXAAAIAAJrMhFXAAAg");
	this.shape_1.setTransform(223,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#730472").s().p("EgirAE2IAAprMBFWAAAIAAJrg");
	this.shape_2.setTransform(223,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38D00").s().p("EgirAE2IAAprMBFWAAAIAAJrg");
	this.shape_3.setTransform(223,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 2
	this.highlight = new lib.glower();
	this.highlight.setTransform(0,1.6,1.021,1.02,0,0,0,0,1.5);
	this.highlight.shadow = new cjs.Shadow("rgba(0,204,255,1)",0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.highlight).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,469,88);
p.frameBounds = [rect, rect, rect];


(lib.searchLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgDG9IAAt5IAIAAIAAN5g");
	var mask_graphics_1 = new cjs.Graphics().p("AgKG9IAAt5IAVAAIAAN5g");
	var mask_graphics_2 = new cjs.Graphics().p("AgfG9IAAt5IA/AAIAAN5g");
	var mask_graphics_3 = new cjs.Graphics().p("AhIG9IAAt5ICRAAIAAN5g");
	var mask_graphics_4 = new cjs.Graphics().p("AiPG9IAAt5IEfAAIAAN5g");
	var mask_graphics_5 = new cjs.Graphics().p("AkHG9IAAt5IIPAAIAAN5g");
	var mask_graphics_6 = new cjs.Graphics().p("AnlG9IAAt5IPLAAIAAN5g");
	var mask_graphics_7 = new cjs.Graphics().p("AxrG9IAAt5MAjXAAAIAAN5g");
	var mask_graphics_8 = new cjs.Graphics().p("EgiFAG9IAAt5MBELAAAIAAN5g");
	var mask_graphics_9 = new cjs.Graphics().p("EgmZAG9IAAt5MBMzAAAIAAN5g");
	var mask_graphics_10 = new cjs.Graphics().p("EgojAG9IAAt5MBRHAAAIAAN5g");
	var mask_graphics_11 = new cjs.Graphics().p("EgpyAG9IAAt5MBTlAAAIAAN5g");
	var mask_graphics_12 = new cjs.Graphics().p("EgqfAG9IAAt5MBU/AAAIAAN5g");
	var mask_graphics_13 = new cjs.Graphics().p("Egq1AG9IAAt5MBVrAAAIAAN5g");
	var mask_graphics_14 = new cjs.Graphics().p("Egq8AG9IAAt5MBV5AAAIAAN5g");
	var mask_graphics_15 = new cjs.Graphics().p("Egq8AHDIAAuFMBV5AAAIAAOFg");
	var mask_graphics_16 = new cjs.Graphics().p("Egq8AHaIAAuzMBV5AAAIAAOzg");
	var mask_graphics_17 = new cjs.Graphics().p("Egq8AIFIAAwJMBV5AAAIAAQJg");
	var mask_graphics_18 = new cjs.Graphics().p("Egq8AJMIAAyXMBV5AAAIAASXg");
	var mask_graphics_19 = new cjs.Graphics().p("Egq8AK8IAA13MBV5AAAIAAV3g");
	var mask_graphics_20 = new cjs.Graphics().p("Egq8ANvIAA7dMBV5AAAIAAbdg");
	var mask_graphics_21 = new cjs.Graphics().p("Egq8AStMAAAglZMBV5AAAMAAAAlZg");
	var mask_graphics_22 = new cjs.Graphics().p("Egq8AgjMAAAhBFMBV5AAAMAAABBFg");
	var mask_graphics_23 = new cjs.Graphics().p("Egq8A3SMAAAhujMBV5AAAMAAABujg");
	var mask_graphics_24 = new cjs.Graphics().p("Egq8A9HMAAAh6NMBV5AAAMAAAB6Ng");
	var mask_graphics_25 = new cjs.Graphics().p("Egq8A//MAAAh/9MBV5AAAMAAAB/9g");
	var mask_graphics_26 = new cjs.Graphics().p("Egq8BBpMAAAiDRMBV5AAAMAAACDRg");
	var mask_graphics_27 = new cjs.Graphics().p("Egq8BClMAAAiFJMBV5AAAMAAACFJg");
	var mask_graphics_28 = new cjs.Graphics().p("Egq8BDDMAAAiGFMBV5AAAMAAACGFg");
	var mask_graphics_29 = new cjs.Graphics().p("Egq8BDLMAAAiGVMBV5AAAMAAACGVg");
	var mask_graphics_30 = new cjs.Graphics().p("Egq8BDLMAAAiGVMBV5AAAMAAACGVg");
	var mask_graphics_31 = new cjs.Graphics().p("Egq8A/KMAAAh+TMBV5AAAMAAAB+Tg");
	var mask_graphics_32 = new cjs.Graphics().p("Egq8A7JMAAAh2RMBV5AAAMAAAB2Rg");
	var mask_graphics_33 = new cjs.Graphics().p("Egq8A3IMAAAhuPMBV5AAAMAAABuPg");
	var mask_graphics_34 = new cjs.Graphics().p("Egq8AzHMAAAhmNMBV5AAAMAAABmNg");
	var mask_graphics_35 = new cjs.Graphics().p("Egq8AvGMAAAheLMBV5AAAMAAABeLg");
	var mask_graphics_36 = new cjs.Graphics().p("Egq8ArFMAAAhWJMBV5AAAMAAABWJg");
	var mask_graphics_37 = new cjs.Graphics().p("Egq8AnEMAAAhOHMBV5AAAMAAABOHg");
	var mask_graphics_38 = new cjs.Graphics().p("Egq8AjDMAAAhGFMBV5AAAMAAABGFg");
	var mask_graphics_39 = new cjs.Graphics().p("Egq8AfCMAAAg+DMBV5AAAMAAAA+Dg");
	var mask_graphics_40 = new cjs.Graphics().p("Egq8AbBMAAAg2BMBV5AAAMAAAA2Bg");
	var mask_graphics_41 = new cjs.Graphics().p("Egq8AXAMAAAgt/MBV5AAAMAAAAt/g");
	var mask_graphics_42 = new cjs.Graphics().p("Egq8AS/MAAAgl9MBV5AAAMAAAAl9g");
	var mask_graphics_43 = new cjs.Graphics().p("Egq8AO/IAA98MBV5AAAIAAd8g");
	var mask_graphics_44 = new cjs.Graphics().p("Egq8AK+IAA16MBV5AAAIAAV6g");
	var mask_graphics_45 = new cjs.Graphics().p("Egq8AG9IAAt5MBV5AAAIAAN5g");
	var mask_graphics_46 = new cjs.Graphics().p("Egn4AG9IAAt5MBPxAAAIAAN5g");
	var mask_graphics_47 = new cjs.Graphics().p("Egk0AG9IAAt5MBJpAAAIAAN5g");
	var mask_graphics_48 = new cjs.Graphics().p("EghwAG9IAAt5MBDhAAAIAAN5g");
	var mask_graphics_49 = new cjs.Graphics().p("A+sG9IAAt5MA9ZAAAIAAN5g");
	var mask_graphics_50 = new cjs.Graphics().p("A7oG9IAAt5MA3RAAAIAAN5g");
	var mask_graphics_51 = new cjs.Graphics().p("A4kG9IAAt5MAxJAAAIAAN5g");
	var mask_graphics_52 = new cjs.Graphics().p("A1gG9IAAt5MArBAAAIAAN5g");
	var mask_graphics_53 = new cjs.Graphics().p("AycG9IAAt5MAk5AAAIAAN5g");
	var mask_graphics_54 = new cjs.Graphics().p("AvYG9IAAt5IexAAIAAN5g");
	var mask_graphics_55 = new cjs.Graphics().p("AsUG9IAAt5IYpAAIAAN5g");
	var mask_graphics_56 = new cjs.Graphics().p("ApQG9IAAt5IShAAIAAN5g");
	var mask_graphics_57 = new cjs.Graphics().p("AmMG9IAAt5IMZAAIAAN5g");
	var mask_graphics_58 = new cjs.Graphics().p("AjIG9IAAt5IGRAAIAAN5g");
	var mask_graphics_59 = new cjs.Graphics().p("AgDG9IAAt5IAIAAIAAN5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:44.5}).wait(1).to({graphics:mask_graphics_1,x:1.1,y:44.5}).wait(1).to({graphics:mask_graphics_2,x:3.2,y:44.5}).wait(1).to({graphics:mask_graphics_3,x:7.3,y:44.5}).wait(1).to({graphics:mask_graphics_4,x:14.4,y:44.5}).wait(1).to({graphics:mask_graphics_5,x:26.5,y:44.5}).wait(1).to({graphics:mask_graphics_6,x:48.7,y:44.5}).wait(1).to({graphics:mask_graphics_7,x:113.2,y:44.5}).wait(1).to({graphics:mask_graphics_8,x:218.3,y:44.5}).wait(1).to({graphics:mask_graphics_9,x:245.9,y:44.5}).wait(1).to({graphics:mask_graphics_10,x:259.6,y:44.5}).wait(1).to({graphics:mask_graphics_11,x:267.5,y:44.5}).wait(1).to({graphics:mask_graphics_12,x:272,y:44.5}).wait(1).to({graphics:mask_graphics_13,x:274.3,y:44.5}).wait(1).to({graphics:mask_graphics_14,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_15,x:274.9,y:44.9}).wait(1).to({graphics:mask_graphics_16,x:274.9,y:46.1}).wait(1).to({graphics:mask_graphics_17,x:274.9,y:48.4}).wait(1).to({graphics:mask_graphics_18,x:274.9,y:52.3}).wait(1).to({graphics:mask_graphics_19,x:274.9,y:58.4}).wait(1).to({graphics:mask_graphics_20,x:274.9,y:68.1}).wait(1).to({graphics:mask_graphics_21,x:274.9,y:85.4}).wait(1).to({graphics:mask_graphics_22,x:274.9,y:133.5}).wait(1).to({graphics:mask_graphics_23,x:274.9,y:212.6}).wait(1).to({graphics:mask_graphics_24,x:274.9,y:232.9}).wait(1).to({graphics:mask_graphics_25,x:274.9,y:242.9}).wait(1).to({graphics:mask_graphics_26,x:274.9,y:248.6}).wait(1).to({graphics:mask_graphics_27,x:274.9,y:251.9}).wait(1).to({graphics:mask_graphics_28,x:274.9,y:253.5}).wait(1).to({graphics:mask_graphics_29,x:274.9,y:254}).wait(1).to({graphics:mask_graphics_30,x:274.9,y:430}).wait(1).to({graphics:mask_graphics_31,x:274.9,y:404.3}).wait(1).to({graphics:mask_graphics_32,x:274.9,y:378.6}).wait(1).to({graphics:mask_graphics_33,x:274.9,y:352.9}).wait(1).to({graphics:mask_graphics_34,x:274.9,y:327.2}).wait(1).to({graphics:mask_graphics_35,x:274.9,y:301.5}).wait(1).to({graphics:mask_graphics_36,x:274.9,y:275.8}).wait(1).to({graphics:mask_graphics_37,x:274.9,y:250.1}).wait(1).to({graphics:mask_graphics_38,x:274.9,y:224.4}).wait(1).to({graphics:mask_graphics_39,x:274.9,y:198.7}).wait(1).to({graphics:mask_graphics_40,x:274.9,y:173}).wait(1).to({graphics:mask_graphics_41,x:274.9,y:147.3}).wait(1).to({graphics:mask_graphics_42,x:274.9,y:121.6}).wait(1).to({graphics:mask_graphics_43,x:274.9,y:95.9}).wait(1).to({graphics:mask_graphics_44,x:274.9,y:70.2}).wait(1).to({graphics:mask_graphics_45,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_46,x:255.3,y:44.5}).wait(1).to({graphics:mask_graphics_47,x:235.7,y:44.5}).wait(1).to({graphics:mask_graphics_48,x:216.1,y:44.5}).wait(1).to({graphics:mask_graphics_49,x:196.5,y:44.5}).wait(1).to({graphics:mask_graphics_50,x:176.9,y:44.5}).wait(1).to({graphics:mask_graphics_51,x:157.3,y:44.5}).wait(1).to({graphics:mask_graphics_52,x:137.7,y:44.5}).wait(1).to({graphics:mask_graphics_53,x:118.1,y:44.5}).wait(1).to({graphics:mask_graphics_54,x:98.5,y:44.5}).wait(1).to({graphics:mask_graphics_55,x:78.9,y:44.5}).wait(1).to({graphics:mask_graphics_56,x:59.3,y:44.5}).wait(1).to({graphics:mask_graphics_57,x:39.7,y:44.5}).wait(1).to({graphics:mask_graphics_58,x:20.1,y:44.5}).wait(1).to({graphics:mask_graphics_59,x:0.5,y:44.5}).wait(1));

	// Layer 2
	this.instance = new lib.draw_lib_content();
	this.instance.setTransform(276,178.7,1,1,0,0,0,253.1,159.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({y:178.3},0).wait(1).to({y:177.1},0).wait(1).to({y:174.8},0).wait(1).to({x:275.9,y:171},0).wait(1).to({y:164.9},0).wait(1).to({x:275.7,y:154.9},0).wait(1).to({x:275.5,y:135.9},0).wait(1).to({x:274.9,y:72.7},0).wait(1).to({x:274.4,y:26},0).wait(1).to({x:274.2,y:10.4},0).wait(1).to({x:274.1,y:2.2},0).wait(1).to({x:274,y:-2.7},0).wait(1).to({y:-5.5},0).wait(1).to({y:-6.9},0).wait(1).to({y:-7.3},0).wait(2).to({y:-6.9},0).wait(1).to({y:-5.7},0).wait(1).to({x:274.1,y:-3.4},0).wait(1).to({x:274.2,y:0.6},0).wait(1).to({x:274.4,y:7.1},0).wait(1).to({x:274.7,y:18},0).wait(1).to({x:275.3,y:40.4},0).wait(1).to({x:277.3,y:117.9},0).wait(1).to({x:278.2,y:150.6},0).wait(1).to({x:278.6,y:163.6},0).wait(1).to({x:278.8,y:171},0).wait(1).to({x:278.9,y:175.4},0).wait(1).to({x:279,y:177.9},0).wait(1).to({y:179.3},0).wait(1).to({y:179.7},0).wait(15));

	// Layer 1
	this.instance_1 = new lib.purple_bg();
	this.instance_1.setTransform(2.5,0.5,0.01,1,0,0,0,234.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:47.8,regY:44.5,scaleX:0.02,x:1.1,y:44.5},0).wait(1).to({scaleX:0.07,x:3.2},0).wait(1).to({scaleX:0.15,x:7.4},0).wait(1).to({scaleX:0.3,x:14.5},0).wait(1).to({scaleX:0.55,x:26.5},0).wait(1).to({scaleX:1.02,x:48.7},0).wait(1).to({scaleX:2.37,x:113.2},0).wait(1).to({scaleX:4.56,x:218.2},0).wait(1).to({scaleX:5.14,x:245.8},0).wait(1).to({scaleX:5.43,x:259.5},0).wait(1).to({scaleX:5.59,x:267.4},0).wait(1).to({scaleX:5.69,x:271.9},0).wait(1).to({scaleX:5.74,x:274.2},0).wait(1).to({regX:234.4,regY:0.5,scaleX:5.75,x:1347.5,y:0.5},0).wait(1).to({regX:47.8,regY:44.5,scaleY:1.01,x:274.8,y:44.9},0).wait(1).to({scaleY:1.07,y:46.1},0).wait(1).to({scaleY:1.16,y:48.5},0).wait(1).to({scaleY:1.32,y:52.3},0).wait(1).to({scaleY:1.57,y:58.4},0).wait(1).to({scaleY:1.98,y:68.2},0).wait(1).to({scaleY:2.69,y:85.4},0).wait(1).to({scaleY:4.68,y:133.6},0).wait(1).to({scaleY:7.95,y:212.7},0).wait(1).to({scaleY:8.79,y:232.9},0).wait(1).to({scaleY:9.2,y:242.9},0).wait(1).to({scaleY:9.44,y:248.7},0).wait(1).to({scaleY:9.57,y:251.9},0).wait(1).to({scaleY:9.64,y:253.6},0).wait(1).to({regX:234.4,regY:0.5,scaleY:9.66,x:1347.5,y:-171.1},0).wait(1).to({y:4.9},0).to({scaleY:1,y:0.5},15).to({scaleX:0.01,x:2.5},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,89);
p.frameBounds = [rect, new cjs.Rectangle(0,0,2.3,89), new cjs.Rectangle(0,0,6.5,89), new cjs.Rectangle(0,0,14.7,89), new cjs.Rectangle(0,0,28.9,89), new cjs.Rectangle(0,0,53,89), new cjs.Rectangle(0,0,97.4,89), new cjs.Rectangle(0,0,226.5,89), new cjs.Rectangle(0,0,436.6,89), new cjs.Rectangle(0,0,491.9,89), new cjs.Rectangle(0,0,519.4,89), new cjs.Rectangle(0,0,535.1,89), new cjs.Rectangle(0,0,544.1,89), new cjs.Rectangle(0,0,548.6,89), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,-0.3,549.9,90.4), new cjs.Rectangle(0,-1.3,549.9,94.9), new cjs.Rectangle(0,-3.2,549.9,103.5), new cjs.Rectangle(0,-6.5,549.9,117.6), new cjs.Rectangle(0,-11.6,549.9,140), new cjs.Rectangle(0,-19.8,549.9,175.9), new cjs.Rectangle(0,-34.3,549.9,239.5), new cjs.Rectangle(0,-74.8,549.9,416.7), new cjs.Rectangle(0,-141.2,549.9,707.8), new cjs.Rectangle(0,-158.2,549.9,782.2), new cjs.Rectangle(0,-166.7,549.9,819.2), new cjs.Rectangle(0,-171.5,549.9,840.2), new cjs.Rectangle(0,-174.2,549.9,852.2), new cjs.Rectangle(0,-175.6,549.9,858.3), new cjs.Rectangle(0,-176,549.9,860), new cjs.Rectangle(0,0,549.9,860), new cjs.Rectangle(0,0,549.9,808.6), new cjs.Rectangle(0,0,549.9,757.2), new cjs.Rectangle(0,0,549.9,705.8), new cjs.Rectangle(0,0,549.9,654.4), new cjs.Rectangle(0,0,549.9,603), new cjs.Rectangle(0,0,549.9,551.6), new cjs.Rectangle(0,0,549.9,500.2), new cjs.Rectangle(0,0,549.9,448.8), new cjs.Rectangle(0,0,549.9,397.4), new cjs.Rectangle(0,0,549.9,346), new cjs.Rectangle(0,0,549.9,294.6), new cjs.Rectangle(0,0,549.9,243.2), new cjs.Rectangle(0,0,549.9,191.8), new cjs.Rectangle(0,0,549.9,140.4), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,0,510.7,89), new cjs.Rectangle(0,0,471.5,89), new cjs.Rectangle(0,0,432.3,89), new cjs.Rectangle(0,0,393.1,89), new cjs.Rectangle(0,0,353.9,89), new cjs.Rectangle(0,0,314.7,89), new cjs.Rectangle(0,0,275.5,89), new cjs.Rectangle(0,0,236.3,89), new cjs.Rectangle(0,0,197.1,89), new cjs.Rectangle(0,0,157.8,89), new cjs.Rectangle(0,0,118.6,89), new cjs.Rectangle(0,0,79.4,89), new cjs.Rectangle(0,0,40.2,89), new cjs.Rectangle(0,0,1,89)];


(lib.ContentSearch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var funcLib = exportRoot.getSearchLib();
		var others = exportRoot.getAllBlocks();
		for(var i=0; i<funcLib.length; i++){
			var btn = new lib.libFunc();
			btn.addEventListener("mouseover", highlight_on);
			btn.addEventListener("rollout", highlight_off);
			btn.addEventListener("mousedown", pressed);
			btn.x = 28;
			btn.y = 320+i*70;
			btn.desc = funcLib[i].desc;
			btn.func = funcLib[i];
			btn.title.text = funcLib[i].name;
			this.addChild(btn);
		}
		
		
		var focusMC = null;
		var focusFunc = null;
		var offX = 0;
		var offY = 0;
		var me = this;
		
		
		var desc = this.description;
		
		function highlight_on(event){
			event.currentTarget.block.gotoAndStop(1);
			desc.text = event.currentTarget.desc;
			
		}
		
		function highlight_off(event){
			event.currentTarget.block.gotoAndStop(0);
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
			focusMC = myMC;
			focusMC.x = evt.stageX-evt.localX;
		    focusMC.y = evt.stageY-evt.localY;
			offX = Number(evt.localX);
			offY = Number(evt.localY);
			stage.addEventListener("stagemousemove", dragged);
			stage.addEventListener("stagemouseup", released);
			focusFunc = button.func;
			exportRoot.addFunc(focusFunc.name, focusMC);
		}
		
		function dragged(evt){
		    focusMC.x = evt.stageX-offX;
		    focusMC.y = evt.stageY-offY;
			focusMC.checkForSnap(others);
		}
		
		function released (evt){
			me.parent.play();
			stage.removeEventListener("stagemousemove", dragged);
			stage.removeEventListener("stagemouseup", released);
			focusMC.shrink();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new cjs.Text("Advanced", "bold 25px 'Verdana'", "#B6AD9F");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 156;
	this.text.setTransform(387.2,255);

	this.text_1 = new cjs.Text("Basic", "bold 25px 'Verdana'", "#B6AD9F");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(129.2,255);

	this.description = new cjs.Text("Hover on a function for it's description.", "bold 20px 'Verdana'", "#333333");
	this.description.name = "description";
	this.description.lineHeight = 22;
	this.description.lineWidth = 492;
	this.description.setTransform(5.1,73.1);

	this.text_2 = new cjs.Text("Search", "bold 40px 'Verdana'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 42;
	this.text_2.lineWidth = 236;
	this.text_2.setTransform(251.2,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3D0606").ss(1,1,1).p("AAAj5IAAHz");
	this.shape.setTransform(257.2,269.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B0B0B").s().p("AzqD6IAAnzMAnVAAAIAAHzg");
	this.shape_1.setTransform(383.1,269.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#460707").s().p("A0OD6IAAnzMAodAAAIAAHzg");
	this.shape_2.setTransform(127.7,269.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6AD9F").s().p("EgnhAMvIAA5dMBPDAAAIAAZdg");
	this.shape_3.setTransform(253.1,151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.description},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 2
	this.instance = new lib.slider();
	this.instance.setTransform(499.3,518.4,1,0.937,0,0,0,9,266.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#880D13").s().p("EAgGAlCIAAgBMhH7AAAMAAAhKCMBPrAAAMAAABKCIgcAAMAAAhInIhbAAMAAAAz2IAnAAIAAUyg");
	this.shape_4.setTransform(253.4,531.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.9,0,511.2,768.7);
p.frameBounds = [rect];


(lib.library = function() {
	this.initialize();

	// Layer 1
	this.var_btn = new lib.variable_btn();
	this.var_btn.setTransform(85.5,260.2,1.024,1,0,0,0,83,1.4);

	this.search_btn = new lib.search_btn();
	this.search_btn.setTransform(85.5,175.3,1.024,1,0,0,0,83,1.4);

	this.func_btn = new lib.function_btn();
	this.func_btn.setTransform(85.5,90.5,1.024,1,0,0,0,83,1.4);

	this.pencil_btn = new lib.pencil_btn();
	this.pencil_btn.setTransform(19.1,29.1,1.674,1.716);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8B8B8").s().p("EgqQA+gMAAAh8/MBUgAAAMAAAB8/g");
	this.shape.setTransform(354.3,400.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A7A7").s().p("EgGgA+fMAAAh89IL0AAIAAN1IAKAAIAAAKIAKAAIAAAKIA5AAMAAABu0g");
	this.shape_1.setTransform(41.8,400);

	this.addChild(this.shape_1,this.shape,this.pencil_btn,this.func_btn,this.search_btn,this.var_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,624.8,800.2);
p.frameBounds = [rect];


(lib.libFunc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 3
	this.title = new cjs.Text("Title", "bold 25px 'Verdana'", "#FFFFFF");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 27;
	this.title.lineWidth = 428;
	this.title.setTransform(216.1,14.9);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(3));

	// Layer 1
	this.block = new lib.blue_btn();
	this.block.setTransform(219.1,31,1,1,0,0,0,219.1,31);

	this.block2 = new lib.purple_btn();
	this.block2.setTransform(219.1,31,1,1,0,0,0,219.1,31);

	this.block3 = new lib.yellow_btn();
	this.block3.setTransform(219.1,31,1,1,0,0,0,219.1,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.block}]}).to({state:[{t:this.block2}]},1).to({state:[{t:this.block3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.5,-0.5,439.2,63);
p.frameBounds = [rect, rect, rect];


(lib.libBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.block.isVar.visible = false;
		var yScale = 1;
		var hideHitBoxes = true;
		this.depBlocks = new Array();
		var destX;
		var destY;
		var possibleLowerBlock;
		var focusedBlock;
		var focusedBlockInputIndex;
		var focusedBlockIndex;
		
		function getYScale(){
			return yScale;
		}
		this.getYScale = getYScale;
		function shrink(){
			
			if(!destX || !destY){
				destX = me.x;
				destY = me.y;
			}else{
				var dist = Math.sqrt(Math.pow((me.x-destX),2)+Math.pow((me.y-destY),2));
				arrow.visible = false;
				if(focusedBlock && dist<175){
					focusedBlock.root = false;
					//console.log(focusedBlock);
					
					setTimeout(function(){
						me.depBlocks.push([-1,focusedBlock]);
						//console.log(me.func);
						focusedBlock.mc.depBlocks.push([1,me.func]);
						me.func.vars[focusedBlockIndex] = focusedBlock;
						exportRoot.turnOnInput(focusedBlockInputIndex,focusedBlock);
					},500);
				}
				//me.func.inputs[focusedBlockIndex].alpha = 1;
			}
			var dist = Math.sqrt(Math.pow((me.x-destX),2)+Math.pow((me.y-destY),2));
			if(dist<175){
			createjs.Tween.get(me)
		         .to({x:destX, y:destY}, 150);
			}else{
				if(focusedBlock){
					
					me.func.vars[focusedBlockInputIndex] = null;
					focusedBlock.root = true;
					//console.log("not root anymore:"+me.func.vars[focusedBlockInputIndex]);
				}
			}
		    createjs.Tween.get(this.block)
		         .to({scaleX:.85}, 150);
		}
		this.shrink = shrink;
		this.blockStack = new Array();
		var stacker = 0;
		var tempVal = "nothing";
		var me = this;
		this.chill = false;
		var arrow = this.arrow;
		arrow.visible = false;
		
		var top = new createjs.Shape();
		top.graphics.beginFill("#ff0000").drawRect(0, 0, 230, 80);
		top.alpha = .1;
		top.x = 100;
		top.y = -80;
		me.addChild(top);
		me.top = top;
		
		
		var bottom = new createjs.Shape();
		bottom.graphics.beginFill("#ff0000").drawRect(0, 0, 230, 80);
		bottom.alpha = .1;
		bottom.x = 100;
		bottom.y = 64;
		me.addChild(bottom);
		me.bottom = bottom;
		
		
		if(hideHitBoxes){
			top.alpha = 0;
			bottom.alpha = 0;
		}
		function removeHit(){
			me.removeChild(me.bottom);
			me.removeChild(me.top);
			me.bottom = null;
			me.top = null;
		}
		this.removeHit = removeHit;
		
		function checkCollision(x1,y1,x2,y2){
			var width = 230;
			var height = 80;
			//console.log("{x1:"+x1+", y1:"+y1+"}   {x2:"+x2+", y2:"+y2+"}");
			
			return x1 < x2 + width && x1 + width > x2 && y1 < y2 + height && y1 + height > y2;
		}
		
		function checkForSnap(others){
			for(var i=0; i<others.length; i++){
				var func = me.func;
				//console.log(func);
				if(!func){
					console.log("no Func");
					return;
				}
				for(var j=0; j<func.params.length; j++){
					var param = func.params[j][2];
					//console.log("compare: "+param+" -> "+others[i].name);
					if(param === others[i].name){
						var otherMC = others[i].mc.bottom;
						//console.log(otherMC);
						//console.log("{x1:"+otherMC.x+", y1:"+otherMC.y+"}   {x2:"+top.x+", y2:"+top.y+"}");
						var x1 = otherMC.x+others[i].mc.x;
						var y1 = otherMC.y+others[i].mc.y;
						var x2 = top.x+me.x;
						var y2 = top.y+me.y;
						focusedBlock = others[i];
						focusedBlockIndex = Number(i);
						focusedBlockInputIndex = Number(j);
						//console.log("fB:"+focusedBlockIndex);
						if(checkCollision(x1,y1,x2,y2)){
							if(!hideHitBoxes){
								otherMC.alpha = .5;
								top.alpha = .5;
							}
							arrow.visible = true
							var yDist = (y2+76)-y1;
							var xDist = x2-x1;
				
							arrow.scaleY = (yDist/76)*2;
							arrow.skewX = -(xDist)/4;
							destY = me.y - yDist;
							destX = me.x - xDist;
						}else{
							arrow.visible = false;
							if(!hideHitBoxes){
								otherMC.alpha = .1;
								top.alpha = .1;
							}
						}
						//console.log("other: "+otherMC.getBounds());
						//console.log("me: "+top.getBounds());
					}
				}
			}
		}
		this.checkForSnap = checkForSnap;
		function shiftDependents(mag){
			//console.log("shifting deps");
			var h = 65;
			var dep = me.depBlocks;	
			for(var i=0; i<dep.length; i++){
				var shift = mag*h*dep[i][0]/2;
				var depMC = dep[i][1].mc;
				//console.log(depMC);
				createjs.Tween.get(depMC).to({y:depMC.y+shift}, 150);
				//depMC.shiftDependents(mag);
			}
		
		}
		function addBlock(type,val, bindedBlock, bindedIndex){
			tempVal = val;
			yScale+=1.4;
			createjs.Tween.get(this.block)
		         .to({scaleY:yScale}, 150)
		         .call(handleComplete);
			createjs.Tween.get(this.title)
		         .to({y:(-yScale*64)/2+40}, 150);
				if(me.top){
				me.top.y = (-yScale*64)/2+25;
				me.bottom.y = (yScale*64)/2-30;
				
			}
			shiftDependents(1.4);
			var myMC = new lib.libBlock();
			var bounds = myMC.frameBounds[0];
			myMC.x = 180;
			var h = bounds.height;
			myMC.y = 50 - bounds.height/2 + stacker*bounds.height/2;
			myMC.block.scaleX = .75;
			
			myMC.type.text = tempVal;
			myMC.block.highlight.visible = false;
			myMC.bindedBlock = bindedBlock;
			myMC.bindedIndex = bindedIndex;
			this.blockStack.push(myMC);
			stacker = this.blockStack.length;
			var midPoint = Math.round(this.blockStack.length/2);
			updateSubPos();
		    function handleComplete() {
				this.parent.addChild(myMC);
				myMC.type = "sentence";
				myMC.alpha = 0;
				
				createjs.Tween.get(myMC)
		         .to({alpha:1}, 150).call(finished);
		    }
			function finished(){
				myMC.removeHit();
				myMC.block.gotoAndStop(1);
			}
		}
		this.addBlock = addBlock;
		
		function targetMC(block, index){
			for(var i=0; i<me.blockStack.length; i++){
				if(me.blockStack[i].bindedBlock == block && me.blockStack[i].bindedIndex === index){
					return [me.blockStack[i],i];
				}
			}
			return 
		}
		
		function updateSubPos(){
			var h = 88;
			stacker = me.blockStack.length;
			for(var i=0; i<me.blockStack.length; i++){	
				createjs.Tween.get(me.blockStack[i])
				.to({y:-stacker*h/2+50 + i*h}, 150);
			}
		}
		
		function removeBlock(block, index, kill){
			if(!targetMC(block, index)){
				return "nope";
			}
			var MC = targetMC(block, index)[0];
			if(!kill){
				index = targetMC(block, index)[1];
			}
			
			createjs.Tween.get(me.blockStack[index])
		         .to({alpha:0}, 150)
		         .call(handleComplete);
			function handleComplete() {
				me.removeChild(me.blockStack[index]);
				me.blockStack.splice(index,1);
			
				yScale-=1.4;
				createjs.Tween.get(me.block)
					 .to({scaleY:yScale}, 150);
				if(me.blockStack.length === 0){
					createjs.Tween.get(me.title)
						 .to({y:15}, 150);
					}else{
					createjs.Tween.get(me.title)
						 .to({y:(-yScale*64)/2+40}, 150);
					}
				updateSubPos();
				shiftDependents(-1.4);
			}
			
				
		}
		this.removeBlock = removeBlock;
		
		
		function updateVal(key){
			for(var i=0; i<this.blockStack.length; i++){
				if(this.blockStack[i].bindedBlock == key){
					var tits = String(this.blockStack[i].bindedBlock.vars[this.blockStack[i].bindedIndex]);
					if(tits.length>10){
						tits = tits.substring(0,10);
						tits = tits+"..";
					}
					this.blockStack[i].title.text = tits;
				}
			}
		}
		this.updateVal = updateVal;
		
		this.addEventListener("click", focusOnMe);
		function focusOnMe(event){
			//console.log("focus on me babe");
			if(!me.type){
				//console.log("highlighting..");
				event.currentTarget.block.highlight.visible = true;
			}
			var func = exportRoot.getFuncFromMC(event.currentTarget);
			if(func){
				exportRoot.loadBlockInfo(func);
			}else if(me.type){
				//exportRoot.primitivePrompt(me.type,me.title.text,event.currentTarget);
			}
		}
		
		var imageHolder= null;
		function addImage(bitmap){
			yScale+=4.6;
			bitmap.x = 100;
			bitmap.y = (-yScale*64)/2+85;
			bitmap.alpha = 0;
			imageHolder = bitmap;
			me.addChild(bitmap);
			
			createjs.Tween.get(this.block)
		         .to({scaleY:yScale}, 150)
		         .call(handleComplete);
			createjs.Tween.get(bitmap)
		         .to({alpha:1}, 150);
			createjs.Tween.get(this.title)
		         .to({y:(-yScale*64)/2+40}, 150);
				 
			if(me.top){
				me.top.y = (-yScale*64)/2-35;
				me.bottom.y = (yScale*64)/2+30;
				
			}
			shiftDependents(4.6);
		}
		this.addImage = addImage;
		
		
		function removeImage(){
			yScale-=4.6;
			if(imageHolder){
				createjs.Tween.get(imageHolder)
		         .to({alpha:0}, 150)
		         .call(handleComplete);
			}
			function handleComplete(){
				me.removeChild(imageHolder);
				imageHolder = null;
				createjs.Tween.get(me.block)
		         .to({scaleY:yScale}, 150);
				createjs.Tween.get(me.title)
		         .to({y:(-yScale*64)/2+47}, 150);
			}
			shiftDependents(-4.6);
		}
		this.removeImage = removeImage;
		
		function killSelf(){
			console.log("killing self");
			yScale = 1;
			for(var i=0; i<me.blockStack.length; i++){
				console.log("removing block");
				removeBlock(me.func, i, true);
			}
			if(imageHolder){
				console.log("removing image");
				removeImage();
			}
			me.explosion.play();
		}
		this.killSelf = killSelf;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6
	this.explosion = new lib.explosion();
	this.explosion.setTransform(233,30.9,1,1,0,0,0,21.8,22.3);

	this.timeline.addTween(cjs.Tween.get(this.explosion).wait(1));

	// Layer 2
	this.arrow = new lib.Arrow();
	this.arrow.setTransform(218.1,-5.9,1.808,1.808,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1,1,1).p("AgEAAIAJAA");
	this.shape.setTransform(-2.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.title = new cjs.Text("WolframAlpha", "bold 25px 'Verdana'", "#FFFFFF");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 27;
	this.title.lineWidth = 428;
	this.title.setTransform(216.1,14.9);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// Layer 3
	this.type = new cjs.Text("Type:", "bold 25px 'Verdana'", "#FFFFFF");
	this.type.name = "type";
	this.type.textAlign = "right";
	this.type.lineHeight = 27;
	this.type.lineWidth = 177;
	this.type.setTransform(31.9,11.6);

	this.block = new lib.squar();
	this.block.setTransform(219.5,30.1,1,1,0,0,0,222.5,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.block},{t:this.type}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-78.8,601,154.8);
p.frameBounds = [rect];


(lib.graphics_lib_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var funcLib = exportRoot.getGraphicsLib();
		var others = exportRoot.getAllBlocks();
		for(var i=0; i<funcLib.length; i++){
			var btn = new lib.libFunc();
			btn.addEventListener("mouseover", highlight_on);
			btn.addEventListener("rollout", highlight_off);
			btn.addEventListener("mousedown", pressed);
			btn.x = 28;
			btn.y = 320+i*70;
			btn.desc = funcLib[i].desc;
			btn.func = funcLib[i];
			btn.title.text = funcLib[i].name;
			btn.gotoAndStop(2);
			this.addChild(btn);
		}
		
		var focusMC = null;
		var focusFunc = null;
		var offX = 0;
		var offY = 0;
		var me = this;
		var desc = this.description;
		
		function highlight_on(event){
			event.currentTarget.block.gotoAndStop(1);
			desc.text = event.currentTarget.desc;
			
		}
		
		function highlight_off(event){
			event.currentTarget.block.gotoAndStop(0);
		}
		
		
		function pressed(evt){
			var button = evt.currentTarget;
			var myMC = new lib.libBlock();
			myMC.x=746;
			myMC.y=234;
			myMC.type.visible = false;
			myMC.title.text = button.func.name;
			//myMC.func = button.func;
			myMC.block.gotoAndStop(2);
			stage.addChild(myMC);
			focusMC = myMC;
			focusMC.x = evt.stageX-evt.localX;
		    focusMC.y = evt.stageY-evt.localY;
			offX = Number(evt.localX);
			offY = Number(evt.localY);
			stage.addEventListener("stagemousemove", dragged);
			stage.addEventListener("stagemouseup", released);
			focusFunc = button.func;
			exportRoot.addFunc(focusFunc.name, focusMC);
		}
		
		function dragged(evt){
			focusMC.block.gotoAndStop(2);
		    focusMC.x = evt.stageX-offX;
		    focusMC.y = evt.stageY-offY;
			focusMC.checkForSnap(others);
		}
		
		function released (evt){
			me.parent.play();
			stage.removeEventListener("stagemousemove", dragged);
			stage.removeEventListener("stagemouseup", released);
			focusMC.shrink();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new cjs.Text("Advanced", "bold 25px 'Verdana'", "#B6AD9F");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 156;
	this.text.setTransform(387.2,255);

	this.text_1 = new cjs.Text("Basic", "bold 25px 'Verdana'", "#B6AD9F");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(129.2,255);

	this.description = new cjs.Text("Hover on a function for it's description.", "bold 20px 'Verdana'", "#333333");
	this.description.name = "description";
	this.description.lineHeight = 22;
	this.description.lineWidth = 492;
	this.description.setTransform(5.1,73.1);

	this.text_2 = new cjs.Text("Draw", "bold 40px 'Verdana'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 42;
	this.text_2.lineWidth = 236;
	this.text_2.setTransform(251.2,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0B0735").ss(1,1,1).p("AAAj5IAAHz");
	this.shape.setTransform(257.2,269.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F0B6B").s().p("AzqD6IAAnzMAnVAAAIAAHzg");
	this.shape_1.setTransform(383.1,269.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E0946").s().p("A0OD6IAAnzMAodAAAIAAHzg");
	this.shape_2.setTransform(127.7,269.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6AD9F").s().p("EgnhAMvIAA5dMBPDAAAIAAZdg");
	this.shape_3.setTransform(253.1,151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.description},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 2
	this.instance = new lib.blue_slider();
	this.instance.setTransform(499.3,518.4,1,0.937,0,0,0,9,266.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1188").s().p("EAgGAlCIAAgBMhH7AAAMAAAhKCMBPrAAAMAAABKCIgcAAMAAAhInIhbAAMAAAAz2IAnAAIAAUyg");
	this.shape_4.setTransform(253.4,531.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.9,0,511.2,768.7);
p.frameBounds = [rect];


(lib.funcLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(13).call(this.frame_33).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgDGoIAAtQIAHAAIAANQg");
	var mask_graphics_1 = new cjs.Graphics().p("AgYGoIAAtQIAxAAIAANQg");
	var mask_graphics_2 = new cjs.Graphics().p("AhmGoIAAtQIDNAAIAANQg");
	var mask_graphics_3 = new cjs.Graphics().p("AkvGoIAAtQIJfAAIAANQg");
	var mask_graphics_4 = new cjs.Graphics().p("AxcGoIAAtQMAi5AAAIAANQg");
	var mask_graphics_5 = new cjs.Graphics().p("EgloAGoIAAtQMBLRAAAIAANQg");
	var mask_graphics_6 = new cjs.Graphics().p("EgpQAGoIAAtQMBShAAAIAANQg");
	var mask_graphics_7 = new cjs.Graphics().p("EgqmAGoIAAtQMBVNAAAIAANQg");
	var mask_graphics_8 = new cjs.Graphics().p("Egq8AGoIAAtQMBV5AAAIAANQg");
	var mask_graphics_9 = new cjs.Graphics().p("Egq8AG1IAAtpMBV5AAAIAANpg");
	var mask_graphics_10 = new cjs.Graphics().p("Egq8AHfIAAu9MBV5AAAIAAO9g");
	var mask_graphics_11 = new cjs.Graphics().p("Egq8AI1IAAxpMBV5AAAIAARpg");
	var mask_graphics_12 = new cjs.Graphics().p("Egq8ALTIAA2lMBV5AAAIAAWlg");
	var mask_graphics_13 = new cjs.Graphics().p("Egq8AQCMAAAggDMBV5AAAMAAAAgDg");
	var mask_graphics_14 = new cjs.Graphics().p("Egq8AdNMAAAg6ZMBV5AAAMAAAA6Zg");
	var mask_graphics_15 = new cjs.Graphics().p("Egq8A28MAAAht3MBV5AAAMAAABt3g");
	var mask_graphics_16 = new cjs.Graphics().p("Egq8A9lMAAAh7JMBV5AAAMAAAB7Jg");
	var mask_graphics_17 = new cjs.Graphics().p("Egq8BAoMAAAiBPMBV5AAAMAAACBPg");
	var mask_graphics_18 = new cjs.Graphics().p("Egq8BCOMAAAiEbMBV5AAAMAAACEbg");
	var mask_graphics_19 = new cjs.Graphics().p("Egq8BC+MAAAiF7MBV5AAAMAAACF7g");
	var mask_graphics_20 = new cjs.Graphics().p("Egq8BDMMAAAiGXMBV5AAAMAAACGXg");
	var mask_graphics_21 = new cjs.Graphics().p("Egq8BDMMAAAiGXMBV5AAAMAAACGXg");
	var mask_graphics_22 = new cjs.Graphics().p("Egq8A7nMAAAh3NMBV5AAAMAAAB3Ng");
	var mask_graphics_23 = new cjs.Graphics().p("Egq8A0DMAAAhoFMBV5AAAMAAABoFg");
	var mask_graphics_24 = new cjs.Graphics().p("Egq8AseMAAAhY7MBV5AAAMAAABY7g");
	var mask_graphics_25 = new cjs.Graphics().p("Egq8Ak6MAAAhJzMBV5AAAMAAABJzg");
	var mask_graphics_26 = new cjs.Graphics().p("Egq8AdWMAAAg6rMBV5AAAMAAAA6rg");
	var mask_graphics_27 = new cjs.Graphics().p("Egq8AVxMAAAgrhMBV5AAAMAAAArhg");
	var mask_graphics_28 = new cjs.Graphics().p("Egq8AONIAA8ZMBV5AAAIAAcZg");
	var mask_graphics_29 = new cjs.Graphics().p("Egq8AGoIAAtQMBV5AAAIAANQg");
	var mask_graphics_30 = new cjs.Graphics().p("EggOAGoIAAtQMBAdAAAIAANQg");
	var mask_graphics_31 = new cjs.Graphics().p("A1gGoIAAtQMArBAAAIAANQg");
	var mask_graphics_32 = new cjs.Graphics().p("AqyGoIAAtQIVlAAIAANQg");
	var mask_graphics_33 = new cjs.Graphics().p("AgDGoIAAtQIAHAAIAANQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:42.5}).wait(1).to({graphics:mask_graphics_1,x:2.5,y:42.5}).wait(1).to({graphics:mask_graphics_2,x:10.4,y:42.5}).wait(1).to({graphics:mask_graphics_3,x:30.5,y:42.5}).wait(1).to({graphics:mask_graphics_4,x:111.8,y:42.5}).wait(1).to({graphics:mask_graphics_5,x:240.9,y:42.5}).wait(1).to({graphics:mask_graphics_6,x:264.2,y:42.5}).wait(1).to({graphics:mask_graphics_7,x:272.8,y:42.5}).wait(1).to({graphics:mask_graphics_8,x:275,y:42.5}).wait(1).to({graphics:mask_graphics_9,x:275,y:43.4}).wait(1).to({graphics:mask_graphics_10,x:275,y:46.7}).wait(1).to({graphics:mask_graphics_11,x:275,y:53.3}).wait(1).to({graphics:mask_graphics_12,x:275,y:65.5}).wait(1).to({graphics:mask_graphics_13,x:275,y:88.8}).wait(1).to({graphics:mask_graphics_14,x:275,y:153.8}).wait(1).to({graphics:mask_graphics_15,x:275,y:280.7}).wait(1).to({graphics:mask_graphics_16,x:275,y:313.4}).wait(1).to({graphics:mask_graphics_17,x:275,y:328.4}).wait(1).to({graphics:mask_graphics_18,x:275,y:336.2}).wait(1).to({graphics:mask_graphics_19,x:275,y:340}).wait(1).to({graphics:mask_graphics_20,x:275,y:341}).wait(1).to({graphics:mask_graphics_21,x:275,y:341}).wait(1).to({graphics:mask_graphics_22,x:275,y:303.7}).wait(1).to({graphics:mask_graphics_23,x:275,y:266.4}).wait(1).to({graphics:mask_graphics_24,x:275,y:229.1}).wait(1).to({graphics:mask_graphics_25,x:275,y:191.7}).wait(1).to({graphics:mask_graphics_26,x:275,y:154.4}).wait(1).to({graphics:mask_graphics_27,x:275,y:117.1}).wait(1).to({graphics:mask_graphics_28,x:275,y:79.8}).wait(1).to({graphics:mask_graphics_29,x:275,y:42.5}).wait(1).to({graphics:mask_graphics_30,x:206.3,y:42.5}).wait(1).to({graphics:mask_graphics_31,x:137.7,y:42.5}).wait(1).to({graphics:mask_graphics_32,x:69.1,y:42.5}).wait(1).to({graphics:mask_graphics_33,x:0.5,y:42.5}).wait(1));

	// Layer 2
	this.instance = new lib.math_lib_content();
	this.instance.setTransform(278.1,176.7,1,1,0,0,0,253.1,159.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:176.4},0).wait(1).to({y:175.5},0).wait(1).to({x:278.2,y:173.5},0).wait(1).to({x:278.3,y:169.9},0).wait(1).to({x:278.6,y:163},0).wait(1).to({x:279.6,y:141.3},0).wait(1).to({x:281.4,y:99},0).wait(1).to({x:281.7,y:90.4},0).wait(1).to({x:281.9,y:86.3},0).wait(1).to({x:282,y:84.1},0).wait(1).to({y:83},0).wait(1).to({x:282.1,y:82.7},0).wait(2).to({x:282,y:83.4},0).wait(1).to({x:281.9,y:86},0).wait(1).to({x:281.6,y:92.4},0).wait(1).to({x:280.6,y:116.1},0).wait(1).to({x:278.6,y:164.8},0).wait(1).to({x:278.2,y:173},0).wait(1).to({x:278.1,y:176},0).wait(1).to({y:176.7},0).wait(5));

	// Layer 1
	this.instance_1 = new lib.orange_pane();
	this.instance_1.setTransform(0.5,42.5,0.043,1,0,0,0,11.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.22,x:2.5},0).wait(1).to({scaleX:0.9,x:10.4},0).wait(1).to({scaleX:2.65,x:30.5},0).wait(1).to({scaleX:9.72,x:111.8},0).wait(1).to({scaleX:20.95,x:241},0).wait(1).to({scaleX:22.97,x:264.2},0).wait(1).to({scaleX:23.72,x:272.8},0).wait(1).to({scaleX:23.91,x:275},0).wait(1).to({scaleY:1.03,y:43.5},0).wait(1).to({scaleY:1.13,y:46.8},0).wait(1).to({scaleY:1.33,y:53.4},0).wait(1).to({scaleY:1.7,y:65.5},0).wait(1).to({scaleY:2.42,y:88.9},0).wait(1).to({scaleY:4.4,y:153.8},0).wait(1).to({scaleY:8.28,y:280.7},0).wait(1).to({scaleY:9.27,y:313.4},0).wait(1).to({scaleY:9.73,y:328.4},0).wait(1).to({scaleY:9.97,y:336.3},0).wait(1).to({scaleY:10.09,y:340},0).wait(1).to({scaleY:10.12,y:341},0).wait(1).to({scaleY:1,y:42.5},8).to({scaleX:0.04,x:0.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,85);
p.frameBounds = [rect, new cjs.Rectangle(0,0,5,85), new cjs.Rectangle(0,0,20.8,85), new cjs.Rectangle(0,0,61,85), new cjs.Rectangle(0,0,223.6,85), new cjs.Rectangle(0,0,481.9,85), new cjs.Rectangle(0,0,528.4,85), new cjs.Rectangle(0,0,545.6,85), new cjs.Rectangle(0,0,549.9,85), new cjs.Rectangle(0,-0.2,550,87.4), new cjs.Rectangle(0,-1.2,550,95.9), new cjs.Rectangle(0,-3.2,550,113.1), new cjs.Rectangle(0,-6.8,550,144.7), new cjs.Rectangle(0,-13.8,550,205.3), new cjs.Rectangle(0,-33.2,550,373.9), new cjs.Rectangle(0,-71,550,703.3), new cjs.Rectangle(0,-80.7,550,788.3), new cjs.Rectangle(0,-85.2,550,827.4), new cjs.Rectangle(0,-87.5,550,847.6), new cjs.Rectangle(0,-88.7,550,857.3), rect=new cjs.Rectangle(0,-89,549.9,860), rect, new cjs.Rectangle(0,-77.8,550,763.1), new cjs.Rectangle(0,-66.7,550,666.2), new cjs.Rectangle(0,-55.6,550,569.4), new cjs.Rectangle(0,-44.5,550,472.5), new cjs.Rectangle(0,-33.3,550,375.6), new cjs.Rectangle(0,-22.2,550,278.8), new cjs.Rectangle(0,-11.1,550,181.9), new cjs.Rectangle(0,0,549.9,85), new cjs.Rectangle(0,0,412.7,85), new cjs.Rectangle(0,0,275.5,85), new cjs.Rectangle(0,0,138.3,85), new cjs.Rectangle(0,0,1,85)];


(lib.drawLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		if(exportRoot.alertLib){
			exportRoot.removeChild(exportRoot.alertLib);
		}
	}
	this.frame_33 = function() {
		exportRoot.callInputs(1);
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(13).call(this.frame_33).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgDG9IAAt5IAIAAIAAN5g");
	var mask_graphics_1 = new cjs.Graphics().p("AgYG9IAAt5IAxAAIAAN5g");
	var mask_graphics_2 = new cjs.Graphics().p("AhnG9IAAt5IDPAAIAAN5g");
	var mask_graphics_3 = new cjs.Graphics().p("AkyG9IAAt5IJlAAIAAN5g");
	var mask_graphics_4 = new cjs.Graphics().p("AxrG9IAAt5MAjXAAAIAAN5g");
	var mask_graphics_5 = new cjs.Graphics().p("EglnAG9IAAt5MBLPAAAIAAN5g");
	var mask_graphics_6 = new cjs.Graphics().p("EgpQAG9IAAt5MBShAAAIAAN5g");
	var mask_graphics_7 = new cjs.Graphics().p("EgqmAG9IAAt5MBVNAAAIAAN5g");
	var mask_graphics_8 = new cjs.Graphics().p("Egq8AG9IAAt5MBV5AAAIAAN5g");
	var mask_graphics_9 = new cjs.Graphics().p("Egq8AHHIAAuNMBV5AAAIAAONg");
	var mask_graphics_10 = new cjs.Graphics().p("Egq8AHsIAAvXMBV5AAAIAAPXg");
	var mask_graphics_11 = new cjs.Graphics().p("Egq8AI3IAAxtMBV5AAAIAARtg");
	var mask_graphics_12 = new cjs.Graphics().p("Egq8AK8IAA13MBV5AAAIAAV3g");
	var mask_graphics_13 = new cjs.Graphics().p("Egq8AOsIAA9XMBV5AAAIAAdXg");
	var mask_graphics_14 = new cjs.Graphics().p("Egq8AXMMAAAguXMBV5AAAMAAAAuXg");
	var mask_graphics_15 = new cjs.Graphics().p("Egq8A0qMAAAhpTMBV5AAAMAAABpTg");
	var mask_graphics_16 = new cjs.Graphics().p("Egq8A9HMAAAh6NMBV5AAAMAAAB6Ng");
	var mask_graphics_17 = new cjs.Graphics().p("Egq8BAfMAAAiA9MBV5AAAMAAACA9g");
	var mask_graphics_18 = new cjs.Graphics().p("Egq8BCLMAAAiEVMBV5AAAMAAACEVg");
	var mask_graphics_19 = new cjs.Graphics().p("Egq8BC9MAAAiF5MBV5AAAMAAACF5g");
	var mask_graphics_20 = new cjs.Graphics().p("Egq8BDLMAAAiGVMBV5AAAMAAACGVg");
	var mask_graphics_21 = new cjs.Graphics().p("Egq8BDLMAAAiGVMBV5AAAMAAACGVg");
	var mask_graphics_22 = new cjs.Graphics().p("Egq8A6lMAAAh1JMBV5AAAMAAAB1Jg");
	var mask_graphics_23 = new cjs.Graphics().p("Egq8Ax+MAAAhj7MBV5AAAMAAABj7g");
	var mask_graphics_24 = new cjs.Graphics().p("Egq8ApXMAAAhStMBV5AAAMAAABStg");
	var mask_graphics_25 = new cjs.Graphics().p("Egq8AgxMAAAhBhMBV5AAAMAAABBhg");
	var mask_graphics_26 = new cjs.Graphics().p("Egq8AYKMAAAgwTMBV5AAAMAAAAwTg");
	var mask_graphics_27 = new cjs.Graphics().p("Egq8APjIAA/FMBV5AAAIAAfFg");
	var mask_graphics_28 = new cjs.Graphics().p("Egq8AG9IAAt5MBV5AAAIAAN5g");
	var mask_graphics_29 = new cjs.Graphics().p("EgiXAG9IAAt5MBEvAAAIAAN5g");
	var mask_graphics_30 = new cjs.Graphics().p("A5yG9IAAt5MAzlAAAIAAN5g");
	var mask_graphics_31 = new cjs.Graphics().p("AxNG9IAAt5MAibAAAIAAN5g");
	var mask_graphics_32 = new cjs.Graphics().p("AooG9IAAt5IRRAAIAAN5g");
	var mask_graphics_33 = new cjs.Graphics().p("AgDG9IAAt5IAIAAIAAN5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:44.5}).wait(1).to({graphics:mask_graphics_1,x:2.5,y:44.5}).wait(1).to({graphics:mask_graphics_2,x:10.4,y:44.5}).wait(1).to({graphics:mask_graphics_3,x:30.7,y:44.5}).wait(1).to({graphics:mask_graphics_4,x:113.2,y:44.5}).wait(1).to({graphics:mask_graphics_5,x:240.9,y:44.5}).wait(1).to({graphics:mask_graphics_6,x:264.1,y:44.5}).wait(1).to({graphics:mask_graphics_7,x:272.8,y:44.5}).wait(1).to({graphics:mask_graphics_8,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_9,x:274.9,y:45.6}).wait(1).to({graphics:mask_graphics_10,x:274.9,y:49.3}).wait(1).to({graphics:mask_graphics_11,x:274.9,y:56.7}).wait(1).to({graphics:mask_graphics_12,x:274.9,y:70}).wait(1).to({graphics:mask_graphics_13,x:274.9,y:94.1}).wait(1).to({graphics:mask_graphics_14,x:274.9,y:148.4}).wait(1).to({graphics:mask_graphics_15,x:274.9,y:337.1}).wait(1).to({graphics:mask_graphics_16,x:274.9,y:391.1}).wait(1).to({graphics:mask_graphics_17,x:274.9,y:412.8}).wait(1).to({graphics:mask_graphics_18,x:274.9,y:423.6}).wait(1).to({graphics:mask_graphics_19,x:274.9,y:428.6}).wait(1).to({graphics:mask_graphics_20,x:274.9,y:430}).wait(1).to({graphics:mask_graphics_21,x:274.9,y:430}).wait(1).to({graphics:mask_graphics_22,x:274.9,y:374.9}).wait(1).to({graphics:mask_graphics_23,x:274.9,y:319.9}).wait(1).to({graphics:mask_graphics_24,x:274.9,y:264.8}).wait(1).to({graphics:mask_graphics_25,x:274.9,y:209.7}).wait(1).to({graphics:mask_graphics_26,x:274.9,y:154.6}).wait(1).to({graphics:mask_graphics_27,x:274.9,y:99.6}).wait(1).to({graphics:mask_graphics_28,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_29,x:220,y:44.5}).wait(1).to({graphics:mask_graphics_30,x:165.2,y:44.5}).wait(1).to({graphics:mask_graphics_31,x:110.3,y:44.5}).wait(1).to({graphics:mask_graphics_32,x:55.4,y:44.5}).wait(1).to({graphics:mask_graphics_33,x:0.5,y:44.5}).wait(1));

	// Layer 2
	this.content = new lib.ContentSearch();
	this.content.setTransform(274,178.7,1,1,0,0,0,253.1,159.8);

	this.content.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.content).wait(34));

	// Layer 1
	this.instance = new lib.red_bg();
	this.instance.setTransform(2.5,0.5,0.01,1,0,0,0,234.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:47.8,regY:44.5,scaleX:0.05,y:44.5},0).wait(1).to({scaleX:0.22,x:10.5},0).wait(1).to({scaleX:0.64,x:30.7},0).wait(1).to({scaleX:2.37,x:113.2},0).wait(1).to({scaleX:5.04,x:240.8},0).wait(1).to({scaleX:5.52,x:264},0).wait(1).to({scaleX:5.7,x:272.6},0).wait(1).to({regX:234.4,regY:0.5,scaleX:5.75,x:1347.5,y:0.5},0).wait(1).to({regX:47.8,regY:44.5,scaleY:1.02,x:274.8,y:45.6},0).wait(1).to({scaleY:1.11,y:49.3},0).wait(1).to({scaleY:1.27,y:56.7},0).wait(1).to({scaleY:1.57,y:70},0).wait(1).to({scaleY:2.11,y:94.1},0).wait(1).to({scaleY:3.34,y:148.5},0).wait(1).to({scaleY:7.58,y:337.1},0).wait(1).to({scaleY:8.79,y:391.1},0).wait(1).to({scaleY:9.28,y:412.8},0).wait(1).to({scaleY:9.52,y:423.6},0).wait(1).to({scaleY:9.63,y:428.6},0).wait(1).to({regX:234.4,regY:0.5,scaleY:9.66,x:1347.5,y:4.9},0).wait(1).to({scaleY:1,y:0.5},7).to({scaleX:0.01,x:2.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,89);
p.frameBounds = [rect, new cjs.Rectangle(0,0,5.1,89), new cjs.Rectangle(0,0,20.9,89), new cjs.Rectangle(0,0,61.4,89), new cjs.Rectangle(0,0,226.4,89), new cjs.Rectangle(0,0,481.7,89), new cjs.Rectangle(0,0,528.3,89), new cjs.Rectangle(0,0,545.5,89), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,0,549.9,91.2), new cjs.Rectangle(0,0,549.9,98.6), new cjs.Rectangle(0,0,549.9,113.5), new cjs.Rectangle(0,0,549.9,140), new cjs.Rectangle(0,0,549.9,188.2), new cjs.Rectangle(0,0,549.9,296.9), new cjs.Rectangle(0,0,549.9,674.2), new cjs.Rectangle(0,0,549.9,782.2), new cjs.Rectangle(0,0.1,549.9,825.6), new cjs.Rectangle(0,0,549.9,847.1), new cjs.Rectangle(0,0,549.9,857.2), rect=new cjs.Rectangle(0,0,549.9,860), rect, new cjs.Rectangle(0,0,549.9,749.9), new cjs.Rectangle(0,0,549.9,639.7), new cjs.Rectangle(0,0,549.9,529.6), new cjs.Rectangle(0,0,549.9,419.4), new cjs.Rectangle(0,0,549.9,309.3), new cjs.Rectangle(0,0,549.9,199.2), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,0,440.1,89), new cjs.Rectangle(0,0,330.3,89), new cjs.Rectangle(0,0,220.6,89), new cjs.Rectangle(0,0,110.8,89), new cjs.Rectangle(0,0,1,89)];


(lib.varLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		exportRoot.removeChild(exportRoot.alertLib);
	}
	this.frame_33 = function() {
		exportRoot.callInputs(1);
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(13).call(this.frame_33).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgDG9IAAt5IAIAAIAAN5g");
	var mask_graphics_1 = new cjs.Graphics().p("AgYG9IAAt5IAxAAIAAN5g");
	var mask_graphics_2 = new cjs.Graphics().p("AhnG9IAAt5IDPAAIAAN5g");
	var mask_graphics_3 = new cjs.Graphics().p("AkyG9IAAt5IJlAAIAAN5g");
	var mask_graphics_4 = new cjs.Graphics().p("AxrG9IAAt5MAjXAAAIAAN5g");
	var mask_graphics_5 = new cjs.Graphics().p("EglnAG9IAAt5MBLPAAAIAAN5g");
	var mask_graphics_6 = new cjs.Graphics().p("EgpQAG9IAAt5MBShAAAIAAN5g");
	var mask_graphics_7 = new cjs.Graphics().p("EgqmAG9IAAt5MBVNAAAIAAN5g");
	var mask_graphics_8 = new cjs.Graphics().p("Egq8AG9IAAt5MBV5AAAIAAN5g");
	var mask_graphics_9 = new cjs.Graphics().p("Egq8AHHIAAuNMBV5AAAIAAONg");
	var mask_graphics_10 = new cjs.Graphics().p("Egq8AHsIAAvXMBV5AAAIAAPXg");
	var mask_graphics_11 = new cjs.Graphics().p("Egq8AI3IAAxtMBV5AAAIAARtg");
	var mask_graphics_12 = new cjs.Graphics().p("Egq8AK8IAA13MBV5AAAIAAV3g");
	var mask_graphics_13 = new cjs.Graphics().p("Egq8AOsIAA9XMBV5AAAIAAdXg");
	var mask_graphics_14 = new cjs.Graphics().p("Egq8AXMMAAAguXMBV5AAAMAAAAuXg");
	var mask_graphics_15 = new cjs.Graphics().p("Egq8A0qMAAAhpTMBV5AAAMAAABpTg");
	var mask_graphics_16 = new cjs.Graphics().p("Egq8A9HMAAAh6NMBV5AAAMAAAB6Ng");
	var mask_graphics_17 = new cjs.Graphics().p("Egq8BAfMAAAiA9MBV5AAAMAAACA9g");
	var mask_graphics_18 = new cjs.Graphics().p("Egq8BCLMAAAiEVMBV5AAAMAAACEVg");
	var mask_graphics_19 = new cjs.Graphics().p("Egq8BC9MAAAiF5MBV5AAAMAAACF5g");
	var mask_graphics_20 = new cjs.Graphics().p("Egq8BDLMAAAiGVMBV5AAAMAAACGVg");
	var mask_graphics_21 = new cjs.Graphics().p("Egq8BDLMAAAiGVMBV5AAAMAAACGVg");
	var mask_graphics_22 = new cjs.Graphics().p("Egq8BCmMAAAiFLMBV5AAAMAAACFLg");
	var mask_graphics_23 = new cjs.Graphics().p("Egq8BANMAAAiAZMBV5AAAMAAACAZg");
	var mask_graphics_24 = new cjs.Graphics().p("Egq8A5LMAAAhyVMBV5AAAMAAAByVg");
	var mask_graphics_25 = new cjs.Graphics().p("Egq8AVFMAAAgqJMBV5AAAMAAAAqJg");
	var mask_graphics_26 = new cjs.Graphics().p("Egq8AKkIAA1HMBV5AAAIAAVHg");
	var mask_graphics_27 = new cjs.Graphics().p("Egq8AHoIAAvPMBV5AAAIAAPPg");
	var mask_graphics_28 = new cjs.Graphics().p("Egq8AG9IAAt5MBV5AAAIAAN5g");
	var mask_graphics_29 = new cjs.Graphics().p("EgiXAG9IAAt5MBEvAAAIAAN5g");
	var mask_graphics_30 = new cjs.Graphics().p("A5yG9IAAt5MAzlAAAIAAN5g");
	var mask_graphics_31 = new cjs.Graphics().p("AxNG9IAAt5MAibAAAIAAN5g");
	var mask_graphics_32 = new cjs.Graphics().p("AooG9IAAt5IRRAAIAAN5g");
	var mask_graphics_33 = new cjs.Graphics().p("AgDG9IAAt5IAIAAIAAN5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:44.5}).wait(1).to({graphics:mask_graphics_1,x:2.5,y:44.5}).wait(1).to({graphics:mask_graphics_2,x:10.4,y:44.5}).wait(1).to({graphics:mask_graphics_3,x:30.7,y:44.5}).wait(1).to({graphics:mask_graphics_4,x:113.2,y:44.5}).wait(1).to({graphics:mask_graphics_5,x:240.9,y:44.5}).wait(1).to({graphics:mask_graphics_6,x:264.1,y:44.5}).wait(1).to({graphics:mask_graphics_7,x:272.8,y:44.5}).wait(1).to({graphics:mask_graphics_8,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_9,x:274.9,y:44.8}).wait(1).to({graphics:mask_graphics_10,x:274.9,y:46.1}).wait(1).to({graphics:mask_graphics_11,x:274.9,y:48.5}).wait(1).to({graphics:mask_graphics_12,x:274.9,y:52.8}).wait(1).to({graphics:mask_graphics_13,x:274.9,y:60.6}).wait(1).to({graphics:mask_graphics_14,x:274.9,y:78.3}).wait(1).to({graphics:mask_graphics_15,x:274.9,y:139.7}).wait(1).to({graphics:mask_graphics_16,x:274.9,y:157.2}).wait(1).to({graphics:mask_graphics_17,x:274.9,y:164.3}).wait(1).to({graphics:mask_graphics_18,x:274.9,y:167.8}).wait(1).to({graphics:mask_graphics_19,x:274.9,y:169.4}).wait(1).to({graphics:mask_graphics_20,x:274.9,y:169.9}).wait(1).to({graphics:mask_graphics_21,x:274.9,y:169.9}).wait(1).to({graphics:mask_graphics_22,x:274.9,y:168.7}).wait(1).to({graphics:mask_graphics_23,x:274.9,y:163.7}).wait(1).to({graphics:mask_graphics_24,x:274.9,y:149.1}).wait(1).to({graphics:mask_graphics_25,x:274.9,y:73.9}).wait(1).to({graphics:mask_graphics_26,x:274.9,y:52}).wait(1).to({graphics:mask_graphics_27,x:274.9,y:45.9}).wait(1).to({graphics:mask_graphics_28,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_29,x:220,y:44.5}).wait(1).to({graphics:mask_graphics_30,x:165.2,y:44.5}).wait(1).to({graphics:mask_graphics_31,x:110.3,y:44.5}).wait(1).to({graphics:mask_graphics_32,x:55.4,y:44.5}).wait(1).to({graphics:mask_graphics_33,x:0.5,y:44.5}).wait(1));

	// Layer 2
	this.content = new lib.ContentVar();
	this.content.setTransform(275.2,169.8,1,1,0,0,0,253.1,159.8);

	this.content.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.content).wait(9).to({regX:253.8,regY:384.3,x:275.9,y:393.6},0).wait(1).to({y:391.1},0).wait(1).to({y:386.1},0).wait(1).to({y:377.1},0).wait(1).to({y:360.9},0).wait(1).to({y:324.2},0).wait(1).to({y:196.9},0).wait(1).to({y:160.5},0).wait(1).to({y:145.9},0).wait(1).to({y:138.6},0).wait(1).to({y:135.2},0).wait(1).to({regX:253.1,regY:159.8,x:275.2,y:-90.3},0).wait(2).to({regX:253.8,regY:384.3,x:275.9,y:136.8},0).wait(1).to({y:147.1},0).wait(1).to({y:177.4},0).wait(1).to({y:333.3},0).wait(1).to({y:378.7},0).wait(1).to({y:391.4},0).wait(1).to({regX:253.1,regY:159.8,x:275.2,y:169.8},0).wait(6));

	// Layer 1
	this.instance = new lib.green_bg();
	this.instance.setTransform(2.5,0.5,0.01,1,0,0,0,234.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:47.8,regY:44.5,scaleX:0.05,y:44.5},0).wait(1).to({scaleX:0.22,x:10.5},0).wait(1).to({scaleX:0.64,x:30.7},0).wait(1).to({scaleX:2.37,x:113.2},0).wait(1).to({scaleX:5.04,x:240.8},0).wait(1).to({scaleX:5.52,x:264},0).wait(1).to({scaleX:5.7,x:272.6},0).wait(1).to({regX:234.4,regY:0.5,scaleX:5.75,x:1347.5,y:0.5},0).wait(1).to({regX:47.8,regY:44.5,scaleY:1.02,x:274.8,y:44.9},0).wait(1).to({scaleY:1.11,y:46.1},0).wait(1).to({scaleY:1.27,y:48.5},0).wait(1).to({scaleY:1.57,y:52.8},0).wait(1).to({scaleY:2.11,y:60.7},0).wait(1).to({scaleY:3.34,y:78.4},0).wait(1).to({scaleY:7.58,y:139.7},0).wait(1).to({scaleY:8.79,y:157.3},0).wait(1).to({scaleY:9.28,y:164.3},0).wait(1).to({scaleY:9.52,y:167.8},0).wait(1).to({scaleY:9.63,y:169.5},0).wait(1).to({regX:234.4,regY:0.5,scaleY:9.66,x:1347.5,y:-255.2},0).wait(2).to({regX:47.8,regY:44.5,scaleY:9.58,x:274.8,y:168.7},0).wait(1).to({scaleY:9.23,y:163.8},0).wait(1).to({scaleY:8.23,y:149.1},0).wait(1).to({scaleY:3.03,y:74},0).wait(1).to({scaleY:1.52,y:52.1},0).wait(1).to({scaleY:1.1,y:46},0).wait(1).to({regX:234.4,regY:0.5,scaleY:1,x:1347.5,y:0.5},0).to({scaleX:0.01,x:2.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,89);
p.frameBounds = [rect, new cjs.Rectangle(0,0,5.1,89), new cjs.Rectangle(0,0,20.9,89), new cjs.Rectangle(0,0,61.4,89), new cjs.Rectangle(0,0,226.5,89), new cjs.Rectangle(0,0,481.9,89), new cjs.Rectangle(0,0,528.4,89), new cjs.Rectangle(0,0,545.5,89), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,-0.7,549.9,91.2), new cjs.Rectangle(0,-3.2,549.9,98.6), new cjs.Rectangle(0,-8.2,549.9,113.5), new cjs.Rectangle(0,-17.2,549.9,140), new cjs.Rectangle(0,-33.4,549.9,188.1), new cjs.Rectangle(0,-70.1,549.9,296.9), new cjs.Rectangle(0,-197.4,549.9,674.2), new cjs.Rectangle(0,-233.8,549.9,782.2), new cjs.Rectangle(0,-248.4,549.9,825.6), new cjs.Rectangle(0,-255.7,549.9,847.1), new cjs.Rectangle(0,-259.1,549.9,857.2), rect=new cjs.Rectangle(0,-260.1,549.9,860), rect, new cjs.Rectangle(0,-257.7,549.9,852.5), new cjs.Rectangle(0,-247.4,549.9,821.9), new cjs.Rectangle(0,-217,549.9,732), new cjs.Rectangle(0,-61.1,549.9,270), new cjs.Rectangle(0,-15.6,549.9,135.3), new cjs.Rectangle(0,-2.9,549.9,97.7), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,0,440.1,89), new cjs.Rectangle(0,0,330.3,89), new cjs.Rectangle(0,0,220.6,89), new cjs.Rectangle(0,0,110.8,89), new cjs.Rectangle(0,0,1,89)];


(lib.graphicsLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		if(exportRoot.alertLib){
			exportRoot.removeChild(exportRoot.alertLib);
		}
	}
	this.frame_33 = function() {
		exportRoot.callInputs(1);
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(13).call(this.frame_33).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgDG9IAAt5IAIAAIAAN5g");
	var mask_graphics_1 = new cjs.Graphics().p("AgYG9IAAt5IAxAAIAAN5g");
	var mask_graphics_2 = new cjs.Graphics().p("AhnG9IAAt5IDPAAIAAN5g");
	var mask_graphics_3 = new cjs.Graphics().p("AkyG9IAAt5IJlAAIAAN5g");
	var mask_graphics_4 = new cjs.Graphics().p("AxrG9IAAt5MAjXAAAIAAN5g");
	var mask_graphics_5 = new cjs.Graphics().p("EglnAG9IAAt5MBLPAAAIAAN5g");
	var mask_graphics_6 = new cjs.Graphics().p("EgpQAG9IAAt5MBShAAAIAAN5g");
	var mask_graphics_7 = new cjs.Graphics().p("EgqmAG9IAAt5MBVNAAAIAAN5g");
	var mask_graphics_8 = new cjs.Graphics().p("Egq8AG9IAAt5MBV5AAAIAAN5g");
	var mask_graphics_9 = new cjs.Graphics().p("Egq8AHHIAAuNMBV5AAAIAAONg");
	var mask_graphics_10 = new cjs.Graphics().p("Egq8AHsIAAvXMBV5AAAIAAPXg");
	var mask_graphics_11 = new cjs.Graphics().p("Egq8AI3IAAxtMBV5AAAIAARtg");
	var mask_graphics_12 = new cjs.Graphics().p("Egq8AK8IAA13MBV5AAAIAAV3g");
	var mask_graphics_13 = new cjs.Graphics().p("Egq8AOsIAA9XMBV5AAAIAAdXg");
	var mask_graphics_14 = new cjs.Graphics().p("Egq8AXMMAAAguXMBV5AAAMAAAAuXg");
	var mask_graphics_15 = new cjs.Graphics().p("Egq8A0qMAAAhpTMBV5AAAMAAABpTg");
	var mask_graphics_16 = new cjs.Graphics().p("Egq8A9HMAAAh6NMBV5AAAMAAAB6Ng");
	var mask_graphics_17 = new cjs.Graphics().p("Egq8BAfMAAAiA9MBV5AAAMAAACA9g");
	var mask_graphics_18 = new cjs.Graphics().p("Egq8BCLMAAAiEVMBV5AAAMAAACEVg");
	var mask_graphics_19 = new cjs.Graphics().p("Egq8BC9MAAAiF5MBV5AAAMAAACF5g");
	var mask_graphics_20 = new cjs.Graphics().p("Egq8BDLMAAAiGVMBV5AAAMAAACGVg");
	var mask_graphics_21 = new cjs.Graphics().p("Egq8BDLMAAAiGVMBV5AAAMAAACGVg");
	var mask_graphics_22 = new cjs.Graphics().p("Egq8BCoMAAAiFPMBV5AAAMAAACFPg");
	var mask_graphics_23 = new cjs.Graphics().p("Egq8BAWMAAAiArMBV5AAAMAAACArg");
	var mask_graphics_24 = new cjs.Graphics().p("Egq8A5tMAAAhzZMBV5AAAMAAABzZg");
	var mask_graphics_25 = new cjs.Graphics().p("Egq8AUMMAAAgoXMBV5AAAMAAAAoXg");
	var mask_graphics_26 = new cjs.Graphics().p("Egq8AKXIAA0tMBV5AAAIAAUtg");
	var mask_graphics_27 = new cjs.Graphics().p("Egq8AHmIAAvLMBV5AAAIAAPLg");
	var mask_graphics_28 = new cjs.Graphics().p("Egq8AG9IAAt5MBV5AAAIAAN5g");
	var mask_graphics_29 = new cjs.Graphics().p("EgiXAG9IAAt5MBEvAAAIAAN5g");
	var mask_graphics_30 = new cjs.Graphics().p("A5yG9IAAt5MAzlAAAIAAN5g");
	var mask_graphics_31 = new cjs.Graphics().p("AxNG9IAAt5MAibAAAIAAN5g");
	var mask_graphics_32 = new cjs.Graphics().p("AooG9IAAt5IRRAAIAAN5g");
	var mask_graphics_33 = new cjs.Graphics().p("AgDG9IAAt5IAIAAIAAN5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:44.5}).wait(1).to({graphics:mask_graphics_1,x:2.5,y:44.5}).wait(1).to({graphics:mask_graphics_2,x:10.4,y:44.5}).wait(1).to({graphics:mask_graphics_3,x:30.7,y:44.5}).wait(1).to({graphics:mask_graphics_4,x:113.2,y:44.5}).wait(1).to({graphics:mask_graphics_5,x:240.9,y:44.5}).wait(1).to({graphics:mask_graphics_6,x:264.1,y:44.5}).wait(1).to({graphics:mask_graphics_7,x:272.8,y:44.5}).wait(1).to({graphics:mask_graphics_8,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_9,x:274.9,y:45.1}).wait(1).to({graphics:mask_graphics_10,x:274.9,y:47.1}).wait(1).to({graphics:mask_graphics_11,x:274.9,y:51.1}).wait(1).to({graphics:mask_graphics_12,x:274.9,y:58.2}).wait(1).to({graphics:mask_graphics_13,x:274.9,y:71.2}).wait(1).to({graphics:mask_graphics_14,x:274.9,y:100.4}).wait(1).to({graphics:mask_graphics_15,x:274.9,y:202}).wait(1).to({graphics:mask_graphics_16,x:274.9,y:231}).wait(1).to({graphics:mask_graphics_17,x:274.9,y:242.7}).wait(1).to({graphics:mask_graphics_18,x:274.9,y:248.5}).wait(1).to({graphics:mask_graphics_19,x:274.9,y:251.2}).wait(1).to({graphics:mask_graphics_20,x:274.9,y:251.9}).wait(1).to({graphics:mask_graphics_21,x:274.9,y:251.9}).wait(1).to({graphics:mask_graphics_22,x:274.9,y:250}).wait(1).to({graphics:mask_graphics_23,x:274.9,y:242.2}).wait(1).to({graphics:mask_graphics_24,x:274.9,y:219.3}).wait(1).to({graphics:mask_graphics_25,x:274.9,y:90.1}).wait(1).to({graphics:mask_graphics_26,x:274.9,y:56.3}).wait(1).to({graphics:mask_graphics_27,x:274.9,y:46.7}).wait(1).to({graphics:mask_graphics_28,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_29,x:220,y:44.5}).wait(1).to({graphics:mask_graphics_30,x:165.2,y:44.5}).wait(1).to({graphics:mask_graphics_31,x:110.3,y:44.5}).wait(1).to({graphics:mask_graphics_32,x:55.4,y:44.5}).wait(1).to({graphics:mask_graphics_33,x:0.5,y:44.5}).wait(1));

	// Layer 2
	this.content = new lib.graphics_lib_content();
	this.content.setTransform(274,178.7,1,1,0,0,0,253.1,159.8);

	this.content.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.content).wait(9).to({regX:253.7,regY:384.3,x:274.6,y:402.7},0).wait(1).to({y:400.8},0).wait(1).to({y:396.9},0).wait(1).to({y:389.9},0).wait(1).to({y:376.4},0).wait(1).to({y:338.1},0).wait(1).to({y:259.9},0).wait(1).to({y:241.1},0).wait(1).to({y:232.5},0).wait(1).to({y:228},0).wait(1).to({y:225.8},0).wait(1).to({regX:253.1,regY:159.8,x:274,y:0.7},0).wait(2).to({regX:253.7,regY:384.3,x:274.6,y:226.8},0).wait(1).to({y:233.6},0).wait(1).to({y:253.2},0).wait(1).to({y:364.1},0).wait(1).to({y:393.1},0).wait(1).to({y:401.3},0).wait(1).to({regX:253.1,regY:159.8,x:274,y:178.7},0).wait(6));

	// Layer 1
	this.instance = new lib.purple_bg();
	this.instance.setTransform(2.5,0.5,0.01,1,0,0,0,234.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:47.8,regY:44.5,scaleX:0.05,y:44.5},0).wait(1).to({scaleX:0.22,x:10.5},0).wait(1).to({scaleX:0.64,x:30.7},0).wait(1).to({scaleX:2.37,x:113.2},0).wait(1).to({scaleX:5.04,x:240.8},0).wait(1).to({scaleX:5.52,x:264},0).wait(1).to({scaleX:5.7,x:272.6},0).wait(1).to({regX:234.4,regY:0.5,scaleX:5.75,x:1347.5,y:0.5},0).wait(1).to({regX:47.8,regY:44.5,scaleY:1.02,x:274.8,y:45.1},0).wait(1).to({scaleY:1.11,y:47.1},0).wait(1).to({scaleY:1.27,y:51.1},0).wait(1).to({scaleY:1.57,y:58.3},0).wait(1).to({scaleY:2.11,y:71.2},0).wait(1).to({scaleY:3.34,y:100.5},0).wait(1).to({scaleY:7.58,y:202},0).wait(1).to({scaleY:8.79,y:231.1},0).wait(1).to({scaleY:9.28,y:242.7},0).wait(1).to({scaleY:9.52,y:248.5},0).wait(1).to({scaleY:9.63,y:251.2},0).wait(1).to({regX:234.4,regY:0.5,scaleY:9.66,x:1347.5,y:-173.2},0).wait(2).to({regX:47.8,regY:44.5,scaleY:9.58,x:274.8,y:250.1},0).wait(1).to({scaleY:9.26,y:242.3},0).wait(1).to({scaleY:8.3,y:219.4},0).wait(1).to({scaleY:2.9,y:90.2},0).wait(1).to({scaleY:1.49,y:56.3},0).wait(1).to({scaleY:1.09,y:46.8},0).wait(1).to({regX:234.4,regY:0.5,scaleY:1,x:1347.5,y:0.5},0).to({scaleX:0.01,x:2.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,89);
p.frameBounds = [rect, new cjs.Rectangle(0,0,5.1,89), new cjs.Rectangle(0,0,20.9,89), new cjs.Rectangle(0,0,61.4,89), new cjs.Rectangle(0,0,226.4,89), new cjs.Rectangle(0,0,481.7,89), new cjs.Rectangle(0,0,528.3,89), new cjs.Rectangle(0,0,545.5,89), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,-0.5,549.9,91.2), new cjs.Rectangle(0,-2.2,549.9,98.6), new cjs.Rectangle(0,-5.6,549.9,113.5), new cjs.Rectangle(0,-11.7,549.9,140), new cjs.Rectangle(0,-22.9,549.9,188.2), new cjs.Rectangle(0,-48,549.9,296.9), new cjs.Rectangle(0,-135.1,549.9,674.2), new cjs.Rectangle(0,-160.1,549.9,782.2), new cjs.Rectangle(0,-170,549.9,825.6), new cjs.Rectangle(0,-175.1,549.9,847.1), new cjs.Rectangle(0,-177.4,549.9,857.2), rect=new cjs.Rectangle(0,-178,549.9,860), rect, new cjs.Rectangle(0,-176.1,549.9,852.9), new cjs.Rectangle(0,-169.4,549.9,823.8), new cjs.Rectangle(0,-149.8,549.9,738.7), new cjs.Rectangle(0,-39,549.9,258.5), new cjs.Rectangle(0,-10,549.9,132.7), new cjs.Rectangle(0,-1.9,549.9,97.3), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,0,440.1,89), new cjs.Rectangle(0,0,330.3,89), new cjs.Rectangle(0,0,220.6,89), new cjs.Rectangle(0,0,110.8,89), new cjs.Rectangle(0,0,1,89)];


// stage content:



(lib.wolf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(20);
		var btn = document.createElement("textarea");
		btn.style.position = "absolute";
		btn.style.top = "" + 880 + "px";
		btn.style.left = "" + 5 + "px";
		btn.style.fontSize = "" + 25 + "px";
		btn.style.width = "" + 1600 + "px";
		btn.style.height = "" + 400 + "px";
		document.body.appendChild(btn);
		
		var me = this;
		var alertLib = this.alertLib;
		var openPane = null;
		var outputCompile = false;
		this.outputCompile = outputCompile;
		
		var Button = function (name, mc) {
			this.name = name;
			this.mc = mc;
		}
		var btns = new Array(
			new Button("draw", this.library.pencil_btn),
			new Button("func", this.library.func_btn),
			new Button("search", this.library.search_btn),
			new Button("variables", this.library.var_btn),
		
			new Button("new", this.new_btn),
			new Button("load", this.load_btn),
			new Button("save", this.save_btn),
			new Button("export", this.export_btn)
		
		);
		
		var focusLib = null;
		var focusBtn = null;
		for (var i = 0; i < btns.length; i++) {
			btns[i].mc.addEventListener("mouseover", btnOver);
			btns[i].mc.addEventListener("rollout", btnOut);
			btns[i].mc.addEventListener("click", openLib);
		}
		
		function btnOver(event) {
			event.currentTarget.gotoAndStop(1);
		}
		function btnOut(event) {
			event.currentTarget.gotoAndStop(0);
		}
		
		function openLib(event) {
			clearInputs();
			var name = getButtonName(event.currentTarget);
			event.currentTarget.removeEventListener("mouseover", btnOver);
			event.currentTarget.removeEventListener("rollout", btnOut);
			if (focusBtn) {
				focusBtn.addEventListener("mouseover", btnOver);
				focusBtn.addEventListener("rollout", btnOut);
			}
			focusBtn = event.currentTarget;
			var libX = 1057;
			var libY = 0;
			switch (name) {
				case "draw":
					var myMC = new lib.drawLib();
					myMC.x = libX;
					myMC.y = 59 + libY;
					stage.addChild(myMC);
					openPane = myMC;
					focusLib = myMC;
					break;
				case "func":
					var myMC = new lib.funcLib();
					myMC.x = libX - 1;
					myMC.y = 149 + libY;
		
					stage.addChild(myMC);
					focusLib = myMC;
					openPane = myMC;
					break;
				case "search":
					var myMC = new lib.graphicsLib();
					myMC.x = libX - 1;
					myMC.y = 234 + libY;
		
					stage.addChild(myMC);
					focusLib = myMC;
					openPane = myMC;
					break;
				case "variables":
					var myMC = new lib.varLib();
					myMC.x = libX - 1;
					myMC.y = 319 + libY;
		
					stage.addChild(myMC);
					focusLib = myMC;
					openPane = myMC;
					break;
			}
		}
		
		function getButtonName(mc) {
			for (var i = 0; i < btns.length; i++) {
				if (btns[i].mc == mc) {
					return btns[i].name;
				}
			}
		}
		
		
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
			if (block.blockObject[index]) {
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
		
		var TextBox = function (defaultValue, optional, x, y, size, width, index, browse, block, slider) {
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
						var textB = new TextBox(defaultValue, optional, x, y, size, width, index, browse, block);
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
				updateCode();
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
		
				updateCode();
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
		
		function turnOnInput(j, childBlock) {
			var funcs = getAllBlocks();
			var i = funcs.length - 1;
			funcs[i].inputs[j].button.alpha = 1;
			funcs[i].blockObject[j] = true;
			funcs[i].vars[j] = childBlock;
			updateCode();
		}
		this.turnOnInput = turnOnInput;
		
		
		
		function generateInput(block, origin) {
		
			if (block.inputs[0]) {
				return;
			}
			var yShift = 0;
			for (var j = 0; j < block.params.length; j++) {
				var param = block.params[j];
				if (param[2] === "string") {
					var txtBox = new TextBox(param[0], param[1], 1140, 306 + yShift, 38, 390, j, false, block, false);
					if (block.vars[j]) {
						txtBox.setInput(block.vars[j]);
					}
					block.inputs[j] = txtBox;
					yShift += 75;
				} else if (param[2] === "integer") {
					var txtBox = new TextBox(param[0], param[1], 1140, 306 + yShift, 38, 390, j, false, block, true);
					if (block.vars[j]) {
						txtBox.setInput(block.vars[j]);
					}
					block.inputs[j] = txtBox;
					yShift += 75;
				} else if (param[2] === "browse") {
					var txtBox = new TextBox(param[0], param[1], 1140, 306 + yShift, 38, 390, j, true, block, false);
					if (block.vars[j]) {
						txtBox.setInput(block.vars[j]);
					}
					block.inputs[j] = txtBox;
					yShift += 75;
				} else {
					//console.log("Time to be smart");
					var txtBox = new BlockInput(param[0], param[1], param[2], yShift, block, j)
					block.inputs[j] = txtBox;
					yShift += 100;
				}
		
			}
			tempBlocks = new Array();
			//window.addEventListener("keyup", handleNonOptionalChecks);
			updateCode();
			//console.log("inputs were created");
			block.mc.block.highlight.visible = true;
		}
		this.generateInput = generateInput;
		
		function getTextBoxBlock(textBox) {
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
		
			updateCode();
		}
		
		var funcBlocks = new Array();
		//var codeBinder = new Array();
		var func_desc = this.func_desc;
		var func_title = this.func_title;
		var focusBlock = null;
		function addFunc(codeName, mc) {
			var func = funcMap.get(codeName);
			var block = new func(mc);
			funcBlocks.push(block);
			focusBlock = block;
			func_desc.text = block.desc;
			func_title.text = block.name;
			//console.log(block);
			mc.func = block;
			updateCode();
		}
		this.addFunc = addFunc;
		
		var canvasClean = new Array();
		var inputClean = new Array();
		var focusMC = null;
		var variables = new Array();
		function primitivePrompt(type, defaultVal, mc) {
			clearInputs();
			if (openPane) {
				openPane.play();
				openPane = null;
			}
			if (type === "sentence") {
				func_title.text = "Sentence";
				func_desc.text = "A list of letters.";
				//defaultValue, optional, x, y, size, width, index
				var varName = new TextBox("Variable Name", true, 1140, 306, 38, 390, 0, false, null);
				var varValue = new TextBox("Value", true, 1140, 371, 38, 390, 0, false, null);
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
		
		function callInputs(origin) {
		
			if (focusBlock) {
				me.generateInput(focusBlock, origin);
			}
		}
		this.callInputs = callInputs;
		
		function updateCode() {
			if (outputCompile) {
				console.log("compiling..");
			}
			var output = "";
			for (var i = 0; i < funcBlocks.length; i++) {
				if (funcBlocks[i].root) {
					output += compile(funcBlocks[i]);
				}
				output += "\n";
			}
			btn.value = output;
		}
		
		////////////////////////////COMPILATION
		function getHashedState(vars) {
			var primes = [2, 3, 5, 7, 11, 13, 17, 19];
			var ret = 1;
			for (var i = 0; i < vars.length; i++) {
				if (vars[i]) {
					ret *= primes[i];
				}
			}
			return ret;
		}
		this.getHashedState = getHashedState;
		
		function compile(func) {
			if (outputCompile) {
				console.log("compiling " + func.name + "...");
			}
			var output = func.codeBegin;
			output += func.compile();
			output += func.codeEnd;
			return output;
		}
		this.compile = compile;
		function clearInputs() {
			savePrimitive();
			for (var i = 0; i < canvasClean.length; i++) {
				stage.removeChild(canvasClean[i]);
			}
			canvasClean = new Array();
			if (focusLib) {
				focusLib.play();
				focusLib = null;
			}
			if (focusBlock) {
				for (var i = 0; i < focusBlock.inputs.length; i++) {
					if (focusBlock.inputs[i]) {
						focusBlock.inputs[i].removeListener();
					}
				}
				focusBlock.mc.block.highlight.visible = false;
				focusBlock.inputs = [null, null];
				focusBlock.focus = false;
				focusBlock = null;
			}
			inputClean = new Array();
		}
		this.clearInputs = clearInputs;
		
		
		function getFuncFromMC(mc) {
		
			for (var i = 0; i < funcBlocks.length; i++) {
				if (funcBlocks[i].mc === mc) {
					return funcBlocks[i];
				}
			}
		}
		this.getFuncFromMC = getFuncFromMC;
		
		
		function loadBlockInfo(block) {
			clearInputs();
			focusBlock = block;
			callInputs(0);
		}
		this.loadBlockInfo = loadBlockInfo;
		
		
		function includeJs(jsFilePath) {
			var js = document.createElement("script");
			js.type = "text/javascript";
			js.src = jsFilePath;
			document.head.appendChild(js);
		}
		includeJs("js/blocks.js");
		
		
		var searchLibs;
		var graphicsLibs;
		setTimeout(function () {
			searchLibs = new Array(new WolframAlpha(), new SocialMediaData(), new Image());
			graphicsLibs = new Array(new Blur());
		
		}, 300);
		function getSearchLib() {
			return searchLibs;
		}
		this.getSearchLib = getSearchLib;
		
		function getVariables() {
			return variables;
		}
		this.getVariables = getVariables;
		
		function getGraphicsLib() {
			return graphicsLibs;
		}
		this.getGraphicsLib = getGraphicsLib;
		
		function getAllBlocks() {
			return funcBlocks;
		}
		this.getAllBlocks = getAllBlocks;
		
		//hardDebugger
		/*
		 createjs.Ticker.addEventListener("tick", handleTick);
		 function handleTick(event) {
		     var funcs = getAllBlocks();
			 if(funcs[1] && funcs[1].vars[0]){
				 console.log("REAL");
			 }else{
				 var info="";
				 if(funcs[1]){
					 info = funcs[1].vars;
				 }
				 console.log("NOT ->"+info);
			 }
		 }
		*/
		
		//SELECT RECTANGLE
		
		stage.addEventListener("mousedown", startSelect);
		stage.addEventListener("pressmove", makeSelect);
		stage.addEventListener("pressup", executeSelect);
		var selecter;
		var h_blocks;
		var startX;
		var startY;
		
		function hitTest(x,y,block){
			var x1=block.mc.x;
			var y1=block.mc.y;
			var w1=430;
			var h1=block.mc.getYScale()*64;
			return x>x1 && x<x1+w1 && y>y1 && y<y1+h1;
		}
		function startSelect(m){
			//console.log(m.nativeEvent);
			if(m.nativeEvent.ctrlKey){
				//console.log("mkRect");
				selecter = new createjs.Shape();
				selecter.x = m.stageX;
				selecter.y = m.stageY;
				stage.addChild(selecter);
			}
			h_blocks = getHighlightedBlocks(m.stageX,m.stageY);
			startX = m.stageX;
			startY = m.stageY;
			if(m.stageX<950){
				var clicked = false;
				for(var i=0; i<funcBlocks.length; i++){
					if(!hitTest(m.stageX,m.stageY,funcBlocks[i])){
						funcBlocks[i].mc.block.highlight.visible = false;
					}
				}
				
			}
		}
		
		function getHighlightedBlocks(x,y){
			var h_blocks = new Array();
			for(var i=0; i<funcBlocks.length; i++){
				if(funcBlocks[i].mc.block.highlight.visible){
					var offsetX = funcBlocks[i].mc.x - x;
					var offsetY = funcBlocks[i].mc.y - y;
					h_blocks.push([funcBlocks[i],offsetX,offsetY]);
				}
			}
			return h_blocks;
		}
		function makeSelect(m){
			if(m.nativeEvent.ctrlKey){
				//console.log("expandRect");
				selecter.graphics.clear();
				var width = m.stageX - selecter.x;
				var height = m.stageY - selecter.y;
				selecter.graphics.beginFill("#0099FF").drawRect(0, 0, width, height);
				selecter.alpha = .4;
				highlightSelected(m.stageX,m.stageY);
			}else{
				//console.log(h_blocks);
				 for(var i=0; i<h_blocks.length; i++){
					h_blocks[i][0].mc.x = m.stageX + h_blocks[i][1];
					h_blocks[i][0].mc.y = m.stageY+ h_blocks[i][2];
				 }
				 if(h_blocks.length === 1){
					 h_blocks[0][0].mc.checkForSnap(exportRoot.getAllBlocks());
				 }
			}
		}
		function executeSelect(m){
			if(h_blocks.length === 1){
				 h_blocks[0][0].mc.shrink();
			}
			if(m.nativeEvent.ctrlKey){
				stage.removeChild(selecter);
				selecter = null;
			}
			h_blocks = null;
		}
		
		function highlightSelected(curX,curY){
			for(var i=0; i<funcBlocks.length; i++){
				//console.log(funcBlocks[i].mc.hitBox);
				var x1=funcBlocks[i].mc.x;
				var y1=funcBlocks[i].mc.y;
				var w1=430;
				var h1=funcBlocks[i].mc.getYScale()*64;
				var x2=startX;
				var y2=startY;
				var w2=(curX-startX);
				var h2=(curY-startY);
				if(w2<0){
					w2 = -w2;	
					x2 = curX;
				}
				if(h2<0){
					h2 = -h2;
					h2 = curY;
				}
				//console.log("["+x1+","+y1+","+w1+","+h1+"]\n"+"["+x2+","+y2+","+w2+","+h2+"]");
				
				if( x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2){
					//console.log("intersection");
					funcBlocks[i].mc.block.highlight.visible=true;
				}
			}
		}
		
		window.addEventListener("keydown", pressed);
		function pressed(k){
			if(k.keyCode === 46){
				for(var i=0; i<funcBlocks.length; i++){
					if(funcBlocks[i].mc.block.highlight.visible){
						for(var j=0; j<funcBlocks.length; j++){
							for(var k=0; k<funcBlocks[j].vars.length; k++){
								if(funcBlocks[j].vars[k] === funcBlocks[i]){
									console.log("nullifying var");
									funcBlocks[j].vars[k] = null;
								}
							}
						}
						funcBlocks[i].mc.killSelf();
						//funcBlocks.splice(i,1);
					}
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 7
	this.alertLib = new lib.click_on_lib_alert();
	this.alertLib.setTransform(1330.4,461.2,1,1,0,0,0,270.1,401.1);

	this.timeline.addTween(cjs.Tween.get(this.alertLib).wait(1));

	// Layer 3
	this.func_desc = new cjs.Text("A brief description on the function just in case you forget", "bold 20px 'Verdana'", "#333333");
	this.func_desc.name = "func_desc";
	this.func_desc.textAlign = "center";
	this.func_desc.lineHeight = 22;
	this.func_desc.lineWidth = 478;
	this.func_desc.setTransform(1329.3,139.9);

	this.func_title = new cjs.Text("Function Title", "bold 35px 'Verdana'", "#333333");
	this.func_title.name = "func_title";
	this.func_title.textAlign = "center";
	this.func_title.lineHeight = 37;
	this.func_title.lineWidth = 516;
	this.func_title.setTransform(1326.3,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.func_title},{t:this.func_desc}]}).wait(1));

	// Layer 6
	this.slider = new lib.gray_slider();
	this.slider.setTransform(1586.3,279.1,1,1.096,0,0,0,5.3,4.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#949494").s().p("EgqLARBMAAAgiCMBUXAAAMAAAAiCg");
	this.shape.setTransform(1330.3,169.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.slider}]}).wait(1));

	// Layer 2
	this.library = new lib.library();
	this.library.setTransform(1287.6,460.1,1,1,0,0,0,312.4,400.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("EhV9A+gMAAAh8+MCYsAAAMAAAB89ITPAAIAAABg");
	this.shape_1.setTransform(548.2,460);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.library}]}).wait(1));

	// Layer 1
	this.export_btn = new lib.export_btn();
	this.export_btn.setTransform(509.2,58.1,1,1,0,0,0,130.1,58.1);

	this.save_btn = new lib.save_btn();
	this.save_btn.setTransform(348.6,30.5,1,1,0,0,0,89.5,30.5);

	this.load_btn = new lib.load_btn();
	this.load_btn.setTransform(213.5,29.5,1,1,0,0,0,75.5,29.5);

	this.new_btn = new lib.newBtn();
	this.new_btn.setTransform(68.5,29.5,1,1,0,0,0,69.5,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D2D2D").s().p("AkSJEIAAyHMBpKAAAIAASHgEhk3AJEIAAo7MAooAAAIAAAUISxAAIAAIng");
	this.shape_2.setTransform(644.7,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.new_btn},{t:this.load_btn},{t:this.save_btn},{t:this.export_btn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(798,430,1602.4,862.3);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;