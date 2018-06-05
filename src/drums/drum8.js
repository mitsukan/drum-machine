  var drum8 = new Howl({
    src: ['audio/realCowbell.mp3']
  });

  var drummer8 = new Sequencer(drum8);

  $("#mute8").click(function(){
    drummer8.muteTrack();
  });

  $("#d8-1").click(function(){
    drummer8.toggleNoteState(0);
    drummer8.sound.play();
  });

  $("#d8-2").click(function(){
    drummer8.toggleNoteState(1);
    drummer8.sound.play();
  });

  $("#d8-3").click(function(){
    drummer8.toggleNoteState(2);
    drummer8.sound.play();
  });

  $("#d8-4").click(function(){
    drummer8.toggleNoteState(3);
    drummer8.sound.play();
  });

  $("#d8-5").click(function(){
    drummer8.toggleNoteState(4);
    drummer8.sound.play();
  });

  $("#d8-6").click(function(){
    drummer8.toggleNoteState(5);
    drummer8.sound.play();
  });

  $("#d8-7").click(function(){
    drummer8.toggleNoteState(6);
    drummer8.sound.play();
  });

  $("#d8-8").click(function(){
    drummer8.toggleNoteState(7);
    drummer8.sound.play();
  });
  $("#d8-9").click(function(){
    drummer8.toggleNoteState(8);
    drummer8.sound.play();
  });
  $("#d8-10").click(function(){
    drummer8.toggleNoteState(9);
    drummer8.sound.play();
  });

  $("#d8-11").click(function(){
    drummer8.toggleNoteState(10);
    drummer8.sound.play();
  });


  $("#d8-12").click(function(){
    drummer8.toggleNoteState(11);
    drummer8.sound.play();
  });

  $("#d8-13").click(function(){
    drummer8.toggleNoteState(12);
    drummer8.sound.play();
  });

  $("#d8-14").click(function(){
    drummer8.toggleNoteState(13);
    drummer8.sound.play();
  });

  $("#d8-15").click(function(){
    drummer8.toggleNoteState(14);
    drummer8.sound.play();
  });

  $("#d8-16").click(function(){
    drummer8.toggleNoteState(15);
    drummer8.sound.play();
  });
