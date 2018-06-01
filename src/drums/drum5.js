$(window).on('load', function () {

  var drum5 = new Howl({
    src: ['audio/???.mp3']
  });

  var drummer5 = new Sequencer(drum5);

  $("#mute1").click(function(){
    drummer5.muteTrack();
  });

  $("#d1-1").click(function(){
    drummer5.toggleNoteState(0);
    drummer5.sound.play();
  });

  $("#d1-2").click(function(){
    drummer5.toggleNoteState(1);
    drummer5.sound.play();
  });

  $("#d1-3").click(function(){
    drummer5.toggleNoteState(2);
    drummer5.sound.play();
  });

  $("#d1-4").click(function(){
    drummer5.toggleNoteState(3);
    drummer5.sound.play();
  });

  $("#d1-5").click(function(){
    drummer5.toggleNoteState(4);
    drummer5.sound.play();
  });

  $("#d1-6").click(function(){
    drummer5.toggleNoteState(5);
    drummer5.sound.play();
  });

  $("#d1-7").click(function(){
    drummer5.toggleNoteState(6);
    drummer5.sound.play();
  });

  $("#d1-8").click(function(){
    drummer5.toggleNoteState(7);
    drummer5.sound.play();
  });
  $("#d1-9").click(function(){
    drummer5.toggleNoteState(8);
    drummer5.sound.play();
  });
  $("#d1-10").click(function(){
    drummer5.toggleNoteState(9);
    drummer5.sound.play();
  });

  $("#d1-11").click(function(){
    drummer5.toggleNoteState(10);
    drummer5.sound.play();
  });


  $("#d1-12").click(function(){
    drummer5.toggleNoteState(11);
    drummer5.sound.play();
  });

  $("#d1-13").click(function(){
    drummer5.toggleNoteState(12);
    drummer5.sound.play();
  });

  $("#d1-14").click(function(){
    drummer5.toggleNoteState(13);
    drummer5.sound.play();
  });

  $("#d1-15").click(function(){
    drummer5.toggleNoteState(14);
    drummer5.sound.play();
  });

  $("#d1-16").click(function(){
    drummer5.toggleNoteState(15);
    drummer5.sound.play();
  });

  $('#playButton').click(function(){
    drummer5.playTrack();
  });

  $('#stopButton').click(function(){
    drummer5.stopTrack();
  });

});
