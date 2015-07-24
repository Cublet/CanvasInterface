var Button = function (name, mc) {
	this.name = name;
	this.mc = mc;
	mc.addEventListener("mouseover", btnOver);
	mc.addEventListener("rollout", btnOut);
	function btnOver(event) {
		event.currentTarget.gotoAndStop(1);
	}
	function btnOut(event) {
		event.currentTarget.gotoAndStop(0);
	}
}
