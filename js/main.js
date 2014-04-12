initGame = function() {
    
buildGoal();

var correctAnswer = Math.round(Math.random * 4);
    if (correctAnswer != 1 || correctAnswer != 2 || correctAnswer != 3 || correctAnswer != 4) {
        //correctAnswer = Math.round(Math.random * 4);
    };

setGoal();
setExampleContent();
};

buildGoal = function() {

var rand = Math.random();

var goalText = "border-style: " + csschoice_border_style[rand * 8] + ";<br>border-radius: " + csschoice_border_radius[rand * 20] + ";<br>background-color: " + csschoice_background_color[rand * 20] + ";<br>color: " + csschoice_color[rand * 20] + ";<br>font-size: " + csschoice_font_size[rand * 20] + ";<br>text-decoration: " + csschoice_text_decoration[rand * 4] + ";<br>text-align: " + csschoice_text_align[rand * 3] + ";<br>margin: " + csschoice_margin[rand * 20] + ";<br>float: " + csschoice_float[rand * 2] + ";<br>padding: " + csschoice_padding[rand * 20] + ";<br>cursor: " + csschoice_cursor[Math.randon * 17] + ";<br>height: " + csschoice_height[rand * 20] + ";<br>width: " + csschoice_width[rand * 20] + ";<br>letter-spacing: " + csschoice_letterspacing[rand * 20] + ";";
//var goalTextWrong = "border-style: " + csschoice_border_style[rand * 8] + ";<br>border-radius: " + csschoice_border_radius[rand * 20] + ";<br>background-color: " + csschoice_background_color[rand * 20] + ";<br>color: " + csschoice_color[rand * 20] + ";<br>font-size: " + csschoice_font_size[rand * 20] + ";<br>text-decoration: " + csschoice_text_decoration[rand * 4] + ";<br>text-align: " + csschoice_text_align[rand * 3] + ";<br>margin: " + csschoice_margin[rand * 20] + ";<br>float: " + csschoice_float[rand * 2] + ";<br>padding: " + csschoice_padding[rand * 20] + ";<br>cursor: " + csschoice_cursor[Math.randon * 17] + ";<br>height: " + csschoice_height[rand * 20] + ";<br>width: " + csschoice_width[rand * 20] + ";<br>letter-spacing: " + csschoice_letterspacing[rand * 20] + ";";
//var goalCSS = "border-style":csschoice_border_style[rand * 8],"border-radius":csschoice_border_radius[rand * 20],"background-color":csschoice_background_color[rand * 20],"color":csschoice_color[rand * 20],"font-size":csschoice_font_size[rand * 20],"text-decoration":csschoice_text_decoration[rand * 4],"text-align":csschoice_text_align[rand * 3],"margin":csschoice_margin[rand * 20],"float":csschoice_float[rand * 2],"padding":csschoice_padding[rand * 20],"cursor":csschoice_cursor[Math.randon * 17],"height":csschoice_height[rand * 20],"width":csschoice_width[rand * 20],"letter-spacing":csschoice_letterspacing[rand * 20];

};

setGoal = function() {
    //$('#goal').css(goalCSS);
};

setExampleContent = function() {

if (correctAnswer === 1) {
    $('#ec1').html(goalText.toString());
    $('#ec2').html("");
    $('#ec3').html("");
    $('#ec4').html("");
}

};