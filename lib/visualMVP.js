'use strict';

//visual testing with mic input

var mic;
function setup(){
  mic = new p5.AudioIn()
  mic.start();
  createCanvas(1000, 500);
}
function draw(){
  background(255,0,0);
  micLevel = mic.getLevel();
  console.log(micLevel)
  ellipse(width/1, constrain(height-micLevel*height*80, 0, height), 100, 100);
  ellipse(width/2, constrain(height-micLevel*height*60, 0, height), 80, 80);
  ellipse(width/3, constrain(height-micLevel*height*40, 0, height), 50, 50);
  ellipse(width/4, constrain(height-micLevel*height*20, 0, height), 30, 30);
  ellipse(width/5, constrain(height-micLevel*height*10, 0, height), 20, 20);
  ellipse(width/6, constrain(height-micLevel*height*10, 0, height), 10, 10);
}

//visual testing with preload sound file

var song;
var analyzer;

function preload() {
  song = loadSound('./Dubstep-drum-loop-142-bpm.wav');
}
function setup(){

  createCanvas(1000, 500);
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

function draw(){
  background(255,0,0);
  level = analyzer.getLevel();
  ellipse(width/1.5, constrain(height-level*height*25, 0, height), 100, 100);
  ellipse(width/2, constrain(height-level*height*20, 0, height), 80, 80);
  ellipse(width/3, constrain(height-level*height*15, 0, height), 50, 50);
  ellipse(width/4, constrain(height-level*height*10, 0, height), 30, 30);
  ellipse(width/5, constrain(height-level*height*5, 0, height), 20, 20);
  ellipse(width/6, constrain(height-level*height*2, 0, height), 10, 10);
}


// testing with getUserMedia function 1

var constraints = { audio: {sampleRate:48000, channelCount: 2, volume: 1.0 }, video:false }
navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
   console.log(stream)

}).catch(function(err) {
  console.log(err)
});

// testing with getUserMedia function 2
navigator.mediaDevices.getUserMedia({ audio: true })
.then(function (stream) {
  var recorder = new MediaRecorder(stream);
  recorder.addEventListener('dataavailable', onRecordingReady);
});
function onRecordingReady(e) {
  console.log(e)
}
