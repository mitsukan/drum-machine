$('#decreaseTempo10').click(function(){
  testDrummer.decreaseTempo(10);
  testClapper.decreaseTempo(10);
  testDrummer.playTrack();
  testClapper.playTrack();
  testDrummer.playTrack();
  testClapper.playTrack();
  $('#tempoDisplay').text(function(){
    return testDrummer.bpm;
  });
});

$('#decreaseTempo1').click(function(){
  testDrummer.decreaseTempo(1);
  testClapper.decreaseTempo(1);
  testDrummer.playTrack();
  testClapper.playTrack();
  testDrummer.playTrack();
  testClapper.playTrack();
  $('#tempoDisplay').text(function(){
    return testDrummer.bpm;
  });
});

$('#increaseTempo1').click(function(){
  testDrummer.increaseTempo(1);
  testClapper.increaseTempo(1);
  testDrummer.playTrack();
  testClapper.playTrack();
  testDrummer.playTrack();
  testClapper.playTrack();
  $('#tempoDisplay').text(function(){
    return testDrummer.bpm;
  });
});

$('#increaseTempo10').click(function(){
  testDrummer.increaseTempo(10);
  testClapper.increaseTempo(10);
  testDrummer.playTrack();
  testClapper.playTrack();
  testDrummer.playTrack();
  testClapper.playTrack();
  $('#tempoDisplay').text(function(){
    return testDrummer.bpm;
  });
});
