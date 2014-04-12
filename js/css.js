var csschoice_border_style = ["solid","dotted","dashed","double","groove","ridge","inset","outset"];
var csschoice_background_color = [];
var csschoice_color = [];
var csschoice_text_decoration = ["none","underline","overline","line-through"];
var csschoice_text_align = ["left","center","right"];
var csschoice_float = ["left","right"]
var csschoice_cursor=["alias","all-scroll","cell","col-resize","copy","crosshair","e-resize","help","n-resize","not-allowed","none","pointer","progress","row-resize","text","vertical-text","wait"];
var csschoice_size = [];
var csschoice_dims = [];
var csschoice_margin = [];

var temp_1, temp_2, temp_3, temp_4;

var rand = Math.random();
var hasStarted;


color = function(maxVal) {
	var tempArray = [];
	for (i = 0; i < 20; i++) {
		for (v = 0; v < 3; v++) {
			tempArray[v] = Math.round(Math.random() * maxVal) + 1;
		}
		var rgbColor = "rgb(" + tempArray[0] + "," + tempArray[1] + "," + tempArray[2] + ")";

		 csschoice_color[i] = rgbColor;
		 //console.log(i + " - " + rgbColor);

	}
}

size = function(maxVal) {

	for (i = 0; i < 20; i++) {

		temp_1 = Math.round(Math.random() * maxVal) + 1;

		var borderRad = temp_1.toString() + "px";
	  	csschoice_size[i] = borderRad;
	  	//console.warn(i);
	  	//console.warn(borderRad);
	}
}

dims = function(maxVal) {

	for (i = 0; i < 20; i++) {

		temp_2 = Math.round(Math.random() * maxVal) + 1;

		var dm = temp_2.toString() + "px";
	  	csschoice_dims[i] = dm;
	}
}

margin = function(maxVal) {

	for (i = 0; i < 20; i++) {

		//var a = ((Math.floor((Math.round(Math.Math.random()om())) * maxVal) + 1) / 5) * 5;
		temp_3 = Math.round(Math.random() * maxVal) + 1;
		//console.log(Math.round(Math.random() * maxVal) + 1);
		//console.log("a = " + a);
		//Math.floor((rr * maxVal) + 1) / 5)

		var mg = temp_3.toString() + "px";
	  	csschoice_margin[i] = mg;
	}
}

getVars = function() {
	color(255);
	size(30);
	dims(250);
	margin(100);
}

/*
csschoice_letterspacing.length
csschoice_padding.indexOf(3);
*/
$(document).ready(function() {

hasStarted = false;
startGame = function() {
	if (!hasStarted) {
		$('.css-box-title').css('display','none');
		$('#goal').css('display','inline');
		$('.footer').css('visibility','visible');
		getVars();
		initGame();
	}
}

});