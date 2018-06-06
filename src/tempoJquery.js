var playAllTracksTwice = function(){
  drummer1.playTrack();
  drummer1.playTrack();
  drummer2.playTrack();
  drummer2.playTrack();
  drummer3.playTrack();
  drummer3.playTrack();
  drummer4.playTrack();
  drummer4.playTrack();
  drummer5.playTrack();
  drummer5.playTrack();
  drummer6.playTrack();
  drummer6.playTrack();
  drummer7.playTrack();
  drummer7.playTrack();
  drummer8.playTrack();
  drummer8.playTrack();
  counter.playTrack();
  counter.playTrack();
};

var updateBPMDisplay = function() {
  $('#tempoDisplay').text(function(){
    return drummer1.bpm;
  });
};

var backgroundSpeedUpdate = function(){
  if(counter.bpm >= 200){
    $('.overlayAnimation').css("animation", "10s scroll200 infinite linear")
  }else if(counter.bpm >= 160){
    $('.overlayAnimation').css("animation", "10s scroll160 infinite linear")
  }else if(counter.bpm <= 100){
    $('.overlayAnimation').css("animation", "10s scroll100 infinite linear")
  }else if(counter.bpm <= 60){
    $('.overlayAnimation').css("animation", "10s scroll60 infinite linear")
  }else{
    $('.overlayAnimation').css("animation", "10s scroll infinite linear")
  }
}

$('#decreaseTempo10').click(function(){
  resetFlash();
  drummer1.decreaseTempo(10);
  drummer2.decreaseTempo(10);
  drummer3.decreaseTempo(10);
  drummer4.decreaseTempo(10);
  drummer5.decreaseTempo(10);
  drummer6.decreaseTempo(10);
  drummer7.decreaseTempo(10);
  drummer8.decreaseTempo(10);
  counter.decreaseTempo(10);
  playAllTracksTwice();
  updateBPMDisplay();
  backgroundSpeedUpdate();
});

$('#decreaseTempo1').click(function(){
  resetFlash();
  drummer1.decreaseTempo(1);
  drummer2.decreaseTempo(1);
  drummer3.decreaseTempo(1);
  drummer4.decreaseTempo(1);
  drummer5.decreaseTempo(1);
  drummer6.decreaseTempo(1);
  drummer7.decreaseTempo(1);
  drummer8.decreaseTempo(1);
  counter.decreaseTempo(1);
  playAllTracksTwice();
  updateBPMDisplay();
  backgroundSpeedUpdate();
});

$('#increaseTempo1').click(function(){
  resetFlash();
  drummer1.increaseTempo(1);
  drummer2.increaseTempo(1);
  drummer3.increaseTempo(1);
  drummer4.increaseTempo(1);
  drummer5.increaseTempo(1);
  drummer6.increaseTempo(1);
  drummer7.increaseTempo(1);
  drummer8.increaseTempo(1);
  counter.increaseTempo(1);
  playAllTracksTwice();
  updateBPMDisplay();
  backgroundSpeedUpdate();
});

$('#increaseTempo10').click(function(){
  resetFlash();
  drummer1.increaseTempo(10);
  drummer2.increaseTempo(10);
  drummer3.increaseTempo(10);
  drummer4.increaseTempo(10);
  drummer5.increaseTempo(10);
  drummer6.increaseTempo(10);
  drummer7.increaseTempo(10);
  drummer8.increaseTempo(10);
  counter.increaseTempo(10);
  playAllTracksTwice();
  updateBPMDisplay();
  backgroundSpeedUpdate();
});
