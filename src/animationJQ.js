var animalWalk = function(){
  $("#elephantwalk").attr("src", "./gifs/walk/elephantwalk180.gif");
  $("#pandawalk").attr("src", "./gifs/walk/pandawalk130.gif");
  $("#brownbearwalk").attr("src", "./gifs/walk/brownbearwalk120.gif");
  $("#catwalk").attr("src", "./gifs/walk/catwalk85.gif");
  $("#moosewalk").attr("src", "./gifs/walk/moosewalk128.gif");
  $("#pigwalk").attr("src", "./gifs/walk/pigwalk80.gif");
  $("#rabbitwalk").attr("src", "./gifs/walk/rabbitwalk60.gif");
  $("#polarbearwalk").attr("src", "./gifs/walk/polarbearwalk140.gif");
};

var animalStand = function(){
  $("#elephantwalk").attr("src", "./gifs/stand/elephantstand500.gif");
  $("#pandawalk").attr("src", "./gifs/stand/pandastand340.gif");
  $("#brownbearwalk").attr("src", "./gifs/stand/brownbearstand315.gif");
  $("#catwalk").attr("src", "./gifs/stand/catstand200.gif");
  $("#moosewalk").attr("src", "./gifs/stand/moosestand350.gif");
  $("#pigwalk").attr("src", "./gifs/stand/pigstand325.gif");
  $("#rabbitwalk").attr("src", "./gifs/stand/rabbitstand120.gif");
  $("#polarbearwalk").attr("src", "./gifs/stand/polarbearstand360.gif");
};

var animalRun = function(){
  if(counter.bpm >= 200){
    $("#rabbitwalk").attr("src", "./gifs/run/rabbitrun40.gif");
  }else if(counter.bpm >= 190){
    $("#catwalk").attr("src", "./gifs/run/catrun60.gif");
  }else if(counter.bpm >= 180){
    $("#pigwalk").attr("src", "./gifs/run/pigrun90.gif");
  }else if(counter.bpm >= 170){
    $("#pandawalk").attr("src", "./gifs/run/pandarun150.gif");
  }else if(counter.bpm >= 160){
    $("#polarbearwalk").attr("src", "./gifs/run/polarbearrun160.gif");
  }else if(counter.bpm >= 150){
    $("#brownbearwalk").attr("src", "./gifs/run/brownbearrun140.gif");
  }else if(counter.bpm >= 140){
    $("#moosewalk").attr("src", "./gifs/run/mooserun170.gif");
  }else if(counter.bpm >= 130){
    $("#elephantwalk").attr("src", "./gifs/run/elephantrun200.gif");
  }else{
    $("#elephantwalk").attr("src", "./gifs/walk/elephantwalk180.gif");
    $("#pandawalk").attr("src", "./gifs/walk/pandawalk130.gif");
    $("#brownbearwalk").attr("src", "./gifs/walk/brownbearwalk120.gif");
    $("#catwalk").attr("src", "./gifs/walk/catwalk85.gif");
    $("#moosewalk").attr("src", "./gifs/walk/moosewalk128.gif");
    $("#pigwalk").attr("src", "./gifs/walk/pigwalk80.gif");
    $("#rabbitwalk").attr("src", "./gifs/walk/rabbitwalk60.gif");
    $("#polarbearwalk").attr("src", "./gifs/walk/polarbearwalk140.gif");
  }
};

var backgroundGo = function(){
  $('.overlay').addClass("overlayAnimation");
  $('.overlay').css("animation-play-state", "running");
};

var backgroundPause = function(){
  $('.overlay').css("animation-play-state", "paused");
};

var backgroundSpeedUpdate = function(){
  if(counter.bpm >= 200){
    $('.overlayAnimation').css("animation", "10s scroll200 infinite linear");
  }else if(counter.bpm >= 160){
    $('.overlayAnimation').css("animation", "10s scroll160 infinite linear");
  }else if(counter.bpm <= 100){
    $('.overlayAnimation').css("animation", "10s scroll100 infinite linear");
  }else if(counter.bpm <= 60){
    $('.overlayAnimation').css("animation", "10s scroll60 infinite linear");
  }else{
    $('.overlayAnimation').css("animation", "10s scroll infinite linear");
  }
};
