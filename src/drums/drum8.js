$(window).on('load', function () {

  var drum8 = new Howl({
    src: ['audio/???.mp3']
  });

  var drummer8 = new Sequencer(drum8);

  $("#mute1").click(function(){
    drummer8.muteTrack();
  });

  $("#d1-1").click(function(){
    drummer8.toggleNoteState(0);
    drummer8.sound.play();
  });

  $("#d1-2").click(function(){
    drummer8.toggleNoteState(1);
    drummer8.sound.play();
  });

  $("#d1-3").click(function(){
    drummer8.toggleNoteState(2);
    drummer8.sound.play();
  });

  $("#d1-4").click(function(){
    drummer8.toggleNoteState(3);
    drummer8.sound.play();
  });

  $("#d1-5").click(function(){
    drummer8.toggleNoteState(4);
    drummer8.sound.play();
  });

  $("#d1-6").click(function(){
    drummer8.toggleNoteState(5);
    drummer8.sound.play();
  });

  $("#d1-7").click(function(){
    drummer8.toggleNoteState(6);
    drummer8.sound.play();
  });

  $("#d1-8").click(function(){
    drummer8.toggleNoteState(7);
    drummer8.sound.play();
  });
  $("#d1-9").click(function(){
    drummer8.toggleNoteState(8);
    drummer8.sound.play();
  });
  $("#d1-10").click(function(){
    drummer8.toggleNoteState(9);
    drummer8.sound.play();
  });

  $("#d1-11").click(function(){
    drummer8.toggleNoteState(10);
    drummer8.sound.play();
  });


  $("#d1-12").click(function(){
    drummer8.toggleNoteState(11);
    drummer8.sound.play();
  });

  $("#d1-13").click(function(){
    drummer8.toggleNoteState(12);
    drummer8.sound.play();
  });

  $("#d1-14").click(function(){
    drummer8.toggleNoteState(13);
    drummer8.sound.play();
  });

  $("#d1-15").click(function(){
    drummer8.toggleNoteState(14);
    drummer8.sound.play();
  });

  $("#d1-16").click(function(){
    drummer8.toggleNoteState(15);
    drummer8.sound.play();
  });

  $('#playButton').click(function(){
    drummer8.playTrack();
  });

  $('#stopButton').click(function(){
    drummer8.stopTrack();
  });

});
