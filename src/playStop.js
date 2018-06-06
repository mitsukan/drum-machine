var playPauseSwitcher = function() {
  if (drummer1.isPlaying) {
    $('#playButton').html("<i class='fa fa-pause'></i>");
  } else {
    $('#playButton').html("<i class='fa fa-play'></i>");
  }
};

var counter = new Counter();

$('#playButton').click(function(){
  if (drummer1.isPlaying === false) {
    resetFlash();
  }
  drummer1.playTrack();
  drummer2.playTrack();
  drummer3.playTrack();
  drummer4.playTrack();
  drummer5.playTrack();
  drummer6.playTrack();
  drummer7.playTrack();
  drummer8.playTrack();
  counter.playTrack();
  playPauseSwitcher();
  animalWalk();
  backgroundGo();
});

$('#stopButton').click(function(){
  drummer1.stopTrack();
  drummer2.stopTrack();
  drummer3.stopTrack();
  drummer4.stopTrack();
  drummer5.stopTrack();
  drummer6.stopTrack();
  drummer7.stopTrack();
  drummer8.stopTrack();
  counter.stopTrack();
  playPauseSwitcher();
  resetFlash();
  resetH1F1();
  animalStand();
  backgroundPause();
});
