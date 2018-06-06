  var drum7 = new Howl({
    src: ['audio/conga-0.4441ms.mp3']
  });

  var drummer7 = new Sequencer(drum7);

  drum7.on("play", function(){
    if($("#rabbit").hasClass("bounceRabbit")
    ){
      $("#rabbit").removeClass("bounceRabbit")
    }
    $("#rabbit").addClass("bounceRabbit");
  });

  drum7.on("end", function(){
    $("#rabbit").removeClass("bounceRabbit");
  });

  $("#mute7").click(function(){
    drummer7.muteTrack();
  });

  $("#d7-1").click(function(){
    drummer7.toggleNoteState(0);
    drummer7.sound.play();
  });

  $("#d7-2").click(function(){
    drummer7.toggleNoteState(1);
    drummer7.sound.play();
  });

  $("#d7-3").click(function(){
    drummer7.toggleNoteState(2);
    drummer7.sound.play();
  });

  $("#d7-4").click(function(){
    drummer7.toggleNoteState(3);
    drummer7.sound.play();
  });

  $("#d7-5").click(function(){
    drummer7.toggleNoteState(4);
    drummer7.sound.play();
  });

  $("#d7-6").click(function(){
    drummer7.toggleNoteState(5);
    drummer7.sound.play();
  });

  $("#d7-7").click(function(){
    drummer7.toggleNoteState(6);
    drummer7.sound.play();
  });

  $("#d7-8").click(function(){
    drummer7.toggleNoteState(7);
    drummer7.sound.play();
  });
  $("#d7-9").click(function(){
    drummer7.toggleNoteState(8);
    drummer7.sound.play();
  });
  $("#d7-10").click(function(){
    drummer7.toggleNoteState(9);
    drummer7.sound.play();
  });

  $("#d7-11").click(function(){
    drummer7.toggleNoteState(10);
    drummer7.sound.play();
  });


  $("#d7-12").click(function(){
    drummer7.toggleNoteState(11);
    drummer7.sound.play();
  });

  $("#d7-13").click(function(){
    drummer7.toggleNoteState(12);
    drummer7.sound.play();
  });

  $("#d7-14").click(function(){
    drummer7.toggleNoteState(13);
    drummer7.sound.play();
  });

  $("#d7-15").click(function(){
    drummer7.toggleNoteState(14);
    drummer7.sound.play();
  });

  $("#d7-16").click(function(){
    drummer7.toggleNoteState(15);
    drummer7.sound.play();
  });
