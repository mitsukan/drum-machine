$(window).on('load', function () {

  var drum4 = new Howl({
    src: ['audio/???.mp3']
  });

  var drummer4 = new Sequencer(drum4);

  $("#mute1").click(function(){
    drummer4.muteTrack();
  });

  $("#d1-1").click(function(){
    drummer4.toggleNoteState(0);
    drummer4.sound.play();
  });

  $("#d1-2").click(function(){
    drummer4.toggleNoteState(1);
    drummer4.sound.play();
  });

  $("#d1-3").click(function(){
    drummer4.toggleNoteState(2);
    drummer4.sound.play();
  });

  $("#d1-4").click(function(){
    drummer4.toggleNoteState(3);
    drummer4.sound.play();
  });

  $("#d1-5").click(function(){
    drummer4.toggleNoteState(4);
    drummer4.sound.play();
  });

  $("#d1-6").click(function(){
    drummer4.toggleNoteState(5);
    drummer4.sound.play();
  });

  $("#d1-7").click(function(){
    drummer4.toggleNoteState(6);
    drummer4.sound.play();
  });

  $("#d1-8").click(function(){
    drummer4.toggleNoteState(7);
    drummer4.sound.play();
  });
  $("#d1-9").click(function(){
    drummer4.toggleNoteState(8);
    drummer4.sound.play();
  });
  $("#d1-10").click(function(){
    drummer4.toggleNoteState(9);
    drummer4.sound.play();
  });

  $("#d1-11").click(function(){
    drummer4.toggleNoteState(10);
    drummer4.sound.play();
  });


  $("#d1-12").click(function(){
    drummer4.toggleNoteState(11);
    drummer4.sound.play();
  });

  $("#d1-13").click(function(){
    drummer4.toggleNoteState(12);
    drummer4.sound.play();
  });

  $("#d1-14").click(function(){
    drummer4.toggleNoteState(13);
    drummer4.sound.play();
  });

  $("#d1-15").click(function(){
    drummer4.toggleNoteState(14);
    drummer4.sound.play();
  });

  $("#d1-16").click(function(){
    drummer4.toggleNoteState(15);
    drummer4.sound.play();
  });

  $('#playButton').click(function(){
    drummer4.playTrack();
  });

  $('#stopButton').click(function(){
    drummer4.stopTrack();
  });

});
