function Counter() {
  this.bpm = 120;
  this.tempoInMS = 125;
  this.playHead = 0;
  this.isPlaying = false;
}


Counter.prototype.updatePlayHead = function() {
  if (this.playHead === 15) {
    this.playHead = 0;
  } else {
    this.playHead++;
  }
};

Counter.prototype.playTrack = function(){
  if (this.isPlaying) {
    this.pauseTrack();
  } else {
    this.isPlaying = true;
    this.updatePlayHead();
    this.tempoInterval = setInterval(function(){
      console.log(this.playHead);
      footerFlash(this.playHead);
      headerFlash(this.playHead);
      this.updatePlayHead();
    }.bind(this), this.tempoInMS);
  }
};

Counter.prototype.stopTrack = function(){
  clearInterval(this.tempoInterval);
  this.playHead = 0;
  this.isPlaying = false;
};

Counter.prototype.pauseTrack = function(){
  clearInterval(this.tempoInterval);
  this.isPlaying = false;
};

Counter.prototype.convertBpmToMs = function(bpm) {
  var rawMs = (60000 / bpm) / 4;
  var roundedMs = Math.round(rawMs * 10) / 10;
  return roundedMs;
};

Counter.prototype.increaseTempo = function(bpm) {
  this.bpm += bpm;
  this.tempoInMS = this.convertBpmToMs(this.bpm);
  return this.bpm;
};

Counter.prototype.decreaseTempo = function(bpm) {
  this.bpm -= bpm;
  this.tempoInMS = this.convertBpmToMs(this.bpm);
  return this.bpm;
};
