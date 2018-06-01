$(window).on('load', function () {

  var drum6 = new Howl({
    src: ['audio/???.mp3']
  });

  var drummer6 = new Sequencer(drum6);

  $("#mute1").click(function(){
    drummer6.muteTrack();
  });

  $("#d1-1").click(function(){
    drummer6.toggleNoteState(0);
    drummer6.sound.play();
  });

  $("#d1-2").click(function(){
    drummer6.toggleNoteState(1);
    drummer6.sound.play();
  });

  $("#d1-3").click(function(){
    drummer6.toggleNoteState(2);
    drummer6.sound.play();
  });

  $("#d1-4").click(function(){
    drummer6.toggleNoteState(3);
    drummer6.sound.play();
  });

  $("#d1-5").click(function(){
    drummer6.toggleNoteState(4);
    drummer6.sound.play();
  });

  $("#d1-6").click(function(){
    drummer6.toggleNoteState(5);
    drummer6.sound.play();
  });

  $("#d1-7").click(function(){
    drummer6.toggleNoteState(6);
    drummer6.sound.play();
  });

  $("#d1-8").click(function(){
    drummer6.toggleNoteState(7);
    drummer6.sound.play();
  });
  $("#d1-9").click(function(){
    drummer6.toggleNoteState(8);
    drummer6.sound.play();
  });
  $("#d1-10").click(function(){
    drummer6.toggleNoteState(9);
    drummer6.sound.play();
  });

  $("#d1-11").click(function(){
    drummer6.toggleNoteState(10);
    drummer6.sound.play();
  });


  $("#d1-12").click(function(){
    drummer6.toggleNoteState(11);
    drummer6.sound.play();
  });

  $("#d1-13").click(function(){
    drummer6.toggleNoteState(12);
    drummer6.sound.play();
  });

  $("#d1-14").click(function(){
    drummer6.toggleNoteState(13);
    drummer6.sound.play();
  });

  $("#d1-15").click(function(){
    drummer6.toggleNoteState(14);
    drummer6.sound.play();
  });

  $("#d1-16").click(function(){
    drummer6.toggleNoteState(15);
    drummer6.sound.play();
  });

  $('#playButton').click(function(){
    drummer6.playTrack();
  });

  $('#stopButton').click(function(){
    drummer6.stopTrack();
  });

});
