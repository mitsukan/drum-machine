$(".left").mouseenter(function(){
  $(this).css("-webkit-filter", "blur(0px)");
  $(this).css("filter", "blur(0px)");
});

$(".left").mouseleave(function(){
   $(this).css("-webkit-filter", "blur(5px)");
   $(this).css("filter", "blur(5px)");
});

$(".right").mouseenter(function(){
  $(this).css("-webkit-filter", "blur(0px)");
  $(this).css("filter", "blur(0px)");
});

$(".right").mouseleave(function(){
   $(this).css("-webkit-filter", "blur(5px)");
   $(this).css("filter", "blur(5px)");
});
