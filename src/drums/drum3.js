$(window).on('load', function () {

  var drum3 = new Howl({
    src: ['audio/???.mp3']
  });

  var drummer3 = new Sequencer(drum3);

  $("#mute1").click(function(){
    drummer3.muteTrack();
  });

  $("#d1-1").click(function(){
    drummer3.toggleNoteState(0);
    drummer3.sound.play();
  });

  $("#d1-2").click(function(){
    drummer3.toggleNoteState(1);
    drummer3.sound.play();
  });

  $("#d1-3").click(function(){
    drummer3.toggleNoteState(2);
    drummer3.sound.play();
  });

  $("#d1-4").click(function(){
    drummer3.toggleNoteState(3);
    drummer3.sound.play();
  });

  $("#d1-5").click(function(){
    drummer3.toggleNoteState(4);
    drummer3.sound.play();
  });

  $("#d1-6").click(function(){
    drummer3.toggleNoteState(5);
    drummer3.sound.play();
  });

  $("#d1-7").click(function(){
    drummer3.toggleNoteState(6);
    drummer3.sound.play();
  });

  $("#d1-8").click(function(){
    drummer3.toggleNoteState(7);
    drummer3.sound.play();
  });
  $("#d1-9").click(function(){
    drummer3.toggleNoteState(8);
    drummer3.sound.play();
  });
  $("#d1-10").click(function(){
    drummer3.toggleNoteState(9);
    drummer3.sound.play();
  });

  $("#d1-11").click(function(){
    drummer3.toggleNoteState(10);
    drummer3.sound.play();
  });


  $("#d1-12").click(function(){
    drummer3.toggleNoteState(11);
    drummer3.sound.play();
  });

  $("#d1-13").click(function(){
    drummer3.toggleNoteState(12);
    drummer3.sound.play();
  });

  $("#d1-14").click(function(){
    drummer3.toggleNoteState(13);
    drummer3.sound.play();
  });

  $("#d1-15").click(function(){
    drummer3.toggleNoteState(14);
    drummer3.sound.play();
  });

  $("#d1-16").click(function(){
    drummer3.toggleNoteState(15);
    drummer3.sound.play();
  });

  $('#playButton').click(function(){
    drummer3.playTrack();
  });

  $('#stopButton').click(function(){
    drummer3.stopTrack();
  });

});
