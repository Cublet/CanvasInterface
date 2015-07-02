(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1600,
	height: 860,
	fps: 45,
	color: "#2D2D2D",
	manifest: []
};



// symbols:



(lib.Magnifier_64 = function() {
	this.spriteSheet = ss["wolf_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pencil_edit_button_64 = function() {
	this.spriteSheet = ss["wolf_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Square_root_of_x_math_formula_64 = function() {
	this.spriteSheet = ss["wolf_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



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
p.nominalBounds = new cjs.Rectangle(-1,-1,20,535.2);


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
p.nominalBounds = new cjs.Rectangle(0,0,82.1,84.9);


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
p.nominalBounds = new cjs.Rectangle(28,0,151.1,61);


(lib.red_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF1123").s().p("AndG9IAAt5IO7AAIAAN5g");
	this.shape.setTransform(47.8,44.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,89);


(lib.purple_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E0079").s().p("AndG9IAAt5IO7AAIAAN5g");
	this.shape.setTransform(47.8,44.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,89);


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
p.nominalBounds = new cjs.Rectangle(-11.4,-16.9,50.2,51.9);


(lib.orange_pane = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C37703").s().p("AhyGoIAAtQIDlAAIAANQg");
	this.shape.setTransform(11.5,42.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,85);


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
p.nominalBounds = new cjs.Rectangle(0,0,139,59);


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
p.nominalBounds = new cjs.Rectangle(0,0,506.1,319.6);


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
p.nominalBounds = new cjs.Rectangle(0,0,151.1,59);


(lib.libFunc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.text = new cjs.Text("WolframAlpha", "bold 25px 'Verdana'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 428;
	this.text.setTransform(216.1,14.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#002647").ss(1,1,1).p("EgiNgE1MBEbAAAIAAJrMhEbAAAg");
	this.shape.setTransform(219.1,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003973").s().p("EgiNAE2IAAprMBEbAAAIAAJrg");
	this.shape_1.setTransform(219.1,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A4E73").s().p("EgiNAE2IAAprMBEbAAAIAAJrg");
	this.shape_2.setTransform(219.1,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,440.2,64);


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
p.nominalBounds = new cjs.Rectangle(-1,-1,20,535.2);


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
p.nominalBounds = new cjs.Rectangle(0,0,82.1,84.9);


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
p.nominalBounds = new cjs.Rectangle(60.1,0,200.1,60);


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
p.nominalBounds = new cjs.Rectangle(0,0,506.1,319.6);


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
p.nominalBounds = new cjs.Rectangle(0,0,540.2,802.2);


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
p.nominalBounds = new cjs.Rectangle(0,0,1,89);


(lib.search_lib_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var btn = this.btn_1;
		var focusMC = null;
		var offX = 0;
		var offY = 0;
		var me = this;
		btn.addEventListener("mouseover", highlight_on);
		btn.addEventListener("rollout", highlight_off);
		
		btn.addEventListener("mousedown", pressed);
		
		function highlight_on(event){
			//console.log("fuck");
			event.currentTarget.gotoAndStop(1);
		}
		
		function highlight_off(event){
			//console.log("off");
			event.currentTarget.gotoAndStop(0);
		}
		
		
		
		
		
		function pressed(evt){
			//console.log(evt);
			var myMC = new lib.libFunc();
			myMC.x=746;
			myMC.y=234;
			stage.addChild(myMC);
			focusMC = myMC;
			focusMC.x = evt.stageX-evt.localX;
		    focusMC.y = evt.stageY-evt.localY;
			offX = Number(evt.localX);
			offY = Number(evt.localY);
		    console.log("pressed");
			stage.addEventListener("stagemousemove", dragged);
			stage.addEventListener("stagemouseup", released);
			me.parent.play();
		}
		
		function dragged(evt){
			//console.log("dragging");
			//console.log("offX: "+offX+" offY:"+offY);
		    focusMC.x = evt.stageX-offX;
		    focusMC.y = evt.stageY-offY;
		}
		
		function released (evt){
			//console.log("up");
			stage.removeEventListener("stagemousemove", dragged);
			stage.removeEventListener("stagemouseup", released);
			exportRoot.addFunc("wolframAlpha");
		}
		
		/*
		function drag_me(event){
			var myMC = new lib.libFunc();
			myMC.x=746;
			myMC.y=234;
			stage.addChild(myMC);
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.btn_1 = new lib.libFunc();
	this.btn_1.setTransform(239.1,348.1,1,1,0,0,0,219.1,31);

	this.timeline.addTween(cjs.Tween.get(this.btn_1).wait(1));

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

	this.description = new cjs.Text("This is where the description of the function should go", "bold 20px 'Verdana'", "#333333");
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
	this.shape_1.graphics.f("#460707").s().p("A0OD6IAAnzMAodAAAIAAHzg");
	this.shape_1.setTransform(127.7,269.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#650A14").s().p("AzvD6IAAnzMAnfAAAIAAHzg");
	this.shape_2.setTransform(383.7,269.1);

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
p.nominalBounds = new cjs.Rectangle(-1.9,0,512,768.7);


(lib.library = function() {
	this.initialize();

	// Layer 1
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

	this.addChild(this.shape_1,this.shape,this.pencil_btn,this.func_btn,this.search_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,624.8,800.2);


(lib.funcLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		this.stop();
	}
	this.frame_59 = function() {
		this.parent.removeChild(this);
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgDGoIAAtQIAHAAIAANQg");
	var mask_graphics_1 = new cjs.Graphics().p("AgJGoIAAtQIATAAIAANQg");
	var mask_graphics_2 = new cjs.Graphics().p("AgbGoIAAtQIA3AAIAANQg");
	var mask_graphics_3 = new cjs.Graphics().p("Ag9GoIAAtQIB7AAIAANQg");
	var mask_graphics_4 = new cjs.Graphics().p("Ah4GoIAAtQIDxAAIAANQg");
	var mask_graphics_5 = new cjs.Graphics().p("AjWGoIAAtQIGtAAIAANQg");
	var mask_graphics_6 = new cjs.Graphics().p("Al2GoIAAtQILtAAIAANQg");
	var mask_graphics_7 = new cjs.Graphics().p("Aq/GoIAAtQIV/AAIAANQg");
	var mask_graphics_8 = new cjs.Graphics().p("A8yGoIAAtQMA5lAAAIAANQg");
	var mask_graphics_9 = new cjs.Graphics().p("EgkQAGoIAAtQMBIhAAAIAANQg");
	var mask_graphics_10 = new cjs.Graphics().p("EgnRAGoIAAtQMBOjAAAIAANQg");
	var mask_graphics_11 = new cjs.Graphics().p("Ego9AGoIAAtQMBR7AAAIAANQg");
	var mask_graphics_12 = new cjs.Graphics().p("Egp9AGoIAAtQMBT7AAAIAANQg");
	var mask_graphics_13 = new cjs.Graphics().p("EgqjAGoIAAtQMBVHAAAIAANQg");
	var mask_graphics_14 = new cjs.Graphics().p("Egq2AGoIAAtQMBVtAAAIAANQg");
	var mask_graphics_15 = new cjs.Graphics().p("Egq8AGoIAAtQMBV5AAAIAANQg");
	var mask_graphics_16 = new cjs.Graphics().p("Egq8AGxIAAthMBV5AAAIAANhg");
	var mask_graphics_17 = new cjs.Graphics().p("Egq8AHPIAAudMBV5AAAIAAOdg");
	var mask_graphics_18 = new cjs.Graphics().p("Egq8AIJIAAwRMBV5AAAIAAQRg");
	var mask_graphics_19 = new cjs.Graphics().p("Egq8AJtIAAzZMBV5AAAIAATZg");
	var mask_graphics_20 = new cjs.Graphics().p("Egq8AMVIAA4pMBV5AAAIAAYpg");
	var mask_graphics_21 = new cjs.Graphics().p("Egq8AREMAAAgiHMBV5AAAMAAAAiHg");
	var mask_graphics_22 = new cjs.Graphics().p("Egq8AdNMAAAg6ZMBV5AAAMAAAA6Zg");
	var mask_graphics_23 = new cjs.Graphics().p("Egq8A1SMAAAhqjMBV5AAAMAAABqjg");
	var mask_graphics_24 = new cjs.Graphics().p("Egq8A8PMAAAh4dMBV5AAAMAAAB4dg");
	var mask_graphics_25 = new cjs.Graphics().p("Egq8A/kMAAAh/HMBV5AAAMAAAB/Hg");
	var mask_graphics_26 = new cjs.Graphics().p("Egq8BBcMAAAiC3MBV5AAAMAAACC3g");
	var mask_graphics_27 = new cjs.Graphics().p("Egq8BCgMAAAiE/MBV5AAAMAAACE/g");
	var mask_graphics_28 = new cjs.Graphics().p("Egq8BDCMAAAiGDMBV5AAAMAAACGDg");
	var mask_graphics_29 = new cjs.Graphics().p("Egq8BDMMAAAiGXMBV5AAAMAAACGXg");
	var mask_graphics_30 = new cjs.Graphics().p("Egq8BDMMAAAiGXMBV5AAAMAAACGXg");
	var mask_graphics_31 = new cjs.Graphics().p("Egq8A+3MAAAh9tMBV5AAAMAAAB9tg");
	var mask_graphics_32 = new cjs.Graphics().p("Egq8A6iMAAAh1DMBV5AAAMAAAB1Dg");
	var mask_graphics_33 = new cjs.Graphics().p("Egq8A2NMAAAhsZMBV5AAAMAAABsZg");
	var mask_graphics_34 = new cjs.Graphics().p("Egq8Ax4MAAAhjvMBV5AAAMAAABjvg");
	var mask_graphics_35 = new cjs.Graphics().p("Egq8AtkMAAAhbHMBV5AAAMAAABbHg");
	var mask_graphics_36 = new cjs.Graphics().p("Egq8ApPMAAAhSdMBV5AAAMAAABSdg");
	var mask_graphics_37 = new cjs.Graphics().p("Egq8Ak6MAAAhJzMBV5AAAMAAABJzg");
	var mask_graphics_38 = new cjs.Graphics().p("Egq8AglMAAAhBJMBV5AAAMAAABBJg");
	var mask_graphics_39 = new cjs.Graphics().p("Egq8AcQMAAAg4fMBV5AAAMAAAA4fg");
	var mask_graphics_40 = new cjs.Graphics().p("Egq8AX8MAAAgv3MBV5AAAMAAAAv3g");
	var mask_graphics_41 = new cjs.Graphics().p("Egq8ATnMAAAgnNMBV5AAAMAAAAnNg");
	var mask_graphics_42 = new cjs.Graphics().p("Egq8APSIAA+jMBV5AAAIAAejg");
	var mask_graphics_43 = new cjs.Graphics().p("Egq8AK9IAA15MBV5AAAIAAV5g");
	var mask_graphics_44 = new cjs.Graphics().p("Egq8AGoIAAtQMBV5AAAIAANQg");
	var mask_graphics_45 = new cjs.Graphics().p("EgoFAGoIAAtQMBQLAAAIAANQg");
	var mask_graphics_46 = new cjs.Graphics().p("EglOAGoIAAtQMBKdAAAIAANQg");
	var mask_graphics_47 = new cjs.Graphics().p("EgiXAGoIAAtQMBEvAAAIAANQg");
	var mask_graphics_48 = new cjs.Graphics().p("A/gGoIAAtQMA/BAAAIAANQg");
	var mask_graphics_49 = new cjs.Graphics().p("A8pGoIAAtQMA5TAAAIAANQg");
	var mask_graphics_50 = new cjs.Graphics().p("A5yGoIAAtQMAzlAAAIAANQg");
	var mask_graphics_51 = new cjs.Graphics().p("A27GoIAAtQMAt3AAAIAANQg");
	var mask_graphics_52 = new cjs.Graphics().p("A0EGoIAAtQMAoJAAAIAANQg");
	var mask_graphics_53 = new cjs.Graphics().p("AxNGoIAAtQMAibAAAIAANQg");
	var mask_graphics_54 = new cjs.Graphics().p("AuWGoIAAtQIctAAIAANQg");
	var mask_graphics_55 = new cjs.Graphics().p("ArfGoIAAtQIW/AAIAANQg");
	var mask_graphics_56 = new cjs.Graphics().p("AooGoIAAtQIRRAAIAANQg");
	var mask_graphics_57 = new cjs.Graphics().p("AlxGoIAAtQILjAAIAANQg");
	var mask_graphics_58 = new cjs.Graphics().p("Ai6GoIAAtQIF1AAIAANQg");
	var mask_graphics_59 = new cjs.Graphics().p("AgDGoIAAtQIAHAAIAANQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:42.5}).wait(1).to({graphics:mask_graphics_1,x:1,y:42.5}).wait(1).to({graphics:mask_graphics_2,x:2.8,y:42.5}).wait(1).to({graphics:mask_graphics_3,x:6.3,y:42.5}).wait(1).to({graphics:mask_graphics_4,x:12.1,y:42.5}).wait(1).to({graphics:mask_graphics_5,x:21.6,y:42.5}).wait(1).to({graphics:mask_graphics_6,x:37.6,y:42.5}).wait(1).to({graphics:mask_graphics_7,x:70.5,y:42.5}).wait(1).to({graphics:mask_graphics_8,x:184.3,y:42.5}).wait(1).to({graphics:mask_graphics_9,x:232.2,y:42.5}).wait(1).to({graphics:mask_graphics_10,x:251.5,y:42.5}).wait(1).to({graphics:mask_graphics_11,x:262.2,y:42.5}).wait(1).to({graphics:mask_graphics_12,x:268.7,y:42.5}).wait(1).to({graphics:mask_graphics_13,x:272.5,y:42.5}).wait(1).to({graphics:mask_graphics_14,x:274.4,y:42.5}).wait(1).to({graphics:mask_graphics_15,x:275,y:42.5}).wait(1).to({graphics:mask_graphics_16,x:275,y:43.2}).wait(1).to({graphics:mask_graphics_17,x:275,y:45.5}).wait(1).to({graphics:mask_graphics_18,x:275,y:50}).wait(1).to({graphics:mask_graphics_19,x:275,y:57.7}).wait(1).to({graphics:mask_graphics_20,x:275,y:70.6}).wait(1).to({graphics:mask_graphics_21,x:275,y:93.9}).wait(1).to({graphics:mask_graphics_22,x:275,y:153.8}).wait(1).to({graphics:mask_graphics_23,x:275,y:272.5}).wait(1).to({graphics:mask_graphics_24,x:275,y:306.7}).wait(1).to({graphics:mask_graphics_25,x:275,y:323.2}).wait(1).to({graphics:mask_graphics_26,x:275,y:332.4}).wait(1).to({graphics:mask_graphics_27,x:275,y:337.6}).wait(1).to({graphics:mask_graphics_28,x:275,y:340.2}).wait(1).to({graphics:mask_graphics_29,x:275,y:341}).wait(1).to({graphics:mask_graphics_30,x:275,y:341}).wait(1).to({graphics:mask_graphics_31,x:275,y:319.7}).wait(1).to({graphics:mask_graphics_32,x:275,y:298.4}).wait(1).to({graphics:mask_graphics_33,x:275,y:277}).wait(1).to({graphics:mask_graphics_34,x:275,y:255.7}).wait(1).to({graphics:mask_graphics_35,x:275,y:234.4}).wait(1).to({graphics:mask_graphics_36,x:275,y:213.1}).wait(1).to({graphics:mask_graphics_37,x:275,y:191.7}).wait(1).to({graphics:mask_graphics_38,x:275,y:170.4}).wait(1).to({graphics:mask_graphics_39,x:275,y:149.1}).wait(1).to({graphics:mask_graphics_40,x:275,y:127.8}).wait(1).to({graphics:mask_graphics_41,x:275,y:106.5}).wait(1).to({graphics:mask_graphics_42,x:275,y:85.1}).wait(1).to({graphics:mask_graphics_43,x:275,y:63.8}).wait(1).to({graphics:mask_graphics_44,x:275,y:42.5}).wait(1).to({graphics:mask_graphics_45,x:256.7,y:42.5}).wait(1).to({graphics:mask_graphics_46,x:238.4,y:42.5}).wait(1).to({graphics:mask_graphics_47,x:220.1,y:42.5}).wait(1).to({graphics:mask_graphics_48,x:201.8,y:42.5}).wait(1).to({graphics:mask_graphics_49,x:183.5,y:42.5}).wait(1).to({graphics:mask_graphics_50,x:165.2,y:42.5}).wait(1).to({graphics:mask_graphics_51,x:146.9,y:42.5}).wait(1).to({graphics:mask_graphics_52,x:128.6,y:42.5}).wait(1).to({graphics:mask_graphics_53,x:110.3,y:42.5}).wait(1).to({graphics:mask_graphics_54,x:92,y:42.5}).wait(1).to({graphics:mask_graphics_55,x:73.7,y:42.5}).wait(1).to({graphics:mask_graphics_56,x:55.4,y:42.5}).wait(1).to({graphics:mask_graphics_57,x:37.1,y:42.5}).wait(1).to({graphics:mask_graphics_58,x:18.8,y:42.5}).wait(1).to({graphics:mask_graphics_59,x:0.5,y:42.5}).wait(1));

	// Layer 2
	this.instance = new lib.math_lib_content();
	this.instance.setTransform(278.1,176.7,1,1,0,0,0,253.1,159.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({y:176.5},0).wait(1).to({y:175.8},0).wait(1).to({y:174.5},0).wait(1).to({x:278.2,y:172.2},0).wait(1).to({x:278.4,y:168.4},0).wait(1).to({x:278.7,y:161.4},0).wait(1).to({x:279.6,y:141.3},0).wait(1).to({x:281.3,y:101.1},0).wait(1).to({x:281.6,y:92.2},0).wait(1).to({x:281.8,y:87.7},0).wait(1).to({x:281.9,y:85.2},0).wait(1).to({x:282,y:83.7},0).wait(1).to({y:83},0).wait(1).to({x:282.1,y:82.7},0).wait(2).to({x:282,y:83},0).wait(1).to({y:83.6},0).wait(1).to({y:85},0).wait(1).to({x:281.9,y:87.3},0).wait(1).to({x:281.7,y:91.1},0).wait(1).to({x:281.4,y:98},0).wait(1).to({x:280.6,y:116.1},0).wait(1).to({x:278.9,y:156.5},0).wait(1).to({x:278.5,y:166.6},0).wait(1).to({x:278.3,y:171.4},0).wait(1).to({x:278.2,y:174.1},0).wait(1).to({x:278.1,y:175.7},0).wait(1).to({y:176.5},0).wait(1).to({y:176.7},0).wait(16));

	// Layer 1
	this.instance_1 = new lib.orange_pane();
	this.instance_1.setTransform(0.5,42.5,0.043,1,0,0,0,11.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.09,x:1.1},0).wait(1).to({scaleX:0.25,x:2.8},0).wait(1).to({scaleX:0.55,x:6.3},0).wait(1).to({scaleX:1.05,x:12.1},0).wait(1).to({scaleX:1.88,x:21.6},0).wait(1).to({scaleX:3.27,x:37.6},0).wait(1).to({scaleX:6.13,x:70.5},0).wait(1).to({scaleX:16.03,x:184.3},0).wait(1).to({scaleX:20.19,x:232.2},0).wait(1).to({scaleX:21.87,x:251.5},0).wait(1).to({scaleX:22.8,x:262.3},0).wait(1).to({scaleX:23.36,x:268.7},0).wait(1).to({scaleX:23.69,x:272.5},0).wait(1).to({scaleX:23.86,x:274.4},0).wait(1).to({scaleX:23.91,x:275},0).wait(1).to({scaleY:1.02,y:43.2},0).wait(1).to({scaleY:1.09,y:45.5},0).wait(1).to({scaleY:1.23,y:50},0).wait(1).to({scaleY:1.46,y:57.7},0).wait(1).to({scaleY:1.86,y:70.6},0).wait(1).to({scaleY:2.57,y:94},0).wait(1).to({scaleY:4.4,y:153.8},0).wait(1).to({scaleY:8.02,y:272.5},0).wait(1).to({scaleY:9.07,y:306.8},0).wait(1).to({scaleY:9.57,y:323.2},0).wait(1).to({scaleY:9.86,y:332.5},0).wait(1).to({scaleY:10.02,y:337.7},0).wait(1).to({scaleY:10.1,y:340.3},0).wait(1).to({scaleY:10.12,y:341},0).wait(1).to({scaleY:1,y:42.5},14).to({scaleX:0.04,x:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,85);


(lib.drawLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		exportRoot.removeChild(exportRoot.alertLib);
	}
	this.frame_33 = function() {
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
	this.content = new lib.search_lib_content();
	this.content.setTransform(274,178.7,1,1,0,0,0,253.1,159.8);

	this.content.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.content).wait(34));

	// Layer 1
	this.instance = new lib.red_bg();
	this.instance.setTransform(2.5,0.5,0.01,1,0,0,0,234.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:47.8,regY:44.5,scaleX:0.05,y:44.5},0).wait(1).to({scaleX:0.22,x:10.5},0).wait(1).to({scaleX:0.64,x:30.7},0).wait(1).to({scaleX:2.37,x:113.2},0).wait(1).to({scaleX:5.04,x:240.8},0).wait(1).to({scaleX:5.52,x:264},0).wait(1).to({scaleX:5.7,x:272.6},0).wait(1).to({regX:234.4,regY:0.5,scaleX:5.75,x:1347.5,y:0.5},0).wait(1).to({regX:47.8,regY:44.5,scaleY:1.02,x:274.8,y:45.6},0).wait(1).to({scaleY:1.11,y:49.3},0).wait(1).to({scaleY:1.27,y:56.7},0).wait(1).to({scaleY:1.57,y:70},0).wait(1).to({scaleY:2.11,y:94.1},0).wait(1).to({scaleY:3.34,y:148.5},0).wait(1).to({scaleY:7.58,y:337.1},0).wait(1).to({scaleY:8.79,y:391.1},0).wait(1).to({scaleY:9.28,y:412.8},0).wait(1).to({scaleY:9.52,y:423.6},0).wait(1).to({scaleY:9.63,y:428.6},0).wait(1).to({regX:234.4,regY:0.5,scaleY:9.66,x:1347.5,y:4.9},0).wait(1).to({scaleY:1,y:0.5},7).to({scaleX:0.01,x:2.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,89);


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
		
		
		var alertLib = this.alertLib;
		var Button = function (name, mc) {
			this.name = name;
			this.mc = mc;
		}
		var btns = new Array(
			new Button("draw", this.library.pencil_btn),
			new Button("func", this.library.func_btn),
			new Button("search", this.library.search_btn),
		
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
			var name = getButtonName(event.currentTarget);
			event.currentTarget.removeEventListener("mouseover", btnOver);
			event.currentTarget.removeEventListener("rollout", btnOut);
			if (focusBtn !== null) {
				focusBtn.addEventListener("mouseover", btnOver);
				focusBtn.addEventListener("rollout", btnOut);
			}
			focusBtn = event.currentTarget;
			if (focusLib !== null) {
				console.log("removing focus");
				focusLib.play();
			}
			var libX = 1057;
			var libY = 0;
			switch (name) {
				case "draw":
					var myMC = new lib.drawLib();
					myMC.x = libX;
					myMC.y = 59 + libY;
					console.log('myMC: ' + myMC); // myMC Should not be null
					stage.addChild(myMC);
					focusLib = myMC;
					break;
				case "func":
					var myMC = new lib.funcLib();
					myMC.x = libX - 1;
					myMC.y = 149 + libY;
					console.log('myMC: ' + myMC); // myMC Should not be null
					stage.addChild(myMC);
					focusLib = myMC;
					break;
				case "search":
					var myMC = new lib.searchLib();
					myMC.x = libX - 1;
					myMC.y = 234 + libY;
					console.log('myMC: ' + myMC); // myMC Should not be null
					stage.addChild(myMC);
					focusLib = myMC;
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
		
		
		
		var TextBox = function (defaultValue, optional, x, y, size, width) {
			this.defaultValue = defaultValue;
			this.optional = optional;
		
			var btn = document.createElement("input");
			btn.style.position = "absolute";
			btn.style.top = "" + y + "px";
			btn.style.left = "" + x + "px";
			btn.style.fontSize = "" + size + "px";
			btn.placeholder = defaultValue;
			btn.style.width = "" + width + "px";
			document.body.appendChild(btn);
			if (!optional) {
				btn.style.background = "rgb(232, 110, 110)";
			}
			this.btn = btn;
		}
		
			function generateInput(block) {
				var yShift = 0;
				for (var j = 0; j < block.params.length; j++) {
					var param = block.params[j];
					console.log("PARAM CHECK");
					if (param[2] === "string") {
						console.log("make TXTBOX");
						var txtBox = new TextBox(param[0], param[1], 1140, 306 + yShift, 38, 390);
						block.inputs[j] = txtBox;
						yShift += 58;
		
					}
				}
				tempBlocks = new Array();
				window.addEventListener("keydown", handleNonOptionalChecks);
		
			}
		this.generateInput = generateInput;
		
		
		function handleNonOptionalChecks(k) {
			for (var i = 0; i < funcBlocks.length; i++) {
				if(funcBlocks[i].focus){
					for(var j=0; j<funcBlocks[i].inputs.length; j++){
						var txtBox = funcBlocks[i].inputs[j];
						if(txtBox.btn.value !==""){
							funcBlocks[i].vars[j] = txtBox.btn.value;
						}
						if (!txtBox.optional) {
							if (txtBox.btn.value == "") {
								txtBox.btn.style.background = "rgb(232, 110, 110)";
							} else {
								txtBox.btn.style.background = "white";
							}
						}
					}
				}
			}
			
			updateCode();
		}
		
		var funcBlocks = new Array();
		//var codeBinder = new Array();
		function addFunc(codeName) {
			var func = funcMap.get(codeName);
			var block = new func();
			funcBlocks.push(block);
			generateInput(block);
			updateCode();
		}
		this.addFunc = addFunc;
		
		
		function updateCode() {
			var output = "";
			for (var i = 0; i < funcBlocks.length; i++) {
				if (funcBlocks[i].root) {
					output += compile(funcBlocks[i]);
				}
			}
			btn.value = output;
		}
		
		function compile(func) {
			var output = func.codeBegin;
			var vars = func.vars;
			var trim = false;
			console.log(vars);
			for (var i = 0; i < vars.length; i++) {
				if (typeof vars[i] == "object") {
					//TODO: recursively unfold nested blocks
				} else if (vars[i] !== null) {
					trim = true;
					if(func.params[i][2] === "string"){
						output += "\"" + vars[i] + "\",";
					}else{
						output += "" + vars[i] + ",";
					}
				}
			}
			if (trim) {
				output = output.substring(0, output.length - 1);
			}
			output += func.codeEnd;
			return output;
		}
		
		//CODE BLOCKS
		var searchLibs = new Array(WolframAlpha);
		var funcMap = new Map();
		
		var WolframAlpha = function () {
			this.name = "WolframAlpha";
			this.desc = "Sends query to Wolfram|Alpha and imports the output.";
			this.type = "search";
			this.params = [
				["query", false, "string"],
				["format", true, "string"]
			];
			this.codeBegin = "WolframAlpha[";
			this.codeEnd = "]";
			this.vars = [null, null];
			this.root = true;
			this.inputs = [null,null];
			this.focus = true;
		}
		funcMap.set("wolframAlpha", WolframAlpha);
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

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A73A3A").ss(1,1,1).p("A+PjlMA8fAAAIAAHLMg8fAAAg");
	this.shape.setTransform(1328.7,325.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7A7A7").ss(1,1,1).p("A+jjlMA9HAAAIAAHLMg9HAAAg");
	this.shape_1.setTransform(1328.1,383.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFA2A2").s().p("A+PDlIAAnKMA8fAAAIAAHKg");
	this.shape_2.setTransform(1328.7,325.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("A+jDmIAAnKMA9HAAAIAAHKg");
	this.shape_3.setTransform(1328.1,383.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.func_title},{t:this.func_desc}]}).wait(1));

	// Layer 6
	this.slider = new lib.gray_slider();
	this.slider.setTransform(1586.3,279.1,1,1.096,0,0,0,5.3,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#949494").s().p("EgqLARBMAAAgiCMBUXAAAMAAAAiCg");
	this.shape_4.setTransform(1330.3,169.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.slider}]}).wait(1));

	// Layer 2
	this.library = new lib.library();
	this.library.setTransform(1287.6,460.1,1,1,0,0,0,312.4,400.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("EhV9A+gMAAAh8+MCYsAAAMAAAB89ITPAAIAAABg");
	this.shape_5.setTransform(548.2,460);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.library}]}).wait(1));

	// Layer 1
	this.export_btn = new lib.export_btn();
	this.export_btn.setTransform(509.2,58.1,1,1,0,0,0,130.1,58.1);

	this.save_btn = new lib.save_btn();
	this.save_btn.setTransform(348.6,30.5,1,1,0,0,0,89.5,30.5);

	this.load_btn = new lib.load_btn();
	this.load_btn.setTransform(213.5,29.5,1,1,0,0,0,75.5,29.5);

	this.new_btn = new lib.newBtn();
	this.new_btn.setTransform(68.5,29.5,1,1,0,0,0,69.5,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2D2D").s().p("AkSJEIAAyHMBpKAAAIAASHgEhk3AJEIAAo7MAooAAAIAAAUISxAAIAAIng");
	this.shape_6.setTransform(644.7,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.new_btn},{t:this.load_btn},{t:this.save_btn},{t:this.export_btn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(798,430,1602.4,862.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;