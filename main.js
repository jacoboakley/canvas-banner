// CANVAS FROM HTML -------------------------------
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

// CREATE GRADIENT -------------------------------
var grd = ctx.createLinearGradient(0, 50, 11, 150);
grd.addColorStop(0,"white");
grd.addColorStop(.75, "grey");
grd.addColorStop(1,"black");

// FILL GRADIENT OVER CANVAS -----------------------
ctx.fillStyle = grd
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

// TEXT - EVIL ---------------------

ctx.strokeStyle = "red";
ctx.lineWidth = 2;

ctx.font = "100px Arial";
ctx.strokeText("E V I L", 900,145);
ctx.strokeText("E V I L", 895,140);

// TEXT - VS ----------------------
ctx.font = "50px Arial";
ctx.fillStyle = "black";

ctx.fillText("V", 590, 80);

ctx.fillStyle = "white";
ctx.fillText("S", 610, 100);

// TEXT - GOOD --------------------
ctx.strokeStyle = "gold";
ctx.lineWidth = 2;

ctx.fillStyle = "white"; 
ctx.font = "100px Arial";
ctx.strokeText("G O O D", 5, 90);
ctx.strokeText("G O O D", 6, 89);
ctx.strokeText("G O O D", 8, 87);
ctx.fillText("G O O D", 8, 87);