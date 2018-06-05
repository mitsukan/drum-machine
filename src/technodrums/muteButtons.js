var swapMuteClass = function(mutedID){
  $(mutedID).toggleClass('fa-volume-up');
  $(mutedID).toggleClass('fa-volume-off');
};

$("#mute1").click(function(){
  drummer1.muteTrack();
  swapMuteClass("#mute1");
});

$("#mute2").click(function(){
  drummer2.muteTrack();
  swapMuteClass("#mute2");
});

$("#mute3").click(function(){
  drummer3.muteTrack();
  swapMuteClass("#mute3");
});

$("#mute4").click(function(){
  drummer4.muteTrack();
  swapMuteClass("#mute4");
});

$("#mute5").click(function(){
  drummer5.muteTrack();
  swapMuteClass("#mute5");
});

$("#mute6").click(function(){
  drummer6.muteTrack();
  swapMuteClass("#mute6");
});

$("#mute7").click(function(){
  drummer7.muteTrack();
  swapMuteClass("#mute7");
});

$("#mute8").click(function(){
  drummer8.muteTrack();
  swapMuteClass("#mute8");
});
