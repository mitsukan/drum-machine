function Sequencer(soundObject) {
  this.sound = soundObject;
  this.tempoInMS = 500;
  this.noteArray = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];
  this.playHead = 0;
}

Sequencer.prototype.playSound = function(noteState){
  if (noteState === true) {
    this.sound.play();
  }
};

Sequencer.prototype.updatePlayHead = function() {
  if (this.playHead === 15) {
    this.playHead = 0;
  } else {
    this.playHead++;
  }
};

Sequencer.prototype.playTrack = function(){
  var self = this;
  // console.log(this.playHead + " " + this.noteArray[this.playHead]);
  this.playSound(this.noteArray[this.playHead]);
  this.updatePlayHead();
  // console.log(this.playHead + " " + this.noteArray[this.playHead]);
  tempoInterval = setInterval(function(){
    this.playSound(this.noteArray[this.playHead]);
    this.updatePlayHead();
    // console.log(this.playHead + " " + this.noteArray[this.playHead]);
  }.bind(this), this.tempoInMS);
};

Sequencer.prototype.stopTrack = function(){
  clearInterval(tempoInterval);
};

Sequencer.prototype.toggleNoteState = function(noteIndex){
  this.noteArray[noteIndex] = !this.noteArray[noteIndex];
};
