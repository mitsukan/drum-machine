var animalWalk = function(){
  $("#elephantwalk").attr("src", "./gifs/elephantwalk180.gif")
  $("#pandawalk").attr("src", "./gifs/pandawalk130.gif")
  $("#brownbearwalk").attr("src", "./gifs/brownbearwalk120.gif")
  $("#catwalk").attr("src", "./gifs/catwalk85.gif")
  $("#moosewalk").attr("src", "./gifs/moosewalk128.gif")
  $("#pigwalk").attr("src", "./gifs/pigwalk80.gif")
  $("#rabbitwalk").attr("src", "./gifs/rabbitwalk43.gif")
  $("#polarbearstand360").attr("src", "./gifs/polarbearwalk140.gif")
};

var animalStand = function(){
  $("#elephantwalk").attr("src", "./gifs/elephantstand500.gif")
  $("#pandawalk").attr("src", "./gifs/pandastand340.gif")
  $("#brownbearwalk").attr("src", "./gifs/brownbearstand315.gif")
  $("#catwalk").attr("src", "./gifs/catstand200.gif")
  $("#moosewalk").attr("src", "./gifs/moosestand350.gif")
  $("#pigwalk").attr("src", "./gifs/pigstand325.gif")
  $("#rabbitwalk").attr("src", "./gifs/rabbitstand120.gif")
  $("#polarbearstand360").attr("src", "./gifs/polarbearstand360.gif")
}

var backgroundGo = function(){
  $('.overlay').addClass("overlayAnimation");
  $('.overlay').css("animation-play-state", "running")
}

var backgroundPause = function(){
  $('.overlay').css("animation-play-state", "paused")
}

var backgroundSpeedUpdate = function(){
  if(counter.bpm >= 200){
    $('.overlayAnimation').css("animation", "10s scroll200 infinite linear")
  }else if(counter.bpm >= 160){
    $('.overlayAnimation').css("animation", "10s scroll160 infinite linear")
  }else if(counter.bpm <= 100){
    $('.overlayAnimation').css("animation", "10s scroll100 infinite linear")
  }else if(counter.bpm <= 60){
    $('.overlayAnimation').css("animation", "10s scroll60 infinite linear")
  }else{
    $('.overlayAnimation').css("animation", "10s scroll infinite linear")
  }
}
