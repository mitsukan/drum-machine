function Counter() {
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
      console.log(this.playHead)
      footerFlash(this.playHead)
      headerFlash(this.playHead)
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
