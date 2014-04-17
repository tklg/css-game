var correctAnswer;
var csschoice_cursor=["alias","all-scroll","cell","col-resize","copy","crosshair","e-resize","help","n-resize","not-allowed","none","pointer","progress","row-resize","text","vertical-text","wait"];
var goalText, goalCSS, goalTextWrong;
var bs, br, bc, co, fs, td, ta, m, f, s, cu, d;
var score = 0
var wrong = 0
var right = 0;

var totalQuestions = 10;

//var rand = Math.random();
//var n = rand;

buildGoal = function() {

//Teh Answers
bs = csschoice_border_style[Math.round(Math.random() * 7)];
br = csschoice_size[Math.round(Math.random() * 19)];
bc = csschoice_color[Math.round(Math.random() * 19)];
co = csschoice_color[Math.round(Math.random() * 19)];
fs = csschoice_size[Math.round(Math.random() * 19)];
td = csschoice_text_decoration[Math.round(Math.random() * 3)];
ta = csschoice_text_align[Math.round(Math.random() * 2)];
m = csschoice_margin[Math.round(Math.random() * 19)];
f = csschoice_float[Math.round(Math.random() * 1)];
h = csschoice_size[Math.round(Math.random() * 19)];
w = csschoice_size[Math.round(Math.random() * 19)];
s = csschoice_size[Math.round(Math.random() * 19)];
cu = csschoice_cursor[Math.round(Math.random() * 16)];
d = csschoice_dims[Math.round(Math.random() * 19)];

correctAnswer = Math.round(Math.random() * 3);

//console.log(bs, br, bc, co, fs, td, ta, m, f, s, cu, d);
goalText = "border-style: " + bs + ";<br>border-radius: " + br + ";<br>background-color: " + bc + ";<br>color: " + co + ";<br>font-size: " + fs + ";<br>text-decoration: " + td + ";<br>text-align: " + ta + ";<br>margin: " + m + ";<br>float: " + f + ";<br>padding: " + m + ";<br>cursor: " + cu + ";<br>letter-spacing: " + s + ";";
//goalTextWrong = "border-style: " + csschoice_border_style[rand * 7] + ";<br>border-radius: " + csschoice_border_radius[rand * 19 + ";<br>background-color: " + csschoice_background_color[rand * 19] + ";<br>color: " + csschoice_color[rand * 19] + ";<br>font-size: " + csschoice_font_size[rand * 19] + ";<br>text-decoration: " + csschoice_text_decoration[rand * 3] + ";<br>text-align: " + csschoice_text_align[rand * 2] + ";<br>margin: " + csschoice_margin[rand * 19] + ";<br>float: " + csschoice_float[rand * 1] + ";<br>padding: " + csschoice_padding[rand * 19] + ";<br>cursor: " + csschoice_cursor[Math.randon * 16] + ";<br>height: " + csschoice_height[rand * 19] + ";<br>width: " + csschoice_width[rand * 19] + ";<br>letter-spacing: " + csschoice_letterspacing[rand * 19] + ";";
};

setGoal = function() {
    $('#goal').css({
        "border-style":bs,
        "border-radius":br,
        "background-color":bc,
        "color":co,
        "font-size":fs,
        "text-decoration":td,
        "text-align":ta,
        "margin":m,
        "float":f,
        "padding":m,
        "cursor":cu,
        "letter-spacing":s
    });
    $('#goal').html(splashes[Math.round(Math.random() * 24)]);
};

setExampleContent = function() {
    console.log("Correct box loc: " + correctAnswer);

switch (correctAnswer) {

    case 0:
        $('#1').html(goalText);
        $('#2').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        $('#3').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        $('#4').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        break;
    case 1:
        $('#1').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        $('#2').html(goalText);
        $('#3').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        $('#4').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        break;
    case 2:
        $('#1').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        $('#2').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        $('#3').html(goalText);
        $('#4').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        break;
    case 3:
        $('#1').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        $('#2').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        $('#3').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>background-color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 19)] + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 19)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_margin[Math.round(Math.random() * 19)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 19)] + ";");
        $('#4').html(goalText);
        break;
    default:
        console.log("fail");
}
//$('#ec1').html("border-style: " + csschoice_border_style[Math.round(Math.random() * 7)] + ";<br>border-radius: " + csschoice_size[Math.round(Math.random() * 20)]/* + ";<br>background-color: " + csschoice_background_color[Math.round(Math.random() * 20)] + ";<br>color: " + csschoice_color[Math.round(Math.random() * 20)]*/ + ";<br>font-size: " + csschoice_size[Math.round(Math.random() * 20)] + ";<br>text-decoration: " + csschoice_text_decoration[Math.round(Math.random() * 3)] + ";<br>text-align: " + csschoice_text_align[Math.round(Math.random() * 2)] + ";<br>margin: " + csschoice_margin[Math.round(Math.random() * 20)] + ";<br>float: " + csschoice_float[Math.round(Math.random() * 1)] + ";<br>padding: " + csschoice_size[Math.round(Math.random() * 20)] + ";<br>cursor: " + csschoice_cursor[Math.round(Math.random() * 16)] + ";<br>height: " + csschoice_dims[Math.round(Math.random() * 20)] + ";<br>width: " + csschoice_dims[Math.round(Math.random() * 20)] + ";<br>letter-spacing: " + csschoice_size[Math.round(Math.random() * 20)] + ";");
//console.log(csschoice_size[1] + "," + csschoice_size[2] + "," + csschoice_size[4] + "," + csschoice_size[3] + "," + csschoice_size[5]);

};

updateScore = function() {

$('.footer').html("Correct: " + right + "/" + totalQuestions + " Wrong: " + wrong + " Score: " + score);
$('.footer').css('margin-left','-' + $('.footer').css('width')/2);
checkForWin();

}

checkForWin = function() {
    if (right === totalQuestions || score === 1000) {
        //won
        alert("WIN! :D");
        location.reload();//reload page for now
        //show restart button here
    } else if (right + wrong === totalQuestions) {
        //lost
        alert("LOSE! D:");
        location.reload();//reload page for now
        //show restart button here
    } else {
        return;
    }
}

initGame = function() {
    if (!hasStarted) {
        console.log("Game started");
        buildGoal();
        setExampleContent();
        setGoal();
        hasStarted = true;
        //console.log("initgame");
    }
};

nextLevel = function(ans) {
    if (hasStarted) {
        if (parseInt(ans) === correctAnswer + 1) {
            console.warn("Correct answer entered");
            right++;
            score += 10;
        } else {
            wrong++;
        }
        updateScore();
        getVars();
        buildGoal();
        setExampleContent();
        setGoal();

    }
};