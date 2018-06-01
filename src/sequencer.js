function Sequencer(soundObject) {
  this.sound = soundObject;
  this.tempoInMS = 125;
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
  this.isPlaying = false;
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
  if (this.isPlaying) {
    this.pauseTrack();
  } else {
    this.isPlaying = true;
    console.log(this.playHead);
    this.playSound(this.noteArray[this.playHead]);
    this.updatePlayHead();
    this.tempoInterval = setInterval(function(){
      console.log(this.playHead);
      this.playSound(this.noteArray[this.playHead]);
      this.updatePlayHead();
    }.bind(this), this.tempoInMS);
  }
};

Sequencer.prototype.stopTrack = function(){
  clearInterval(this.tempoInterval);
  this.playHead = 0;
  this.isPlaying = false;
};

Sequencer.prototype.pauseTrack = function(){
  clearInterval(this.tempoInterval);
  this.isPlaying = false;
};

Sequencer.prototype.toggleNoteState = function(noteIndex){
  this.noteArray[noteIndex] = !this.noteArray[noteIndex];
};
