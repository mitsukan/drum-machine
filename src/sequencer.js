function Sequencer(soundObject) {
  this.sound = soundObject;
  this.baseTempoInMS = 500;
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
}

Sequencer.prototype.playSound = function(){
  this.sound.play();
};

Sequencer.prototype.playTrack = function(){
  this.playSound();
  tempoInterval = setInterval(this.playSound.bind(this), this.baseTempoInMS);
};

Sequencer.prototype.stopTrack = function(){
  clearInterval(tempoInterval);
};

Sequencer.prototype.toggleNoteState = function(noteIndex){
  this.noteArray[noteIndex] = !this.noteArray[noteIndex];
};
