var playAllTracks = function(){
  testDrummer.playTrack();
  testClapper.playTrack();
  testDrummer.playTrack();
  testClapper.playTrack();
};

var updateBPMDisplay = function() {
  $('#tempoDisplay').text(function(){
    return testDrummer.bpm;
  });
};

$('#decreaseTempo10').click(function(){
  testDrummer.decreaseTempo(10);
  testClapper.decreaseTempo(10);
  playAllTracks();
  updateBPMDisplay();
});

$('#decreaseTempo1').click(function(){
  testDrummer.decreaseTempo(1);
  testClapper.decreaseTempo(1);
  playAllTracks();
  updateBPMDisplay();
});

$('#increaseTempo1').click(function(){
  testDrummer.increaseTempo(1);
  testClapper.increaseTempo(1);
  playAllTracks();
  updateBPMDisplay();
});

$('#increaseTempo10').click(function(){
  testDrummer.increaseTempo(10);
  testClapper.increaseTempo(10);
  playAllTracks();
  updateBPMDisplay();
});
