function preload(){
  loadImage("apple.png");
}


x = 0;
y = 0;

screen_width = window.innerWidth;
screen_height = window.innerHeight;

draw_apple = "";

apple = "";

speak_data = "";

to_number = Number(content);

canvas = createCanvas(screen_width, screen_height-150);
canvas.position(0, 150);

if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "Started Drawing apple";
}
else{
  document.getElementById("status").innerHTML = "The speech has not recognised a number";
}



var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    for(var i = 1; i <= to_number; i++);
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      Image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
