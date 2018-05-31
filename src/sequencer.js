function Sequencer(soundObject) {
  this.sound = soundObject;
  this.baseTempoInMS = 500;
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
