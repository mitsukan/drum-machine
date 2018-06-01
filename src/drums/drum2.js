$(window).on('load', function () {

  var drum2 = new Howl({
    src: ['audio/kick.mp3']
  });

  var drummer2 = new Sequencer(drum2);

  $("#mute1").click(function(){
    drummer2.muteTrack();
  });

  $("#d1-1").click(function(){
    drummer2.toggleNoteState(0);
    drummer2.sound.play();
  });

  $("#d1-2").click(function(){
    drummer2.toggleNoteState(1);
    drummer2.sound.play();
  });

  $("#d1-3").click(function(){
    drummer2.toggleNoteState(2);
    drummer2.sound.play();
  });

  $("#d1-4").click(function(){
    drummer2.toggleNoteState(3);
    drummer2.sound.play();
  });

  $("#d1-5").click(function(){
    drummer2.toggleNoteState(4);
    drummer2.sound.play();
  });

  $("#d1-6").click(function(){
    drummer2.toggleNoteState(5);
    drummer2.sound.play();
  });

  $("#d1-7").click(function(){
    drummer2.toggleNoteState(6);
    drummer2.sound.play();
  });

  $("#d1-8").click(function(){
    drummer2.toggleNoteState(7);
    drummer2.sound.play();
  });
  $("#d1-9").click(function(){
    drummer2.toggleNoteState(8);
    drummer2.sound.play();
  });
  $("#d1-10").click(function(){
    drummer2.toggleNoteState(9);
    drummer2.sound.play();
  });

  $("#d1-11").click(function(){
    drummer2.toggleNoteState(10);
    drummer2.sound.play();
  });


  $("#d1-12").click(function(){
    drummer2.toggleNoteState(11);
    drummer2.sound.play();
  });

  $("#d1-13").click(function(){
    drummer2.toggleNoteState(12);
    drummer2.sound.play();
  });

  $("#d1-14").click(function(){
    drummer2.toggleNoteState(13);
    drummer2.sound.play();
  });

  $("#d1-15").click(function(){
    drummer2.toggleNoteState(14);
    drummer2.sound.play();
  });

  $("#d1-16").click(function(){
    drummer2.toggleNoteState(15);
    drummer2.sound.play();
  });

  $('#playButton').click(function(){
    drummer2.playTrack();
  });

  $('#stopButton').click(function(){
    drummer2.stopTrack();
  });

});
