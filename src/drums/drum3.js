d3_1 = false
d3_2 = false
d3_3 = false
d3_4 = false
d3_5 = false
d3_6 = false
d3_7 = false
d3_8 = false
d3_9 = false
d3_10 = false
d3_11 = false
d3_12 = false
d3_13 = false
d3_14 = false
d3_15 = false
d3_16 = false


$(document).ready(function(){
  $(window).on('load', function () {

    $("#mute3").change(function(){
      if(this.checked){
        console.log("drum3 has been muted")
      } else {
        console.log("drum3 unmuted")
      }
    });

    $("#d3-1").click(function(){
      changeColor(this, d3_1, 'rgb(130, 237, 234)');
      d3_1 = !d3_1;
    });

    $("#d3-2").click(function(){
      changeColor(this, d3_2, 'rgb(130, 237, 234)');
      d3_2 = !d3_2;
    });

    $("#d3-3").click(function(){
      changeColor(this, d3_3, 'rgb(130, 237, 234)');
      d3_3 = !d3_3;
    });

    $("#d3-4").click(function(){
      changeColor(this, d3_4, 'rgb(130, 237, 234)');
      d3_4 = !d3_4;
    });

    $("#d3-5").click(function(){
      changeColor(this, d3_5, 'rgb(130, 237, 234)');
      d3_5 = !d3_5;
    });

    $("#d3-6").click(function(){
      changeColor(this, d3_6, 'rgb(130, 237, 234)');
      d3_6 = !d3_6;
    });

    $("#d3-7").click(function(){
      changeColor(this, d3_7, 'rgb(130, 237, 234)');
      d3_7 = !d3_7;
    });

    $("#d3-8").click(function(){
      changeColor(this, d3_8, 'rgb(130, 237, 234)');
      d3_8 = !d3_8;
    });

    $("#d3-9").click(function(){
      changeColor(this, d3_9, 'rgb(130, 237, 234)');
      d3_9 = !d3_9;
    });

    $("#d3-10").click(function(){
      changeColor(this, d3_10, 'rgb(130, 237, 234)');
      d3_10 = !d3_10;
    });

    $("#d3-11").click(function(){
      changeColor(this, d3_11, 'rgb(130, 237, 234)');
      d3_11 = !d3_11;
    });


    $("#d3-12").click(function(){
      changeColor(this, d3_12, 'rgb(130, 237, 234)');
      d3_12 = !d3_12;
    });

    $("#d3-13").click(function(){
      changeColor(this, d3_13, 'rgb(130, 237, 234)');
      d3_13 = !d3_13;
    });

    $("#d3-14").click(function(){
      changeColor(this, d3_14, 'rgb(130, 237, 234)');
      d3_14 = !d3_14;
    });

    $("#d3-15").click(function(){
      changeColor(this, d3_15, 'rgb(130, 237, 234)');
      d3_15 = !d3_15;
    });

    $("#d3-16").click(function(){
      changeColor(this, d3_16, 'rgb(130, 237, 234)');
      d3_16 = !d3_16;
    });

  });
});
