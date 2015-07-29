var deploy_btn;
var blockit_btn;
var b_conatiner;
function initializeBlockinater(container){
	b_container = container;
	console.log(container);
	console.log(container.deploy);
	console.log(container.blockit);
	deploy_btn = new Button("deploy",container.deploy);
	blockit_btn = new Button("blockit",container.blockit);
}

function createBlockination(h_blocks){
	b_container.nothing.visible = false;
	console.log(h_blocks);
}