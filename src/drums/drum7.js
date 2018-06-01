$(window).on('load', function () {

  var drum7 = new Howl({
    src: ['audio/???.mp3']
  });

  var drummer7 = new Sequencer(drum7);

  $("#mute1").click(function(){
    drummer7.muteTrack();
  });

  $("#d1-1").click(function(){
    drummer7.toggleNoteState(0);
    drummer7.sound.play();
  });

  $("#d1-2").click(function(){
    drummer7.toggleNoteState(1);
    drummer7.sound.play();
  });

  $("#d1-3").click(function(){
    drummer7.toggleNoteState(2);
    drummer7.sound.play();
  });

  $("#d1-4").click(function(){
    drummer7.toggleNoteState(3);
    drummer7.sound.play();
  });

  $("#d1-5").click(function(){
    drummer7.toggleNoteState(4);
    drummer7.sound.play();
  });

  $("#d1-6").click(function(){
    drummer7.toggleNoteState(5);
    drummer7.sound.play();
  });

  $("#d1-7").click(function(){
    drummer7.toggleNoteState(6);
    drummer7.sound.play();
  });

  $("#d1-8").click(function(){
    drummer7.toggleNoteState(7);
    drummer7.sound.play();
  });
  $("#d1-9").click(function(){
    drummer7.toggleNoteState(8);
    drummer7.sound.play();
  });
  $("#d1-10").click(function(){
    drummer7.toggleNoteState(9);
    drummer7.sound.play();
  });

  $("#d1-11").click(function(){
    drummer7.toggleNoteState(10);
    drummer7.sound.play();
  });


  $("#d1-12").click(function(){
    drummer7.toggleNoteState(11);
    drummer7.sound.play();
  });

  $("#d1-13").click(function(){
    drummer7.toggleNoteState(12);
    drummer7.sound.play();
  });

  $("#d1-14").click(function(){
    drummer7.toggleNoteState(13);
    drummer7.sound.play();
  });

  $("#d1-15").click(function(){
    drummer7.toggleNoteState(14);
    drummer7.sound.play();
  });

  $("#d1-16").click(function(){
    drummer7.toggleNoteState(15);
    drummer7.sound.play();
  });

  $('#playButton').click(function(){
    drummer7.playTrack();
  });

  $('#stopButton').click(function(){
    drummer7.stopTrack();
  });

});
