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
};

var updateBPMDisplay = function() {
  $('#tempoDisplay').text(function(){
    return drummer1.bpm;
  });
};

$('#decreaseTempo10').click(function(){
  drummer1.decreaseTempo(10);
  drummer2.decreaseTempo(10);
  drummer3.decreaseTempo(10);
  drummer4.decreaseTempo(10);
  drummer5.decreaseTempo(10);
  drummer6.decreaseTempo(10);
  drummer7.decreaseTempo(10);
  drummer8.decreaseTempo(10);
  playAllTracksTwice();
  updateBPMDisplay();
});

$('#decreaseTempo1').click(function(){
  drummer1.decreaseTempo(1);
  drummer2.decreaseTempo(1);
  drummer3.decreaseTempo(1);
  drummer4.decreaseTempo(1);
  drummer5.decreaseTempo(1);
  drummer6.decreaseTempo(1);
  drummer7.decreaseTempo(1);
  drummer8.decreaseTempo(1);
  playAllTracksTwice();
  updateBPMDisplay();
});

$('#increaseTempo1').click(function(){
  drummer1.increaseTempo(1);
  drummer2.increaseTempo(1);
  drummer3.increaseTempo(1);
  drummer4.increaseTempo(1);
  drummer5.increaseTempo(1);
  drummer6.increaseTempo(1);
  drummer7.increaseTempo(1);
  drummer8.increaseTempo(1);
  playAllTracksTwice();
  updateBPMDisplay();
});

$('#increaseTempo10').click(function(){
  drummer1.increaseTempo(10);
  drummer2.increaseTempo(10);
  drummer3.increaseTempo(10);
  drummer4.increaseTempo(10);
  drummer5.increaseTempo(10);
  drummer6.increaseTempo(10);
  drummer7.increaseTempo(10);
  drummer8.increaseTempo(10);
  playAllTracksTwice();
  updateBPMDisplay();
});
