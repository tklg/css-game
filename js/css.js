var csschoice_border_style = ["solid","dotted","dashed","double","groove","ridge","inset","outset"];
// var csschoice_border_radius = [];
// var csschoice_background_color = [];
//var csschoice_color = [];
// var csschoice_font_size = [];
// var csschoice_text_decoration = ["none","underline","overline","line-through"];
// var csschoice_text_align = ["left","center","right"];
// var csschoice_margin = ["auto"]; /*This may screw up the position styling...*/
// var csschoice_float = ["left","right"]
// var csschoice_padding = [];
// var csschoice_cursor=["alias","all-scroll","cell","col-resize","copy","crosshair","e-resize","help","n-resize","not-allowed","none","pointer","progress","row-resize","text","vertical-text","wait"];
// var csschoice_height = [];
// var csschoice_width = [];
// var csschoice_letterspacing = [];

$(document).ready(function() {

color(255);
radius(50)
margin(200);
heightsize(400);
space(30);

initGame();

});

var rand = Math.random();

color = function(maxVal) {
	var tempArray = [];
	for (i = 0; i < 40; i++) {
		for (i = 0; i < 3; i++) {
			tempArray[i] = Math.floor((rand * maxVal) + 1).toString();
			i++;
		}
		var rgbColor = "rgb(" + tempArray[1] + "," + tempArray[2] + "," + tempArray[3] + ")";
		if (i <= 20) {
		  	csschoice_color[i] = rgbColor;
	  	} else {
	  		csschoice_background_color[i - 20] = rgbColor;
	  	}
	}
}

radius = function(maxVal) {

	for (i = 0; i < 20; i++) {

		var a = (Math.round(Math.floor((rand * maxVal) + 1) / 5) * 5);

		var borderRad = a.toString() + "px";
	  	csschoice_border_radius[i] = borderRad;
	}
}

size = function(maxVal) {

	for (i = 0; i < 20; i++) {

		var a = (Math.round(Math.floor((rand * maxVal) + 1) / 5) * 5);

		var size = a.toString() + "px";
	  	csschoice_border_radius[i] = size;
	}
}

margin = function(maxVal) {

	for (i = 2; i < 40; i++) {

		var a = (Math.round(Math.floor((rand * maxVal) + 1) / 5) * 5);

		if (i > 0 && i <= 20) {
			var mg = a.toString() + "px";
	  		csschoice_margin[i] = mg;
	  	} else {
	  		var pd = a.toString() + "px";
	  		csschoice_padding[i - 20] = pd;
	  	}
	}
}

heightsize = function(maxVal) {

	for (i = 20; i < 60; i++) {

		var a = (Math.round(Math.floor((rand * maxVal) + 1) / 5) * 5);
		
		if (i <= 40) {
			var h = a.toString() + "px";
	  		csschoice_height[i] = h;
	  	} else {
	  		var w = a.toString() + "px";
	  		csschoice_width[i - 20] = w;
	  	}
	}
}

space = function(maxVal) {

	for (i = 0; i < 20; i++) {

		var a = (Math.round(Math.floor((rand * maxVal) + 1) / 5) * 5);

		var sp = a.toString() + "px";
	  	csschoice_letterspacing[i] = sp;
	}
}

/*
csschoice_letterspacing.length
csschoice_padding.indexOf(3);
*/
