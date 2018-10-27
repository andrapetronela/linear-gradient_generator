var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#body");
h3.style.fontFamily = "Roboto";

function gradient() {
    
    body.style.background = "linear-gradient(to right bottom, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);


let container = document.getElementById("#container");
let middleX = canvas.width / 2;
let middleY = canvas.height / 2;
    
function getRandomColor() {
    var letters = 'fffacd'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}    

    document.addEventListener("mousemove", function(event) {
    	let canvas = document.getElementById("canvas");
    	let ctx = canvas.getContext("2d");
    	let mouseX = event.clientX;
    	let mouseY = event.clientY;
    	ctx.beginPath();
    	ctx.strokeStyle = getRandomColor();
		let circle = ctx.arc(mouseX, mouseY-canvas.height, 18, 0, 2*Math.PI);
		ctx.stroke();
    });

    document.addEventListener("click", function(event) {
        let canvas = document.getElementById("canvas");
    	let ctx = canvas.getContext("2d");
    	let mouseX = event.clientX;
    	let mouseY = event.clientY;
    	ctx.beginPath();
    	ctx.fillStyle = "#b73f92";
		ctx.arc(mouseX, mouseY - canvas.height, 18, 0, 2*Math.PI);
		ctx.fill();
    });
