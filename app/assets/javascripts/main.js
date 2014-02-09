// gloval variables
var gl = null;

var shapeChanged = function(selectObj) {
	var selectIndex = selectObj.selectedIndex;
	var selectValue = selectObj.options[selectIndex].text;
	var output = document.getElementById("output");
	//alert(output.innerText);
	output.innerHTML = selectIndex + "  " + selectValue;

	var outputCode = document.getElementById("gcode output");
	var str = "G17 G20 G90 G94 G54<br>\
				G0 Z0.25<br>\
				X-0.5 Y0.<br>\
				Z0.1<br>\
				G01 Z0. F5.<br>\
				G02 X0. Y0.5 I0.5 J0. F2.5<br>\
				X0.5 Y0. I0. J-0.5<br>\
				X0. Y-0.5 I-0.5 J0.<br>\
				X-0.5 Y0. I0. J0.5<br>\
				G01 Z0.1 F5.<br>\
				G00 X0. Y0. Z0.25<br>";

	outputCode.innerHTML = str;
};

var initGL = function() {
	var canvas = document.getElementById("сanvas");
	console.log("initGL");

	var names = ["webgl","webkit-3d","moz-webgl","experimental-webgl"];

	var i;
	for (i = 0; i < names.length; i++) {
		try {
			gl = canvas.getContext(names[i]);
		}
		catch(e){
			console.log("Exeption " + e.message);
		}
		if (gl) break;
	}

	if (gl === null) {		
		var canvas_error = document.getElementById("canvas-error");
		console.log(canvas_error);
		canvas_error.style.display = "block";
		canvas.style.display = "none";
	} else {
		gl.clearColor(0.0,0.0,0.0,1.0);	
		cclear(gl);
	};
};

var keydown = function(event) {
	var keyCode = event.keyCode;
	var colorDeap = keyCode / 200;

	gl.clearColor(colorDeap,colorDeap,colorDeap,0.5);	
	cclear(gl);
}

var cclear = function(ctx) {
	ctx.clear(ctx.COLOR_BUFFER_BIT);
	ctx.viewport(0,0,500,500);
}

window.onload = initGL;
window.onkeydown = keydown;