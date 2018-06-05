  var drum6 = new Howl({
    src: ['audio/cowbell.mp3']
  });

  var drummer6 = new Sequencer(drum6);

  $("#mute6").click(function(){
    drummer6.muteTrack();
  });

  $("#d6-1").click(function(){
    drummer6.toggleNoteState(0);
    drummer6.sound.play();
  });

  $("#d6-2").click(function(){
    drummer6.toggleNoteState(1);
    drummer6.sound.play();
  });

  $("#d6-3").click(function(){
    drummer6.toggleNoteState(2);
    drummer6.sound.play();
  });

  $("#d6-4").click(function(){
    drummer6.toggleNoteState(3);
    drummer6.sound.play();
  });

  $("#d6-5").click(function(){
    drummer6.toggleNoteState(4);
    drummer6.sound.play();
  });

  $("#d6-6").click(function(){
    drummer6.toggleNoteState(5);
    drummer6.sound.play();
  });

  $("#d6-7").click(function(){
    drummer6.toggleNoteState(6);
    drummer6.sound.play();
  });

  $("#d6-8").click(function(){
    drummer6.toggleNoteState(7);
    drummer6.sound.play();
  });
  $("#d6-9").click(function(){
    drummer6.toggleNoteState(8);
    drummer6.sound.play();
  });
  $("#d6-10").click(function(){
    drummer6.toggleNoteState(9);
    drummer6.sound.play();
  });

  $("#d6-11").click(function(){
    drummer6.toggleNoteState(10);
    drummer6.sound.play();
  });


  $("#d6-12").click(function(){
    drummer6.toggleNoteState(11);
    drummer6.sound.play();
  });

  $("#d6-13").click(function(){
    drummer6.toggleNoteState(12);
    drummer6.sound.play();
  });

  $("#d6-14").click(function(){
    drummer6.toggleNoteState(13);
    drummer6.sound.play();
  });

  $("#d6-15").click(function(){
    drummer6.toggleNoteState(14);
    drummer6.sound.play();
  });

  $("#d6-16").click(function(){
    drummer6.toggleNoteState(15);
    drummer6.sound.play();
  });
