d5_1 = false
d5_2 = false
d5_3 = false
d5_4 = false
d5_5 = false
d5_6 = false
d5_7 = false
d5_8 = false
d5_9 = false
d5_10 = false
d5_11 = false
d5_12 = false
d5_13 = false
d5_14 = false
d5_15 = false
d5_16 = false


$(document).ready(function(){
  $(window).on('load', function () {

    $("#mute5").change(function(){
      if(this.checked){
        console.log("drum5 has been muted")
      } else {
        console.log("drum5 unmuted")
      }
    });

    $("#d5-1").click(function(){
      changeColor(this, d5_1, 'rgb(235, 235, 108)');
      d5_1 = !d5_1;
    });

    $("#d5-2").click(function(){
      changeColor(this, d5_2, 'rgb(235, 235, 108)');
      d5_2 = !d5_2;
    });

    $("#d5-3").click(function(){
      changeColor(this, d5_3, 'rgb(235, 235, 108)');
      d5_3 = !d5_3;
    });

    $("#d5-4").click(function(){
      changeColor(this, d5_4, 'rgb(235, 235, 108)');
      d5_4 = !d5_4;
    });

    $("#d5-5").click(function(){
      changeColor(this, d5_5, 'rgb(235, 235, 108)');
      d5_5 = !d5_5;
    });

    $("#d5-6").click(function(){
      changeColor(this, d5_6, 'rgb(235, 235, 108)');
      d5_6 = !d5_6;
    });

    $("#d5-7").click(function(){
      changeColor(this, d5_7, 'rgb(235, 235, 108)');
      d5_7 = !d5_7;
    });

    $("#d5-8").click(function(){
      changeColor(this, d5_8, 'rgb(235, 235, 108)');
      d5_8 = !d5_8;
    });

    $("#d5-9").click(function(){
      changeColor(this, d5_9, 'rgb(235, 235, 108)');
      d5_9 = !d5_9;
    });

    $("#d5-10").click(function(){
      changeColor(this, d5_10, 'rgb(235, 235, 108)');
      d5_10 = !d5_10;
    });

    $("#d5-11").click(function(){
      changeColor(this, d5_11, 'rgb(235, 235, 108)');
      d5_11 = !d5_11;
    });


    $("#d5-12").click(function(){
      changeColor(this, d5_12, 'rgb(235, 235, 108)');
      d5_12 = !d5_12;
    });

    $("#d5-13").click(function(){
      changeColor(this, d5_13, 'rgb(235, 235, 108)');
      d5_13 = !d5_13;
    });

    $("#d5-14").click(function(){
      changeColor(this, d5_14, 'rgb(235, 235, 108)');
      d5_14 = !d5_14;
    });

    $("#d5-15").click(function(){
      changeColor(this, d5_15, 'rgb(235, 235, 108)');
      d5_15 = !d5_15;
    });

    $("#d5-16").click(function(){
      changeColor(this, d5_16, 'rgb(235, 235, 108)');
      d5_16 = !d5_16;
    });

  });
});
