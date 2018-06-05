  var drum2 = new Howl({
    src: ['audio/clap-new-[AudioTrimmer.com].mp3']
  });

  var drummer2 = new Sequencer(drum2);

  drum2.on("play", function(){
    if($("#cat").hasClass("bouncebear")
    ){
      $("#cat").removeClass("bouncebear")
    }
    $("#cat").addClass("bouncebear");
  });

  drum2.on("end", function(){
    $("#cat").removeClass("bouncebear");
  });

  $("#mute2").click(function(){
    drummer2.muteTrack();
  });

  $("#d2-1").click(function(){
    drummer2.toggleNoteState(0);
    drummer2.sound.play();
  });

  $("#d2-2").click(function(){
    drummer2.toggleNoteState(1);
    drummer2.sound.play();
  });

  $("#d2-3").click(function(){
    drummer2.toggleNoteState(2);
    drummer2.sound.play();
  });

  $("#d2-4").click(function(){
    drummer2.toggleNoteState(3);
    drummer2.sound.play();
  });

  $("#d2-5").click(function(){
    drummer2.toggleNoteState(4);
    drummer2.sound.play();
  });

  $("#d2-6").click(function(){
    drummer2.toggleNoteState(5);
    drummer2.sound.play();
  });

  $("#d2-7").click(function(){
    drummer2.toggleNoteState(6);
    drummer2.sound.play();
  });

  $("#d2-8").click(function(){
    drummer2.toggleNoteState(7);
    drummer2.sound.play();
  });
  $("#d2-9").click(function(){
    drummer2.toggleNoteState(8);
    drummer2.sound.play();
  });
  $("#d2-10").click(function(){
    drummer2.toggleNoteState(9);
    drummer2.sound.play();
  });

  $("#d2-11").click(function(){
    drummer2.toggleNoteState(10);
    drummer2.sound.play();
  });


  $("#d2-12").click(function(){
    drummer2.toggleNoteState(11);
    drummer2.sound.play();
  });

  $("#d2-13").click(function(){
    drummer2.toggleNoteState(12);
    drummer2.sound.play();
  });

  $("#d2-14").click(function(){
    drummer2.toggleNoteState(13);
    drummer2.sound.play();
  });

  $("#d2-15").click(function(){
    drummer2.toggleNoteState(14);
    drummer2.sound.play();
  });

  $("#d2-16").click(function(){
    drummer2.toggleNoteState(15);
    drummer2.sound.play();
  });
