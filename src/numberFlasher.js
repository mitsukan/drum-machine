function footerFlash(arg){
  if (arg === 0) {
    $("#f16").removeClass("badge-secondary");
    $("#f1").addClass("badge-secondary");
  } else {
    $("#f" + (arg + 1).toString()).addClass("badge-secondary");
    $("#f" + arg.toString()).removeClass("badge-secondary");
  }
}

function headerFlash(arg){
  if(arg === 4){
    $("#h1").removeClass("badge-secondary");
    $("#h2").addClass("badge-secondary");
  }else if(arg === 8){
    $("#h2").removeClass("badge-secondary");
    $("#h3").addClass("badge-secondary");
  }else if(arg === 12){
    $("#h3").removeClass("badge-secondary");
    $("#h4").addClass("badge-secondary");
  }else if(arg === 0){
    $("#h4").removeClass("badge-secondary");
    $("#h1").addClass("badge-secondary");
  }
}

function resetFlash(){
  var i;
  for (i = 1; i < 17; i++) {
    $("#h" + i.toString()).removeClass("badge-secondary");
    $("#f" + i.toString()).removeClass("badge-secondary");
  }
}

function resetH1F1(){
  $("#h1").addClass("badge-secondary");
  $("#f1").addClass("badge-secondary");
}
