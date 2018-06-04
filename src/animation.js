function footerFlash(arg){
  if(arg === 1){
    $("#f1").removeClass("badge-secondary");
    $("#f2").addClass("badge-secondary");
  }else if(arg === 2){
    $("#f2").removeClass("badge-secondary");
    $("#f3").addClass("badge-secondary");
  }else if(arg === 3){
    $("#f3").removeClass("badge-secondary");
    $("#f4").addClass("badge-secondary");
  }else if(arg === 4){
    $("#f4").removeClass("badge-secondary");
    $("#f5").addClass("badge-secondary");
  }else if(arg === 5){
    $("#f5").removeClass("badge-secondary");
    $("#f6").addClass("badge-secondary");
  }else if(arg === 6){
    $("#f6").removeClass("badge-secondary");
    $("#f7").addClass("badge-secondary");
  }else if(arg === 7){
    $("#f7").removeClass("badge-secondary");
    $("#f8").addClass("badge-secondary");
  }else if(arg === 8){
    $("#f8").removeClass("badge-secondary");
    $("#f9").addClass("badge-secondary");
  }else if(arg === 9){
    $("#f9").removeClass("badge-secondary");
    $("#f10").addClass("badge-secondary");
  }else if(arg === 10){
    $("#f10").removeClass("badge-secondary");
    $("#f11").addClass("badge-secondary");
  }else if(arg === 11){
    $("#f11").removeClass("badge-secondary");
    $("#f12").addClass("badge-secondary");
  }else if(arg === 12){
    $("#f12").removeClass("badge-secondary");
    $("#f13").addClass("badge-secondary");
  }else if(arg === 13){
    $("#f13").removeClass("badge-secondary");
    $("#f14").addClass("badge-secondary");
  }else if(arg === 14){
    $("#f14").removeClass("badge-secondary");
    $("#f15").addClass("badge-secondary");
  }else if(arg === 15){
    $("#f15").removeClass("badge-secondary");
    $("#f16").addClass("badge-secondary");
  }else if(arg === 0){
    $("#f1").addClass("badge-secondary");
    $("#f16").removeClass("badge-secondary");
  }
  // console.log(arg)
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
  // console.log(arg)
}
