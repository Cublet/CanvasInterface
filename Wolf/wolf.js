(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 1600,
	height: 860,
	fps: 45,
	color: "#EFEFEF",
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


(lib.rotHype = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AGtD2QgCgFAAgJQAAggAygfQAyggAAAtQAAAIgfAiQghAigLAAQgQAAgHgMgAFPDsQgDgFAAgJQAAgiA3gaQA3gbAAAqQAAAKhSA9QgUAAgFgMgADXDsQgDgFAAgJQAAggBBgYQBBgZAAApQAAAIhnA6QgSAAgGgMgAoWDsQgCgFAAgJQAAgGASgTQATgTAUgOQA6goAAAwQAAAIgnAiQgmAigLAAQgSAAgHgMgAgfDkIAAgQQAAgYA3gdQA6geAAArQAAAIgoAgQgoAfgIAAQgUAAgFgPgAmjDlIgCgPQAAgcA8gfQA8ggAAAsQAAAGgtAjQgtAjgFAAQgRAAgGgOgABaDiQgDgFAAgJQAAgIAVgSQAVgRAagNQBDgiAAAtQAAALg0AfQgyAdgIAAQgRAAgFgMgAjLDiQgDgFAAgJQAAgHAUgSQATgSAYgNQA+giAAAtQAAAMgqAeQgpAdgOAAQgUAAgFgMgAkvDiQgDgFAAgJQAAgcA6gXQA5gYAAAoQAAACgqAeQgqAdgDAAQgUAAgFgMgAIeDQIAAgZQAAgZAJgMQAJgLAMAFQAeALAAA4QAAAJgFAHQgHAKgPAAQgbAAgGgZgAp+DJQgDgFAAgJQAAggBEgKQBDgLAAAhQAAAPhuAfQgRAAgFgMgAI6B0QgSggAAADQAAgpAtAaQAtAbAAAYQAAALgIAHQgHAHgPAAQgTAAgXgggAp3BHQAAgzA3AkQAUAMASATQARARAAAHQAAAKgFAHQgHAKgNAAQglAAgwhDgAI/AaIgXgrQAAg7AvAzQAwAwAAAWQAAAKgHAJQgHAJgLAAQgVAAgagvgApWAVQgLgSgHgRQAAgwArAiQAqAhAAAYQAAAJgFAIQgHAMgNAAQgTAAgXglgApihKQgkgkAAAEQAAguA8AjQAWANATASQATASAAAHQAAAaghAAQgLAAgogngAI8hVIgUgoQAAgVAGgHIguASQgVAAgGgMQgDgFAAgJQAAghBGgNQBGgNAAAiQAAAGg4AXQAWACA2BUQAAAOgMAHQgIAFgHAAQgTAAgYgogApFihQgEgagBgXQAAgaAJgGQAJgFAMANQAXAZAGAoQAFgHAMgMQAWgUAYgPQBEgpAAAyQAAAHgwAmQgwAngOAAQgOAAgGgIQgDAcgWAAQgVAAgJgzgACEibIAAgQQAAgJARgSQARgTAVgNQA3gkAAAvQAAAUhQA7QgYAAgGgPgAkviaIgDgPQAAgcAygpQAygqAAAyQAAAIgeAoQggAqgNAAQgQAAgGgOgAmdiYQgDgFAAgJQAAgHATgSQAVgTAWgOQA/gnAAAvQAAAGgvAkQgtAigDAAQgVAAgGgMgADridQgDgEAAgKIBGguQBGgkAAAvQAAAMgdAWQgjAbgkAAQgdAAgIgMgAjdigIAAgQQAAgXAygkQAyglAAAwQAAAJgjAjQgiAjgGAAQgUAAgFgPgAGPiiQgCgFAAgJQAAgeAtgcQAtgcAAArQAAAKgbAeQgbAdgIAAQgTAAgHgMgAAEiiQgCgFAAgJQAAgXA3gaQA3gZAAAnQAAASgZAVQgcAWgdAAQgTAAgHgMgAhtiiQgCgFAAgJQAAgjAygZQAygYAAAnQAAAHgeAgQgeAggNAAQgSAAgHgMg");
	this.shape.setTransform(26.3,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AHnDxIAAgTQAAgeAmgmQAlglAAA3QAAAMgRAjQgTAogOAAQgUAAgFgSgAiUD3QgDgFAAgJQAAgFATgSQAWgTAVgNQA/glAAAvQAAAIgnAfQgpAggSAAQgSAAgGgMgAENDvIgCgPQAAgGARgUQAQgUAUgOIAOgKIAiAAQAEAHAAAOQAAALgeAhQgfAjgTAAQgQAAgHgPgACKDsIgBgTQAAgjAygSQAygTAAAmQAAAJhLA+QgUAAgEgSgAF3DtQgDgFAAgJQAAgJATgUQATgUAWgPIAIgFIAyAAQACAFAAAJQAAAOhcBDQgUAAgFgMgAAPDoQgDgFAAgJQAAgHATgRQATgRAWgMQAPgIALgDIAYAAQAKAFAAATQAAAKgoAcQgnAcgLAAQgVAAgGgMgAkDDlIgCgPQAbgdAagSQANgKALgDIAUAAQAIAFAAATQAAAUgWAWQgZAYghAAQgRAAgGgPgAnoDjQgDgFAAgJQAAgXA6gbQANgHAKgCQAOgEAIAEQAMAFAAATQAAAHglAbQgmAbgKAAQgVAAgGgMgAplDZQgDgFAAgJQAAgJAYgQIARgJQgigCgcgUQgYgSAAgKQAAgqA8AZQAVAJAVAOQANAJAEAFIAAAOIgBACIADgBIBMAAQADAFAAAJQAAAIg1AaQg2AbgUAAQgUAAgFgMgAldDUQgCgFAAgJQAAgbApgRIBCAAQADAFAAAJQAAAGgmAZQglAZgIAAQgSAAgHgMgAJDCmQgqguAAADQAAgYASgCQAQgBAXAQIASAMQgLgPgTgeQgjg6AAACQAAgbARABQANABAXAUQA0A1AAAqQAAAJgFAHQgHAJgMABQAYAYAAAaQAAAKgHAHQgJAIgOAAIgrgwgApyA2QgKgMAAgKQAAgiA0ASIALAFIAAA5QgkgCgRgWgAJBgdQgegjAAgHQAAg3A5AwQAUAQAUAXQASAVAAADQAAAJgFAGQgHAJgPAAQgYAAgigmgApegkQgMgSgIgQQAAgzAwAqIAFAGIAABHQgPgIgSgagApkh/QgMgQgHgNQAAgpAvAbIASALIAAgGQAYgjAXgXQAwguAAA2QAAANgTAcQgOAVgQAJIg1AAIAAAwQgUgGgTgZgAIPiRQAAgeBBAFQBBAEAAAhQAAAKgHAJQgIAKgKAAQhpAAAAgpgADSifIgDgPQAAgjAygbQAygbAAArQAAAChLBKQgRAAgFgPgAlnicQgBgEgBgGQgfAWgaAAQgUAAgFgMQgDgFAAgJQAAgGATgRQAUgSAVgNQA7glABAvIAUgUQA3gxAAA1QAAAHgjAnQgkAogJAAQgVAAgHgMgAg2ihQgCgGAAgIQAAgjA1gaQAygaAAAqQAAAFgmAhQgjAhgFAAQgQAAgHgMgAj5ihQgCgGAAgIQAAgYA0ggQA1ghAAAuQAAAMgbAbQgdAegWAAQgSAAgHgMgAG9imQgDgFAAgJQAAgaAygcQAygcAAAqQAAAKggAcQggAcgJAAQgTAAgFgMgABVimIgDgOIA3g3QA3grAAA1QAAALgUAbQgZAhgZAAQgeAAgHgMgAFZirQgDgFAAgJIAtguQAtgjAAAuQAAALgSAXQgUAbgTAAQgYAAgGgMgAijirQgDgFAAgJQBphiAABEQAAALgUAUQgZAZgcAAQgWAAgHgMg");
	this.shape_1.setTransform(26.8,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-2.7,129.5,51.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-39.5,-2.8,132.5,51.8), rect, rect, rect, rect, rect, rect, rect];


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


(lib.outputColor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AQ3DHIAAmOIHMAAIAAGOgA4CDHIAAmOIHMAAIAAGOg");
	this.shape.setTransform(154,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003973").s().p("AQ3DHIAAmOIHMAAIAAGOgA4CDHIAAmOIHMAAIAAGOg");
	this.shape_1.setTransform(154,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#730472").s().p("AQ3DHIAAmOIHMAAIAAGOgA4CDHIAAmOIHMAAIAAGOg");
	this.shape_2.setTransform(154,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38D00").s().p("AQ3DHIAAmOIHMAAIAAGOgA4CDHIAAmOIHMAAIAAGOg");
	this.shape_3.setTransform(154,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,308,40);
p.frameBounds = [rect, rect, rect, rect];


(lib.orange_slider = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#3B1E06").s().p("AheGPIAAseIC8AAIAAMeg");
	this.shape.setTransform(9.5,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AheGPIAAseIC8AAIAAMeg");
	this.shape_1.setTransform(9.5,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3B2506").ss(1,1,1).p("EgBZgpoICzAAMAAABTRIizAAg");
	this.shape_2.setTransform(9,266.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#642F00").s().p("EgBZAppMAAAhTRICzAAMAAABTRg");
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


(lib.orange_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C37703").s().p("AndG9IAAt5IO7AAIAAN5g");
	this.shape.setTransform(47.8,44.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,95.7,89);
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


(lib.inputMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003973").s().p("Ah8CXIAAktID5AAIAAEtg");
	this.shape.setTransform(12.5,15.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,25,30.2);
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
	this.frame_12 = function() {
		this.parent.block.visible = false;
		this.parent.title.visible = false;
		this.parent.removeInputs();
	}
	this.frame_17 = function() {
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(5).call(this.frame_17).wait(1));

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
	this.shape_6.graphics.f("#EFEFEF").s().p("A9wEGIgEgBIgBgHIAAgHIgFgIIgDgHIgFgIQgEgEgFgCQgigTgigFQgCgMgGgLIgKgWQgNgOgQgJQgagOgHgXIABgIIABgHIAAgHIAAgIIACgHIAFgQIADgOIAJgQIAIgMIABgIIABgIIABgHIAAgHQACgIACgIQABgLAEgLIAIgWQAQgNAJgRQALgRAOgNIADgIIAFgIIACgHIAZgIIAFgCIANgLIgDAGIgEAIIgDAHIgDAIIgCAHIAAAXIAAAPIAAAPIAAAHIACAIIADAHIACAIIAIAHIAIAHIAKAIIANAGIAEAEIAIAIIAHAHIAHAHIAKAIQAnAOApgFQAQgCAPgHIAEgFIAJgIIAHgHIAEgIIADgHIADgHIACgIIAAgHIAAgIIAAgHIAHAFIAKAHIAQAEQARACASAAQAMgBAMgCIAIgGIAKgHIARAAIAPAIIAIAHIAIAHIAKAIIAOAEIAPAEIAQgDIAJgDIAFgCIAFgFIAJgIIAHgHIAEgIIAEgHIAEgHIAJgIIAIgHIADgIIAFgIIACgHIADgHIAAgIIAAgHIgBgIIgCgHIBigDIAAADIAAAEIACAIIAEAHQAFAIAHAHIAPAPIAKAIQAqAPAwgGQAPgCAOgHIAGgFIAJgIIAIgHIAHgHIAEgIIADgIIADgHIADgHIAAgPIAAgeIAAgJQCWASCYgiIANACQALAIAMAEQBRAdBYgRQAigGAbgUQAOAAAOgBQADALAIAJQAVAYAYASIAjAaQBgAQBjAFQBKAEBIAXIAOgDIAKgDIAFgCIAGgCIAEAHIAEAHIAEAIIAIAIIAHAHIAFAIIADADIgGACIgEACIgIAFIgHAIIgIAHIgFAIIgNAEIgPADIgKADIgEACIgQANIgVAVIgLAOIgDAIIgCAHIAAAXIAAAPIAAAHIAAAIIhEAEQgSACgQAJIgIAHQgFADgFAAIgFAAIgGgIIgGgHQgFgNgLgFQiRhBigA3IgHAFIgIAIQgEADgEACQgEACgFAAIgNgFIgKgDIgCgCQgUgZghgCQgxgDguAXIgOAPIgIAHIgHAIIgDAHIgDAIIgCAHIAAAPIAAAPIAAAIIAAAHIAAAFIgMgBIgQgBIgPACIgKADIgKAFIgCABIAAg4IAAgmIgCgHIgDgIIgDgHIgEgIQgJgNgMgJQgSgOgVgBQgSABgRgDQh1gUhTBIIgEAHIgEAIIgGAHIgGAIIgDAHIgDAIIgCAHIAAAIIgBAHIgCAFQg0gFg0AAIgQgEQgRgCgSgBIgRAAIgDgPIgFgPIgFgPIgHgPIgCgIIAAgHIgFgIIgDgHIgDgIIgEgIIgDgHIgIgIQgLgMgQgIQgSgJgTACIgBABIgPACIgKACIgJAFIgIAGIgIAHIgHAHIgHAIIgDAHIgDAIIgCAHIAAAXIAAAWIAAAPIAAAPQgFAAgFgBIgNgDIgOgDIgPACIgKADIgGACIgHAFIgHAIIgIAHIgFAIIgCAHIgCAIIgBAHIAAAIIAAAHIADAIIACAHIACAIIAHAHIAGAIIAAAAQhCgihSAfQgOAKgLAMIgXAYIgGgDgAWWDDIAAgDIgBgIIgBgHIgFgIIgDgHIgFgIIgHgHIgHgIIgKgHIgQgIIgHgIQgVgYgfgNQgbgMgfAFIAAABQgIABgHAAIgPAFIgKAIIgUAEIgOAEIgQAEIgJAIIgJAHIgGAIIgBABIgOgEQg7gRg5AUIgHAHQgfAAgegBIAAgBIgKgNQgNgPgTgDQgSgDgRgBIAAABIgOACQgGAAgEACIgLAFIgHAHQgfAJgZAUIghAbIgKAKIgOgNQgrgmg5gFIgDgHIgFgIQgDgEgEgCQgMgIgNgEQgNgDgMgBIgPADIgPAEIgRAPIgHAIIgEAHIgFAFIgLgBQgGAAgEgCIgGgEIgIgIIgKgHIgPgIQgUgUgdgHQhygYhmAGIAAgWIAAgPIgBgIIgBgFIgFgIIgDgHIgFgIIgHgHIgHgIIgJgIIgEgHIgBgHIgDgIIgEgHIgEgIIgHgEIABgEIAAgHIAAgHIgBgIIgCgHIgEgIQARgGASgFIAZgGQAUgKAQgOQANgKALgMQAIgKAEgMIAIgIIAFgHIAFgHIACgIIACgFQBzgJBsgGIAIAHIAKAIQBPAYBRgJIAJAEIgDAEIgEAHIgCAIIgCAHIAAAIIAAAHIAAAIIAAAHIACAIIACAHIADAIIAIAHIAHAHIAKAIIAPAEIAPAEIAPgDIALgCIAJAAIAaAEIAlADIAmAkQA4AxBJgWIAHgGIAKgHIAIgHIAFgFIAEAHIAEAHIAEAIIAIAIIAIAGIAMAJIAIAHIACAHIAFAIIADAHIAFAHIAHAHIAHAHIAIAHIAKAIIAQAEIAOAEIAPgDIAKgDIAFgCIAFgFIAPgPIAKgIIAHgFQAVAIAWADQAuAHAfgcIAFgIIADgHIAEgIIABgHIAPgMIARgOIANgLIAIAHIAHAHIAKAIQAdALAfgDQAsgFAigcIAEgIIAEgHIAEgHIABgIIABgIIAAgHIAAgHQA/AEA8gOIAIgGIAJgHIAIgHIADgIIAEgIIADgHIACgHIAAgVQAYgEAYgIIAcAAQBrA0B2ggQAGAAAGACIAAADQACAEgBAEIABAWIAAAXIADAHIAGAWQAFALgBAMIAEAIIAJAWIAJAXIABAHIAFAPIAHAXIAHAFIgMAHQgZAKgZAIIgPAMQgMAJgDAOQgEALABAMIABAeIAAAtQgRAOgQAQQgQASgTAOQgxgYgzATIgKAIIkgACQgrgagvgIg");
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

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("An1MYIgKgIIgGgHIgEgHIAAgIIgDgHIgEgIIgCgHIgBgIIAAgPIAAgHQABgEADgDQACgFAEgDIAKgIIARgEIABgBIARAFIAKAIIAFAHIAHAPIAGAPIACAIIAAAHIAAAIIAAAHIgCAIIgDAHIgFAHIgKAIIgRAFIgSgFgEggXAL6IgKgIIgHgHIgDgHIAAgIIAAgHIACgIIAEgHIAHgIIAHgFIAFgCIAMgCIAAgBIAKAAIASAFIAJAIIAGAHIACAIIACAHIAAAIIgCAHIgFAIIgFAGIgHAGIgFACIgNADIgKAAIgRgFgAxNLmIgKgIIgHgHIgDgHIAAgIIABgHIACgIIADgHIAHgIIAHgFIAFgCIAMgCIABgBIARAFIAJAIIAGAHIADAIIABAHQABAEgBADIgBAIIgFAIIgGAGIgHAGIgFACIgMADIgSgFgABNLcIgJgIIgHgHIgEgHIAAgIIABgHIACgIIADgHIAHgIIARgPIASgEIAAgBIARAFIAKAIIAFAHIADAIIACAHIAAAIIgDAHQgEAIgGAGQgIAJgJAHIgRAFIgSgFgAfOKqIgKgIIgIgHIgCgIIAAgHIAAgHIAAgPQAFgIAGgFQAWgTAbgLIAFgCIAMgCIAAgBIAKAAIASAFIAJAIIAGAHIACAIIACAHIAAAHIgCAIQgFAIgHAEQgTAOgVAMIgIAHIgHAFIgFACIgNADIgRgFgAKwKqIgKgIIgHgHIgEgHIAAgIIABgHIACgIIADgHIAHgIIAIgFIAFgCIAMgCIAAgBIASAFIAJAIIAGAHIACAIIACAHQABAEgBADIgCAIIgFAIIgGAGIgGAGIgGACIgMADIgRgFgAU6KMIgKgIQgEgDgDgFQgCgDgBgDIAAgIIAAgHIACgIQABgEADgDQACgEAEgEIAIgFIAFgCIAMgCIAAgBIA8AAIASAFIAJAIIAGAHIACAIIACAHIAAAHIgCAIIgFAIIgFAGIgHAGIgFABIhJAEIgRgFgEAlUAF0IgKgIIgHgIIgDgGIAAgIIABgHIABgIIAEgHIAHgIIAHgFIAFgCIAMgCIAAgBIASAFIAJAIIAGAHIACAIIACAHIAAAHIgCAIIgFAIIgFAGIgHAGIgFACIgNADIgRgFgEgl/AFWIgKgIIgIgHIgCgIIAAgHIAAgPIAAgIIAAgBIgDgBIgRgFIgKgIQgEgDgDgFQgCgDgBgEIAAgHIAAgHIACgIQABgEADgDQACgEAFgEIAHgFIAFgCIAMgCIAAgBIAUAAIASAFIAJAIIAIAHIAOAQQADADABADIACAIIACAHQAAAEgCAEIgCAGIACAGIACAIIABAHIAAAIIgDAIIgDAHIgEAIIgKAHIgSAFIgRgFgEAlogBCIgKgIIgHgIIgDgHIAAgHIABgIIABgHIAEgHIAHgIIAHgFIAFgCIAMgCIAAgBIAeAAIASAFIAJAIIAGAHIACAHIACAIIAAAHIgCAIIgFAHIgFAHIgHAGIgFACQgGACgHAAIgeABIgRgFgEgjfgGqIgKgIIgHgIIgDgHIAAgHIAAgIIACgHIAEgHIAHgIIAHgFIAFgCIAMgCIAAgBIAUAAIASAFIAJAIIAGAHIACAHIACAIIAAAHIgCAIIgFAHIgFAHIgHAGIgFACQgGACgHAAIgUABIgRgFgAJfnIIgJgIIgIgHQgEgLABgMIAAglQgBgMAEgLIAFgHIAHgIIAKgFIANgBIAAgBIARAFIAKAIIAFAHIAIAAIASAFIAJAIIAGAHIACAHIACAIIABAHIAAAIIgDAHIgDAIIgEAHIgKAIIgSAFIgFgBIgPANIgIAEQgGADgGABIgSgFgEAhkgHcIgKgIQgEgDgDgFIgDgHIAAgHIAAgIIACgHIAEgHIAHgIIAHgFIAFgCIAMgCIAAgBIASAFIAJAIIAGAHIACAHIACAIIAAAHIgCAIIgFAHIgFAHIgHAGIgFACIgNADIgRgFgAR8ncIgogKIgKgIQgEgDgDgFIgDgHIAAgHIAAgIIACgHIADgHIAHgIIAIgFIAFgCIAMgCIAAgBIAUAAIAKAAIAKAAIASAFIAJAIIAGAHIACAHIACAIIABAHIAAAIIgDAHIgDAIIgEAHIgKAIIgSAFIgRgFgA6lnwIgKgIIgIgHIgCgIIgDgHIgFgIIgBgHIgBgIIgDgBIgKgBIgRgFIgKgIIgIgHIgBgIIgBgHIAAgIIABgPIABgPIAGgHIAHgIIAKgFIAMgBIAAgBIAUAAIARAGQAPAGAMAJQAJAGAHAIIAFAPIAIAWIAMAmIADAHIgDAIIgCAHIgDAIIgKAHIgHAEQgGADgHAAIgKABIgRgFgAjfodIgSgFIgJgIIgIgHIgCgIIgBgHIAAgPIAAgIIALgOQAOgQAQgOIAJgIQAJgBAIgDIABgBIARAFIAKAIIAFAHIADAHIACAIIAAAHIAAAIIgCAHIgDAIIgFAHIgKAIIgCAHIgDAIIgFAHIgKAIIgRAFIgKAAgAXuo2IgKgIQgEgDgDgFQgCgDgBgEIAAgHIAAgIIACgHIAEgHQACgEAFgEIAHgFIAFgCIAMgCIAAgBIASAFIAJAIIAGAHIACAHIACAIIAAAHIgCAIIgFAHIgFAHIgHAGIgFACIgNADIgRgFgAqLo2IgKgIQgEgDgCgFQgDgDgBgEIAAgHIABgIIACgHQABgEACgCIAEgEIAAgDIAAgPIAEgHIAGgHIAKgIIANgDIAFgHIAHgIIAKgFIAMgBIABgBIARAFIAKAIIAFAHIAEAPIACAeQABALgEALIgEAHQgGAIgJAGQgLAIgNAGIgMACIgUABIgSgFgADFqGIgJgIIgIgHQgEgLAAgMQABgTgBgSQAAgMAEgLIAFgHIAHgIIAFgIIADgHIAFgHIAHgIIAKgFIANgBIAAgBIARAFIAKAIIAFAHIADAHIACAIIAAAHIAAAIIgCAHIgDAHIgFAIIgHAIIgCAHIgBAIIAAAPIAAAHIgCAIIgDAHQgBAEgCADQgEAFgFADIgIAEQgGADgGABIgSgFgAzjqGIgKgIQgEgDgDgFIgDgHIAAgHIABgIIACgHIADgHQADgFAEgDIAHgFIAFgCIAMgCIABgBIARAFIAJAIIAGAHIADAHIABAIQABAEgBADIgBAIIgFAHIgGAHIgHAGIgFACIgMADIgSgFg");
	this.shape_12.setTransform(12.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,43.5,44.5);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-19.3,-3.2,79.6,56), rect, rect=new cjs.Rectangle(-52.2,-13.2,163.5,79.8), rect, rect=new cjs.Rectangle(-137.2,-24.2,293.5,103.8), rect, rect=new cjs.Rectangle(-228.3,-31.2,475.6,115.8), rect, rect=new cjs.Rectangle(-242.3,-39.2,502.6,142.6), rect, rect=new cjs.Rectangle(-245.2,-37.2,502.6,142.8), rect, rect=new cjs.Rectangle(-245.2,-38.3,503.5,137.2), rect, new cjs.Rectangle(-236.8,-55.7,498.6,159.6)];


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
	this.alertInfo = new cjs.Text("Nothing is selected", "35px 'Verdana'", "#444444");
	this.alertInfo.name = "alertInfo";
	this.alertInfo.textAlign = "center";
	this.alertInfo.lineHeight = 37;
	this.alertInfo.lineWidth = 484;
	this.alertInfo.setTransform(276.1,258);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#949494").s().p("EgqLA+qMAAAh9UMBUXAAAMAAAB9Ug");
	this.shape.setTransform(270.1,401.1);

	this.addChild(this.shape,this.alertInfo);
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
		initializeLibrary(funcLib, this, 1);
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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:44.5}).wait(1).to({graphics:mask_graphics_1,x:2.5,y:44.5}).wait(1).to({graphics:mask_graphics_2,x:10.4,y:44.5}).wait(1).to({graphics:mask_graphics_3,x:30.7,y:44.5}).wait(1).to({graphics:mask_graphics_4,x:113.2,y:44.5}).wait(1).to({graphics:mask_graphics_5,x:240.9,y:44.5}).wait(1).to({graphics:mask_graphics_6,x:264.1,y:44.5}).wait(1).to({graphics:mask_graphics_7,x:272.8,y:44.5}).wait(1).to({graphics:mask_graphics_8,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_9,x:274.9,y:45.1}).wait(1).to({graphics:mask_graphics_10,x:274.9,y:47.1}).wait(1).to({graphics:mask_graphics_11,x:274.9,y:51.1}).wait(1).to({graphics:mask_graphics_12,x:274.9,y:58.4}).wait(1).to({graphics:mask_graphics_13,x:274.9,y:71.4}).wait(1).to({graphics:mask_graphics_14,x:274.9,y:101}).wait(1).to({graphics:mask_graphics_15,x:274.9,y:203.5}).wait(1).to({graphics:mask_graphics_16,x:274.9,y:232.9}).wait(1).to({graphics:mask_graphics_17,x:274.9,y:244.6}).wait(1).to({graphics:mask_graphics_18,x:274.9,y:250.5}).wait(1).to({graphics:mask_graphics_19,x:274.9,y:253.2}).wait(1).to({graphics:mask_graphics_20,x:274.9,y:254}).wait(1).to({graphics:mask_graphics_21,x:274.9,y:430}).wait(1).to({graphics:mask_graphics_22,x:274.9,y:374.9}).wait(1).to({graphics:mask_graphics_23,x:274.9,y:319.9}).wait(1).to({graphics:mask_graphics_24,x:274.9,y:264.8}).wait(1).to({graphics:mask_graphics_25,x:274.9,y:209.7}).wait(1).to({graphics:mask_graphics_26,x:274.9,y:154.6}).wait(1).to({graphics:mask_graphics_27,x:274.9,y:99.6}).wait(1).to({graphics:mask_graphics_28,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_29,x:220,y:44.5}).wait(1).to({graphics:mask_graphics_30,x:165.2,y:44.5}).wait(1).to({graphics:mask_graphics_31,x:110.3,y:44.5}).wait(1).to({graphics:mask_graphics_32,x:55.4,y:44.5}).wait(1).to({graphics:mask_graphics_33,x:0.5,y:44.5}).wait(1));

	// Layer 2
	this.instance = new lib.draw_lib_content();
	this.instance.setTransform(276,178.7,1,1,0,0,0,253.1,159.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:178.1},0).wait(1).to({y:176.1},0).wait(1).to({x:275.9,y:172.2},0).wait(1).to({y:164.9},0).wait(1).to({x:275.7,y:151.4},0).wait(1).to({x:275.3,y:116.4},0).wait(1).to({x:274.4,y:32.3},0).wait(1).to({x:274.2,y:10.4},0).wait(1).to({x:274.1,y:0.7},0).wait(1).to({x:274,y:-4.3},0).wait(1).to({y:-6.6},0).wait(1).to({y:-7.3},0).wait(2).to({y:-5.5},0).wait(1).to({x:274.3,y:2.1},0).wait(1).to({x:274.9,y:25.3},0).wait(1).to({x:278,y:141.1},0).wait(1).to({x:278.7,y:169.3},0).wait(1).to({x:278.9,y:177.7},0).wait(1).to({x:279,y:179.7},0).wait(6));

	// Layer 1
	this.instance_1 = new lib.purple_bg();
	this.instance_1.setTransform(2.5,0.5,0.01,1,0,0,0,234.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:47.8,regY:44.5,scaleX:0.05,y:44.5},0).wait(1).to({scaleX:0.22,x:10.5},0).wait(1).to({scaleX:0.64,x:30.7},0).wait(1).to({scaleX:2.37,x:113.2},0).wait(1).to({scaleX:5.04,x:240.8},0).wait(1).to({scaleX:5.52,x:264},0).wait(1).to({scaleX:5.7,x:272.6},0).wait(1).to({regX:234.4,regY:0.5,scaleX:5.75,x:1347.5,y:0.5},0).wait(1).to({regX:47.8,regY:44.5,scaleY:1.02,x:274.8,y:45.1},0).wait(1).to({scaleY:1.11,y:47.2},0).wait(1).to({scaleY:1.27,y:51.2},0).wait(1).to({scaleY:1.57,y:58.4},0).wait(1).to({scaleY:2.11,y:71.5},0).wait(1).to({scaleY:3.34,y:101},0).wait(1).to({scaleY:7.58,y:203.6},0).wait(1).to({scaleY:8.79,y:232.9},0).wait(1).to({scaleY:9.28,y:244.7},0).wait(1).to({scaleY:9.52,y:250.5},0).wait(1).to({scaleY:9.63,y:253.3},0).wait(1).to({regX:234.4,regY:0.5,scaleY:9.66,x:1347.5,y:-171.1},0).wait(1).to({y:4.9},0).to({scaleY:1,y:0.5},7).to({scaleX:0.01,x:2.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,89);
p.frameBounds = [rect, new cjs.Rectangle(0,0,5.1,89), new cjs.Rectangle(0,0,20.9,89), new cjs.Rectangle(0,0,61.4,89), new cjs.Rectangle(0,0,226.5,89), new cjs.Rectangle(0,0,481.9,89), new cjs.Rectangle(0,0,528.4,89), new cjs.Rectangle(0,0,545.5,89), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,-0.5,549.9,91.2), new cjs.Rectangle(0,-2.2,549.9,98.6), new cjs.Rectangle(0,-5.5,549.9,113.5), new cjs.Rectangle(0,-11.6,549.9,140), new cjs.Rectangle(0,-22.6,549.9,188.2), new cjs.Rectangle(0,-47.4,549.9,296.9), new cjs.Rectangle(0,-133.5,549.9,674.2), new cjs.Rectangle(0,-158.2,549.9,782.2), new cjs.Rectangle(0,-168.1,549.9,825.6), new cjs.Rectangle(0,-173,549.9,847.1), new cjs.Rectangle(0,-175.3,549.9,857.2), new cjs.Rectangle(0,-176,549.9,860), new cjs.Rectangle(0,0,549.9,860), new cjs.Rectangle(0,0,549.9,749.9), new cjs.Rectangle(0,0,549.9,639.7), new cjs.Rectangle(0,0,549.9,529.6), new cjs.Rectangle(0,0,549.9,419.4), new cjs.Rectangle(0,0,549.9,309.3), new cjs.Rectangle(0,0,549.9,199.2), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,0,440.1,89), new cjs.Rectangle(0,0,330.3,89), new cjs.Rectangle(0,0,220.6,89), new cjs.Rectangle(0,0,110.8,89), new cjs.Rectangle(0,0,1,89)];


(lib.ContentSearch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var funcLib = exportRoot.getSearchLib();
		initializeLibrary(funcLib, this, 0);
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


(lib.nav_options = function() {
	this.initialize();

	// Layer 1
	this.export_btn = new lib.export_btn();
	this.export_btn.setTransform(510.2,56.1,1,1,0,0,0,130.1,58.1);

	this.save_btn = new lib.save_btn();
	this.save_btn.setTransform(349.6,26.5,1,1,0,0,0,89.5,30.5);

	this.load_btn = new lib.load_btn();
	this.load_btn.setTransform(214.5,27.5,1,1,0,0,0,75.5,29.5);

	this.new_btn = new lib.newBtn();
	this.new_btn.setTransform(69.5,27.5,1,1,0,0,0,69.5,29.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("A8jEiIAAgBMhgcAAAIAApCMD5/AAAIAAJCMgwZAAAIAAABg");
	this.shape.setTransform(801,29);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("Ehm7AEiIAAobMDNBAAAIAAAQQAMgYASggIAYAAIgFAMQgZA6gYAbIAAGmIlAAAIAAA8g");
	this.shape_1.setTransform(946,23);

	this.addChild(this.shape_1,this.shape,this.new_btn,this.load_btn,this.save_btn,this.export_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-6,1604.9,64.1);
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


(lib.inputShape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(239,239,239,0)").s().p("AQ3DHIAAmOIHMAAIAAGOgA4CDHIAAmOIHMAAIAAGOg");
	this.shape.setTransform(154,20);

	this.blockColor = new lib.outputColor();
	this.blockColor.setTransform(154,20,1,1,0,0,0,154,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.blockColor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,308,40);
p.frameBounds = [rect, rect];


(lib.graphics_lib_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var funcLib = exportRoot.getGraphicsLib();
		initializeLibrary(funcLib, this, 2);
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


(lib.func_lib_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var funcLib = exportRoot.getMathLib();
		initializeLibrary(funcLib, this, 0);
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

	this.text_2 = new cjs.Text("Math", "bold 40px 'Verdana'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 42;
	this.text_2.lineWidth = 236;
	this.text_2.setTransform(251.2,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3C1E06").ss(1,1,1).p("AAAj5IAAHz");
	this.shape.setTransform(257.2,269.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#642F00").s().p("AzqD6IAAnzMAnVAAAIAAHzg");
	this.shape_1.setTransform(383.1,269.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B2506").s().p("A0OD6IAAnzMAodAAAIAAHzg");
	this.shape_2.setTransform(127.7,269.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6AD9F").s().p("EgnhAMvIAA5dMBPDAAAIAAZdg");
	this.shape_3.setTransform(253.1,151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.description},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 2
	this.instance = new lib.orange_slider();
	this.instance.setTransform(499.3,518.4,1,0.937,0,0,0,9,266.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C6A0D").s().p("EAgGAlCIAAgBMhH7AAAMAAAhKCMBPrAAAMAAABKCIgcAAMAAAhInIhbAAMAAAAz2IAnAAIAAUyg");
	this.shape_4.setTransform(253.4,531.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.9,0,511.2,768.7);
p.frameBounds = [rect];


(lib.drawLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		if(exportRoot.alertLib.visible){
			exportRoot.alertLib.visible = false;
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


(lib.con_sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.hyper.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
		this.hyper.visible = false;
	}
	this.frame_2 = function() {
		this.stop();
		this.hyper.visible = false;
	}
	this.frame_3 = function() {
		this.stop();
		this.hyper.visible = false;
	}
	this.frame_4 = function() {
		this.stop();
		this.hyper.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer 5
	this.name = new cjs.Text("Image", "25px 'Trebuchet MS'");
	this.name.name = "name";
	this.name.textAlign = "center";
	this.name.lineHeight = 27;
	this.name.lineWidth = 100;
	this.name.setTransform(-1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.name).wait(5));

	// Layer 3
	this.hyper = new lib.rotHype();
	this.hyper.setTransform(-0.7,0.2,1.416,1,0,0,0,25.8,24.2);

	this.timeline.addTween(cjs.Tween.get(this.hyper).wait(5));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3.5,1,1).p("AsXikIYvAAIAAFJI4vAAg");
	this.shape.setTransform(0.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AsXClIAAlJIYvAAIAAFJg");
	this.shape_1.setTransform(0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.7,-26.7,183.4,51.8);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.varLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		if(exportRoot.alertLib.visible){
			exportRoot.alertLib.visible = false;
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


(lib.libBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.block.isVar.visible = false;
		var yScale = 1;
		var hideHitBoxes = true;
		this.depBlocks = new Array();
		this.childBlock = null;
		var destX;
		var destY;
		var possibleLowerBlock;
		var focusedBlock;
		var focusedBlockInputIndex;
		var focusedBlockIndex;
		var shapeLoad = false;
		var inputShape = this.inputShape;
		var outputShape = this.outputShape;
		var myInputs = new Array();
		var myOutputs = new Array();
		function getYScale() {
			return yScale;
		}
		this.getYScale = getYScale;
		
		function removeUpperDeps(otherBlock){
			for(var i=0; i<otherBlock.mc.depBlocks.length; i++){
				if(otherBlock.mc.depBlocks[i][1] == me.func){
					otherBlock.mc.depBlocks.splice(i,1);
				}
			}
		}
		
		function clearParentChildBlock(){
			for(var i=0; i<me.depBlocks.length; i++){
				if(me.depBlocks[i][0] === -1){
					me.depBlocks[i][1].childBlock = null;
				}
			}
		}
		
		function shrink() {
			if (me.x < -360 || (me.x + 400) > 1000) {
				exportRoot.deleteFunc(me.func);
			}
		
			var dist = Math.sqrt(Math.pow((me.x - destX), 2) + Math.pow((me.y - destY), 2));
			arrow.visible = false;
			if (focusedBlock && dist < 260) {
				focusedBlock.root = false;
				setTimeout(function () {
					
						me.depBlocks.push([-1, focusedBlock]);
						focusedBlock.mc.depBlocks.push([1, me.func]);
						focusedBlock.mc.childBlock = me.func;
						me.func.vars[focusedBlockIndex] = focusedBlock;
						exportRoot.turnOnInput(focusedBlockInputIndex, focusedBlock);
					
				}, 500);
			}
			//me.func.inputs[focusedBlockIndex].alpha = 1;
			if (destX && destY) {
				var dist = Math.sqrt(Math.pow((me.x - destX), 2) + Math.pow((me.y - destY), 2));
				if (dist < 260) {
					createjs.Tween.get(me)
						.to({
							x: destX,
							y: destY
						}, 150);
					  myInputs[0][1].hyper.visible = true;
				} else {
					if (focusedBlock) {
						removeUpperDeps(focusedBlock);
						myInputs[0][1].hyper.visible = false;
						me.func.vars[focusedBlockInputIndex] = null;
						focusedBlock.root = true;
						clearParentChildBlock();
					}
				}
			}
			createjs.Tween.get(this.block)
				.to({
					scaleX: .85
				}, 150);
		
			//destX = null;
			//destY = null;
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
		top.graphics.beginFill("#ff0000").drawRect(0, 0, 230, 180);
		top.alpha = .1;
		top.x = 100;
		top.y = -180;
		me.addChild(top);
		me.top = top;
		
		
		var bottom = new createjs.Shape();
		bottom.graphics.beginFill("#ff0000").drawRect(0, 0, 230, 180);
		bottom.alpha = .1;
		bottom.x = 100;
		bottom.y = 60;
		me.addChild(bottom);
		me.bottom = bottom;
		
		
		if (hideHitBoxes) {
			top.alpha = 0;
			bottom.alpha = 0;
		}
		function removeHit() {
			me.removeChild(me.bottom);
			me.removeChild(me.top);
			me.bottom = null;
			me.top = null;
		}
		this.removeHit = removeHit;
		
		function checkCollision(x1, y1, x2, y2) {
			var width = 230;
			var height = 180;
			return x1 < x2 + width && x1 + width > x2 && y1 < y2 + height && y1 + height > y2;
		}
		
		function checkForSnap() {
			var others = exportRoot.getAllBlocks();
			var func = me.func;
		
			if (!shapeLoad) {
				shapeLoad = true;
				for(var i=0; i<func.inputsType.length; i++){
						//console.log("input: "+func.inputsType[i]);
						//input
						var input = new createjs.Shape();
						input.graphics.beginFill(func.myColor).drawRect(0, -30, 20, 30);
						me.addChild(input);
						input.x = 430/2;
						input.y = 20;
						
						var inputMC = new lib.con_sym();
						inputMC.x = 430/2+10;
						me.addChild(inputMC);
						myInputs.push([input,inputMC]);
						createjs.Tween.get(input).to({
							scaleY: 1.5
						}, 300);
						createjs.Tween.get(inputMC).to({
							y: -40
						}, 300);
						inputMC.name.text=func.inputsType[i];
					
				}
				//output
				var output = new createjs.Shape();
				output.graphics.beginFill(func.myColor).drawRect(0, 0, 20, 10);
				me.addChild(output);
				output.x = 430/2;
				output.y = 60;
				//myOutputs.push(output);
				createjs.Tween.get(output).to({
					scaleY: 3
				}, 300);
				var outputMC = new lib.con_sym();
				outputMC.x = 430/2+10;
				outputMC.y = 60;
				me.addChild(outputMC);
				createjs.Tween.get(outputMC).to({
					y: 100
				}, 300);
				outputMC.name.text= func.outputType;
				myOutputs =[output,outputMC];
			}
			bigLoop:
			for (var i = 0; i < others.length; i++) {
				if (!func) {
					console.log("no Func");
					return;
				}
				for (var j = 0; j < func.inputsType.length; j++) {
					var wantedType = func.inputsType[j];
					
					if (wantedType===others[i].outputType && !others[i].childBlock) {
						var otherMC = others[i].mc.bottom;
						var x1 = otherMC.x + others[i].mc.x;
						var y1 = otherMC.y + others[i].mc.y;
						var x2 = top.x + me.x;
						var y2 = top.y + me.y;
						focusedBlock = others[i];
						focusedBlockIndex = Number(i);
						focusedBlockInputIndex = Number(j);
						if (checkCollision(x1, y1, x2, y2)) {
							if (!hideHitBoxes) {
								otherMC.alpha = .5;
								top.alpha = .5;
							}
							arrow.visible = true;
							var yDist = (y2 + 96) - y1;
							var xDist = x2 - x1;
		
							arrow.scaleY = (yDist / 76) * 2;
							if((yDist / 76) * 2>0){
								arrow.skewX = -(xDist) / 4;
							}else{
								arrow.skewX = (xDist) / 4;
							}
							destY = me.y - yDist;
							destX = me.x - xDist;
						} else {
							arrow.visible = false;
							if (!hideHitBoxes) {
								otherMC.alpha = .1;
								top.alpha = .1;
								
							}
						}
						break bigLoop;
					}
				}
			}
		}
		this.checkForSnap = checkForSnap;
		function shiftDependents(mag) {
			
			var h = 65;
			var dep = me.depBlocks;
			for (var i = 0; i < dep.length; i++) {
				var shift = mag * h * dep[i][0] / 2;
				var depMC = dep[i][1].mc;
				createjs.Tween.get(depMC).to({
					y: depMC.y + shift
				}, 150);
				//depMC.shiftDependents(mag);
			}
			
			//inputSymb
			var shift = mag * h / 2;
			for(var i=0; i<myInputs.length;i++){
				var input = myInputs[i][0];
				var inputMC = myInputs[i][1];
				createjs.Tween.get(input).to({
					y: input.y - shift
				}, 150);
				createjs.Tween.get(inputMC).to({
					y: inputMC.y - shift
				}, 150);
			}
			createjs.Tween.get(myOutputs[0]).to({
					y: myOutputs[0].y + shift
			}, 150);
			createjs.Tween.get(myOutputs[1]).to({
					y: myOutputs[1].y + shift
			}, 150);
			
			me.top.y = (-yScale * 64) / 2 - 155;
			me.bottom.y = (yScale * 64) / 2 + 35;
		}
		function addBlock(type, val, bindedBlock, bindedIndex) {
			tempVal = val;
			yScale += 1.4;
			createjs.Tween.get(this.block)
				.to({
					scaleY: yScale
				}, 150)
				.call(handleComplete);
			createjs.Tween.get(this.title)
				.to({
					y: (-yScale * 64) / 2 + 40
				}, 150);
			
			shiftDependents(1.4);
			var myMC = new lib.libBlock();
			var bounds = myMC.frameBounds[0];
			myMC.x = 180;
			var h = bounds.height;
			myMC.y = 50 - bounds.height / 2 + stacker * bounds.height / 2;
			myMC.block.scaleX = .75;
		
			myMC.type.text = tempVal;
			myMC.block.highlight.visible = false;
			myMC.bindedBlock = bindedBlock;
			myMC.bindedIndex = bindedIndex;
			this.blockStack.push(myMC);
			stacker = this.blockStack.length;
			var midPoint = Math.round(this.blockStack.length / 2);
			updateSubPos();
			function handleComplete() {
				this.parent.addChild(myMC);
				myMC.type = "sentence";
				myMC.alpha = 0;
		
				createjs.Tween.get(myMC)
					.to({
						alpha: 1
					}, 150).call(finished);
			}
			function finished() {
				myMC.removeHit();
				myMC.block.gotoAndStop(1);
			}
		}
		this.addBlock = addBlock;
		
		function targetMC(block, index) {
			for (var i = 0; i < me.blockStack.length; i++) {
				if (me.blockStack[i].bindedBlock == block && me.blockStack[i].bindedIndex === index) {
					return [me.blockStack[i], i];
				}
			}
			return
		}
		
		function updateSubPos() {
			var h = 88;
			stacker = me.blockStack.length;
			for (var i = 0; i < me.blockStack.length; i++) {
				createjs.Tween.get(me.blockStack[i])
					.to({
						y: -stacker * h / 2 + 50 + i * h
					}, 150);
			}
		}
		
		function removeBlock(block, index, kill) {
			if (!targetMC(block, index)) {
				return "nope";
			}
			var MC = targetMC(block, index)[0];
			if (!kill) {
				index = targetMC(block, index)[1];
			}
		
			createjs.Tween.get(me.blockStack[index])
				.to({
					alpha: 0
				}, 150)
				.call(handleComplete);
			function handleComplete() {
				me.removeChild(me.blockStack[index]);
				me.blockStack.splice(index, 1);
				yScale -= 1.4;
				createjs.Tween.get(me.block)
					.to({
						scaleY: yScale
					}, 150);
				if (me.blockStack.length === 0) {
					createjs.Tween.get(me.title)
						.to({
							y: 15
						}, 150);
				} else {
					createjs.Tween.get(me.title)
						.to({
							y: (-yScale * 64) / 2 + 40
						}, 150);
				}
				updateSubPos();
				shiftDependents(-1.4);
			}
		
		
		}
		this.removeBlock = removeBlock;
		
		
		function updateVal(key) {
			for (var i = 0; i < this.blockStack.length; i++) {
				if (this.blockStack[i].bindedBlock == key) {
					var tits = String(this.blockStack[i].bindedBlock.vars[this.blockStack[i].bindedIndex]);
					if (tits.length > 10) {
						tits = tits.substring(0, 10);
						tits = tits + "..";
					}
					this.blockStack[i].title.text = tits;
				}
			}
		}
		this.updateVal = updateVal;
		
		this.addEventListener("mousedown", focusOnMe);
		function focusOnMe(event) {
			if (!me.type) {
				event.currentTarget.block.highlight.visible = true;
			}
			var func = exportRoot.getFuncFromMC(event.currentTarget);
			if (func) {
				exportRoot.loadBlockInfo(func);
			} else if (me.type) {
				//exportRoot.primitivePrompt(me.type,me.title.text,event.currentTarget);
			}
		}
		
		var imageHolder = null;
		function addImage(bitmap) {
			yScale += 4.6;
			bitmap.x = 100;
			bitmap.y = (-yScale * 64) / 2 + 85;
			bitmap.alpha = 0;
			imageHolder = bitmap;
			me.addChild(bitmap);
		
			createjs.Tween.get(this.block)
				.to({
					scaleY: yScale
				}, 150)
				.call(handleComplete);
			createjs.Tween.get(bitmap)
				.to({
					alpha: 1
				}, 150);
			createjs.Tween.get(this.title)
				.to({
					y: (-yScale * 64) / 2 + 40
				}, 150);
		
			if (me.top) {
				me.top.y = (-yScale * 64) / 2 - 35;
				me.bottom.y = (yScale * 64) / 2 + 30;
		
			}
			shiftDependents(4.6);
		}
		this.addImage = addImage;
		
		
		function removeImage() {
			yScale -= 4.6;
			if (imageHolder) {
				createjs.Tween.get(imageHolder)
					.to({
						alpha: 0
					}, 150)
					.call(handleComplete);
			}
			function handleComplete() {
				me.removeChild(imageHolder);
				imageHolder = null;
				createjs.Tween.get(me.block)
					.to({
						scaleY: yScale
					}, 150);
				createjs.Tween.get(me.title)
					.to({
						y: (-yScale * 64) / 2 + 47
					}, 150);
			}
			shiftDependents(-4.6);
		}
		this.removeImage = removeImage;
		
		function killSymbols(){
			var shift = -60 ;
			for(var i=0; i<myInputs.length;i++){
				var input = myInputs[i][0];
				var inputMC = myInputs[i][1];
				createjs.Tween.get(input).to({
					y: input.y - shift
				}, 150);
				createjs.Tween.get(inputMC).to({
					y: inputMC.y - shift
				}, 150);
			}
			createjs.Tween.get(myOutputs[0]).to({
					y: myOutputs[0].y + shift
			}, 150);
			createjs.Tween.get(myOutputs[1]).to({
					y: myOutputs[1].y + shift
			}, 150);
		}
		
		function removeInputs(){
			for(var i=0; i<myInputs.length; i++){
				myInputs[i].visible = false;
			}
			myOutputs[0].visible = false;
			myOutputs[1].visible = false;
		}
		this.removeInputs = removeInputs;
		function killSelf() {
			yScale = 1;
			for (var i = 0; i < me.blockStack.length; i++) {
				removeBlock(me.func, i, true);
			}
			if (imageHolder) {
				removeImage();
			}
			
			killSymbols();
			var explosion = new lib.explosion();
			explosion.x = 430/2+10;
			me.addChild(explosion);
			//me.explosion.play();
		}
		this.killSelf = killSelf;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 7
	this.outputShape = new lib.inputShape();
	this.outputShape.setTransform(218,-1.4,1,1,0,0,0,154,20);

	this.inputShape = new lib.inputShape();
	this.inputShape.setTransform(218,64,1,1,0,0,0,154,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inputShape},{t:this.outputShape}]}).wait(1));

	// Layer 2
	this.arrow = new lib.Arrow();
	this.arrow.setTransform(216.1,-84.9,1.808,1.808,0,0,0,0.6,0);

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
p.nominalBounds = rect = new cjs.Rectangle(-145,-157.8,601,241.8);
p.frameBounds = [rect];


(lib.graphicsLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		if(exportRoot.alertLib.visible){
			exportRoot.alertLib.visible = false;
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


(lib.funcLib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		if(exportRoot.alertLib.visible){
			exportRoot.alertLib.visible = false;
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
	var mask_graphics_22 = new cjs.Graphics().p("Egq8BCnMAAAiFNMBV5AAAMAAACFNg");
	var mask_graphics_23 = new cjs.Graphics().p("Egq8BAQMAAAiAfMBV5AAAMAAACAfg");
	var mask_graphics_24 = new cjs.Graphics().p("Egq8A5TMAAAhylMBV5AAAMAAABylg");
	var mask_graphics_25 = new cjs.Graphics().p("Egq8AUUMAAAgonMBV5AAAMAAAAong");
	var mask_graphics_26 = new cjs.Graphics().p("Egq8AKbIAA01MBV5AAAIAAU1g");
	var mask_graphics_27 = new cjs.Graphics().p("Egq8AHnIAAvNMBV5AAAIAAPNg");
	var mask_graphics_28 = new cjs.Graphics().p("Egq8AG9IAAt5MBV5AAAIAAN5g");
	var mask_graphics_29 = new cjs.Graphics().p("EgiXAG9IAAt5MBEvAAAIAAN5g");
	var mask_graphics_30 = new cjs.Graphics().p("A5yG9IAAt5MAzlAAAIAAN5g");
	var mask_graphics_31 = new cjs.Graphics().p("AxNG9IAAt5MAibAAAIAAN5g");
	var mask_graphics_32 = new cjs.Graphics().p("AooG9IAAt5IRRAAIAAN5g");
	var mask_graphics_33 = new cjs.Graphics().p("AgDG9IAAt5IAIAAIAAN5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:44.5}).wait(1).to({graphics:mask_graphics_1,x:2.5,y:44.5}).wait(1).to({graphics:mask_graphics_2,x:10.4,y:44.5}).wait(1).to({graphics:mask_graphics_3,x:30.7,y:44.5}).wait(1).to({graphics:mask_graphics_4,x:113.2,y:44.5}).wait(1).to({graphics:mask_graphics_5,x:240.9,y:44.5}).wait(1).to({graphics:mask_graphics_6,x:264.1,y:44.5}).wait(1).to({graphics:mask_graphics_7,x:272.8,y:44.5}).wait(1).to({graphics:mask_graphics_8,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_9,x:274.9,y:45.3}).wait(1).to({graphics:mask_graphics_10,x:274.9,y:48.2}).wait(1).to({graphics:mask_graphics_11,x:274.9,y:53.9}).wait(1).to({graphics:mask_graphics_12,x:274.9,y:64}).wait(1).to({graphics:mask_graphics_13,x:274.9,y:82.5}).wait(1).to({graphics:mask_graphics_14,x:274.9,y:124.2}).wait(1).to({graphics:mask_graphics_15,x:274.9,y:268.7}).wait(1).to({graphics:mask_graphics_16,x:274.9,y:310.1}).wait(1).to({graphics:mask_graphics_17,x:274.9,y:326.7}).wait(1).to({graphics:mask_graphics_18,x:274.9,y:335}).wait(1).to({graphics:mask_graphics_19,x:274.9,y:338.9}).wait(1).to({graphics:mask_graphics_20,x:274.9,y:339.9}).wait(1).to({graphics:mask_graphics_21,x:274.9,y:339.9}).wait(1).to({graphics:mask_graphics_22,x:274.9,y:337.1}).wait(1).to({graphics:mask_graphics_23,x:274.9,y:325.6}).wait(1).to({graphics:mask_graphics_24,x:274.9,y:291.4}).wait(1).to({graphics:mask_graphics_25,x:274.9,y:110.1}).wait(1).to({graphics:mask_graphics_26,x:274.9,y:61.5}).wait(1).to({graphics:mask_graphics_27,x:274.9,y:47.7}).wait(1).to({graphics:mask_graphics_28,x:274.9,y:44.5}).wait(1).to({graphics:mask_graphics_29,x:220,y:44.5}).wait(1).to({graphics:mask_graphics_30,x:165.2,y:44.5}).wait(1).to({graphics:mask_graphics_31,x:110.3,y:44.5}).wait(1).to({graphics:mask_graphics_32,x:55.4,y:44.5}).wait(1).to({graphics:mask_graphics_33,x:0.5,y:44.5}).wait(1));

	// Layer 2
	this.content = new lib.func_lib_content();
	this.content.setTransform(274,178.7,1,1,0,0,0,253.1,159.8);

	this.content.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.content).wait(9).to({regX:253.7,regY:384.3,x:274.6,y:402.9},0).wait(1).to({y:402.1},0).wait(1).to({y:400.3},0).wait(1).to({y:397.2},0).wait(1).to({y:391.6},0).wait(1).to({y:379},0).wait(1).to({y:334.9},0).wait(1).to({y:322.3},0).wait(1).to({y:317.2},0).wait(1).to({y:314.7},0).wait(1).to({y:313.5},0).wait(1).to({regX:253.1,regY:159.8,x:274,y:88.7},0).wait(2).to({regX:253.7,regY:384.3,x:274.6,y:314.1},0).wait(1).to({y:317.6},0).wait(1).to({y:328},0).wait(1).to({y:383.3},0).wait(1).to({y:398},0).wait(1).to({y:402.2},0).wait(1).to({regX:253.1,regY:159.8,x:274,y:178.7},0).wait(6));

	// Layer 1
	this.instance = new lib.orange_bg();
	this.instance.setTransform(2.5,0.5,0.01,1,0,0,0,234.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:47.8,regY:44.5,scaleX:0.05,y:44.5},0).wait(1).to({scaleX:0.22,x:10.5},0).wait(1).to({scaleX:0.64,x:30.7},0).wait(1).to({scaleX:2.37,x:113.2},0).wait(1).to({scaleX:5.04,x:240.8},0).wait(1).to({scaleX:5.52,x:264},0).wait(1).to({scaleX:5.7,x:272.6},0).wait(1).to({regX:234.4,regY:0.5,scaleX:5.75,x:1347.5,y:0.5},0).wait(1).to({regX:47.8,regY:44.5,scaleY:1.02,x:274.8,y:45.3},0).wait(1).to({scaleY:1.11,y:48.2},0).wait(1).to({scaleY:1.27,y:53.9},0).wait(1).to({scaleY:1.57,y:64.1},0).wait(1).to({scaleY:2.11,y:82.6},0).wait(1).to({scaleY:3.34,y:124.2},0).wait(1).to({scaleY:7.58,y:268.8},0).wait(1).to({scaleY:8.79,y:310.2},0).wait(1).to({scaleY:9.28,y:326.8},0).wait(1).to({scaleY:9.52,y:335.1},0).wait(1).to({scaleY:9.63,y:338.9},0).wait(1).to({regX:234.4,regY:0.5,scaleY:9.66,x:1347.5,y:-85.2},0).wait(2).to({regX:47.8,regY:44.5,scaleY:9.58,x:274.8,y:337.2},0).wait(1).to({scaleY:9.24,y:325.6},0).wait(1).to({scaleY:8.24,y:291.5},0).wait(1).to({scaleY:2.92,y:110.1},0).wait(1).to({scaleY:1.5,y:61.6},0).wait(1).to({scaleY:1.09,y:47.8},0).wait(1).to({regX:234.4,regY:0.5,scaleY:1,x:1347.5,y:0.5},0).to({scaleX:0.01,x:2.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,89);
p.frameBounds = [rect, new cjs.Rectangle(0,0,5.1,89), new cjs.Rectangle(0,0,20.9,89), new cjs.Rectangle(0,0,61.4,89), new cjs.Rectangle(0,0,226.4,89), new cjs.Rectangle(0,0,481.7,89), new cjs.Rectangle(0,0,528.3,89), new cjs.Rectangle(0,0,545.5,89), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,-0.2,549.9,91.2), new cjs.Rectangle(0,-1.1,549.9,98.6), new cjs.Rectangle(0,-2.8,549.9,113.5), new cjs.Rectangle(0,-5.9,549.9,140), new cjs.Rectangle(0,-11.6,549.9,188.2), new cjs.Rectangle(0,-24.3,549.9,296.9), new cjs.Rectangle(0,-68.3,549.9,674.2), new cjs.Rectangle(0,-80.9,549.9,782.2), new cjs.Rectangle(0,-86,549.9,825.6), new cjs.Rectangle(0,-88.5,549.9,847.1), new cjs.Rectangle(0,-89.7,549.9,857.2), rect=new cjs.Rectangle(0,-90,549.9,860), rect, new cjs.Rectangle(0,-89.4,549.9,852.6), new cjs.Rectangle(0,-85.8,549.9,822.5), new cjs.Rectangle(0,-75.4,549.9,733.4), new cjs.Rectangle(0,-20,549.9,260.1), new cjs.Rectangle(0,-5.2,549.9,133.5), new cjs.Rectangle(0,-1,549.9,97.4), new cjs.Rectangle(0,0,549.9,89), new cjs.Rectangle(0,0,440.1,89), new cjs.Rectangle(0,0,330.3,89), new cjs.Rectangle(0,0,220.6,89), new cjs.Rectangle(0,0,110.8,89), new cjs.Rectangle(0,0,1,89)];


// stage content:



(lib.wolf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(20);
		function includeJs(jsFilePath) {
			var js = document.createElement("script");
			js.type = "text/javascript";
			js.src = jsFilePath;
			document.head.appendChild(js);
		}
		this.includeJs = includeJs;
		includeJs("js/GlobalVars.js");
		includeJs("js/BlockInput.js");
		includeJs("js/Input.js");
		includeJs("js/Library.js");
		
		var me = this;
		var alertLib = this.alertLib;
		var navOptions = this.nav_options;
		var funcBlocks = new Array();
		var func_desc = this.func_desc;
		var func_title = this.func_title;
		var canvasClean = new Array();
		var inputClean = new Array();
		var variables = new Array();
		
		
		includeJs("js/Button.js");
		includeJs("js/LibButton.js");
		
		setTimeout(function () {
			me.btns = new Array(
				new LibButton("draw", me.library.pencil_btn),
				new LibButton("func", me.library.func_btn),
				new LibButton("search", me.library.search_btn),
				new LibButton("variables", me.library.var_btn),
				new Button("new", navOptions.new_btn),
				new Button("load", navOptions.load_btn),
				new Button("save", navOptions.save_btn),
				new Button("export", navOptions.export_btn)
		
			);
		}, 300);
		
		function getButtonName(mc) {
			for (var i = 0; i < me.btns.length; i++) {
				if (me.btns[i].mc == mc) {
					return me.btns[i].name;
				}
			}
		}
		this.getButtonName = getButtonName;
		
		function turnOnInput(j, childBlock) {
			var funcs = getAllBlocks();
			var i = funcs.length - 1;
			funcs[i].inputs[j].button.alpha = 1;
			funcs[i].vars[j] = childBlock;
			if(checkUpdate){console.log("turnOnInput, updating code..");}
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
					var txtBox = new Input(param[0], param[1], 1140, 306 + yShift, 38, 390, j, false, block, false);
					if (block.vars[j]) {
						txtBox.setInput(block.vars[j]);
					}
					block.inputs[j] = txtBox;
					yShift += 75;
				} else if (param[2] === "integer") {
					var txtBox = new Input(param[0], param[1], 1140, 306 + yShift, 38, 390, j, false, block, true);
					if (block.vars[j]) {
						txtBox.setInput(block.vars[j]);
					}
					block.inputs[j] = txtBox;
					yShift += 75;
				} else if (param[2] === "browse") {
					var txtBox = new Input(param[0], param[1], 1140, 306 + yShift, 38, 390, j, true, block, false);
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
			if(checkUpdate){console.log("generated inputs, update code");}
			updateCode();
			block.mc.block.highlight.visible = true;
		}
		this.generateInput = generateInput;
		
		
		function addFunc(codeName, mc) {
			var func = funcMap.get(codeName);
			var block = new func(mc);
			funcBlocks.push(block);
			focusBlock = block;
			func_desc.text = block.desc;
			func_title.text = block.name;
			mc.func = block;
			if(checkUpdate){console.log("Updated function, update code..");}
			updateCode();
		}
		this.addFunc = addFunc;
		
		
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
		
		function callInputs(origin) {
			if (focusBlock) {
				me.generateInput(focusBlock, origin);
			}
		}
		this.callInputs = callInputs;
		
		function updateCode() {
			varStack = new Array();
			varID = 0;
			if (outputCompile) {
				console.log(funcBlocks);
				console.log("COMPILLING STARTED..");
			}
			var output = "";
			for (var i = 0; i < funcBlocks.length; i++) {
				var miniOut = "";
				if (funcBlocks[i].root) {
					miniOut = compile(funcBlocks[i]);
				}
				output+=miniOut;
				if(miniOut){
					output += "\n";
				}
			}
			if(output.charAt(output.length-3) === ','){
				output = output.substring(0,output.length-3);
				output+="]";
			}
			var variabs = "";
			for(var i=0; i<varStack.length; i++){
				variabs+=varStack[i]+"\n";
			}
			
			btn.value = variabs+output;
			if(outputCompile){
				console.log("COMPILLING ENDED");
			}
		}
		this.updateCode = updateCode;
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
			varID++;
			if (outputCompile) {
				//console.log(func);
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
		
		
		//Library Information
		includeJs("js/compilers.js");
		includeJs("js/blocks.js");
		includeJs("js/jsGenDOM.js");
		
		
		var searchLibs;
		var graphicsLibs;
		var mathLibs;
		setTimeout(function () {
			searchLibs = genSearchLibs();
			graphicsLibs = genGraphicsLibs();
			mathLibs = genMathLibs();
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
		
		function getMathLib() {
			return mathLibs;
		}
		this.getMathLib = getMathLib;
		
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
		var everything = document.querySelector("body");
		everything.addEventListener("mousedown", startSelect);
		everything.addEventListener("mousemove", makeSelect);
		everything.addEventListener("mouseup", executeSelect);
		var selecter;
		var h_blocks;
		var startX;
		var startY;
		var clickedInEditPane = false;
		var pressing = false;
		function hitTest(x,y,block){
			var x1=block.mc.x;
			var y1=block.mc.y;
			var w1=430;
			var h1=block.mc.getYScale()*64;
			return x>x1 && x<x1+w1 && y>y1 && y<y1+h1;
		}
		function startSelect(m){
			pressing = true;
			var relX = m.x;
			var relY = m.y;
			//console.log(relX+":"+relY);
			if(m.ctrlKey){
				//console.log("mkRect");
				selecter = new createjs.Shape();
				selecter.x = relX;
				selecter.y = relY;
				stage.addChild(selecter);
			}
			h_blocks = getHighlightedBlocks(relX,relY);
			//console.log(h_blocks);
			startX = relX;
			startY = relY;
			if(relX<950){
				clickedInEditPane = true;
				var clicked = false;
				for(var i=0; i<funcBlocks.length; i++){
					if(!hitTest(relX,relY,funcBlocks[i])){
						funcBlocks[i].mc.block.highlight.visible = false;
					}
				}
				
			}else{
				clickedInEditPane = false;
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
			if(pressing){
				var relX = m.x;
				var relY = m.y;
				if(m.ctrlKey){
					//console.log("expandRect");
					selecter.graphics.clear();
					var width = relX - selecter.x;
					var height = relY - selecter.y;
					console.log("w:"+width);
					selecter.graphics.beginFill("#0099FF").drawRect(0, 0, width, height);
					selecter.alpha = .4;
					highlightSelected(relX,relY);
				}else{
					if(clickedInEditPane){
						 var difX = 0;
						 var difY = 0
						 for(var i=0; i<h_blocks.length; i++){
							difX = ((relX+h_blocks[i][1])-h_blocks[i][0].mc.x);
							difY = ((relY+h_blocks[i][2])-h_blocks[i][0].mc.y);
							h_blocks[i][0].mc.x += difX;//(relX - h_blocks[i][1]);
							h_blocks[i][0].mc.y += difY;//(relY - h_blocks[i][2]);
						 }
						 if(h_blocks.length === 1){
							 //shiftChildren
							 var childBlock = h_blocks[0][0].mc.childBlock;
							 shiftChildrenBlocks(childBlock, difX, difY);
							 alertLib.visible = false;
							 lastLib = null;
							 try{
								h_blocks[0][0].mc.checkForSnap();
							}catch(e){}
						}
					}
				}
			}
		}
		
		
		function shiftChildrenBlocks(childBlock, difX, difY){
			//this should be optimized as there can only be one output
			 if(childBlock){
				 childBlock.mc.x+=difX;
				 childBlock.mc.y+=difY;
				 shiftChildrenBlocks(childBlock.mc.childBlock,difX,difY);
			 }
			
		}
		
		function executeSelect(m){
			if(h_blocks.length === 1){
				 h_blocks[0][0].mc.shrink();
			}
			if(selecter){
				stage.removeChild(selecter);
				selecter = null;
			}
			h_blocks = null;
			pressing = false;
			
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
					funcBlocks[i].mc.block.highlight.visible=true;
				}
			}
		}
		
		window.addEventListener("keydown", pressed);
		function pressed(k){
			if(k.keyCode === 13){
				if(checkUpdate){console.log("Enter pressed, updateing code..");}
				updateCode();
				updateWolfDiv(btn.value);
			}
			if(k.keyCode === 46){
				for(var i=0; i<funcBlocks.length; i++){
					if(funcBlocks[i].mc.block.highlight.visible){
						for(var j=0; j<funcBlocks.length; j++){
							for(var k=0; k<funcBlocks[j].vars.length; k++){
								if(funcBlocks[j].vars[k] === funcBlocks[i]){
									//console.log("nullifying var");
									funcBlocks[j].vars[k] = null;
								}
							}
						}
						clearInputs();
						funcBlocks[i].mc.killSelf();
						alertLib.visible = true;
						funcBlocks.splice(i,1);
					}
				}
			}
		}
		
		function deleteFunc(func){
			for(var i=0; i<funcBlocks.length; i++){
				if(funcBlocks[i] === func){
					clearInputs();
					func.mc.killSelf();
					alertLib.visible = true;
				}
			}
		}
		this.deleteFunc = deleteFunc;
		
		function putLibsTopLayer(mc){
			stage.children[0].swapChildren(mc,navOptions);	
		}
		this.putLibsTopLayer = putLibsTopLayer;
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

	this.timeline.addTween(cjs.Tween.get(this.library).wait(1));

	// Layer 1
	this.nav_options = new lib.nav_options();
	this.nav_options.setTransform(799.5,32.5,1,1,0,0,0,800.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.nav_options).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(799,426,1604.9,866.3);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;