$(window).on('load', function () {

  var counter = new Counter();

  $('#playButton').click(function(){
    counter.playTrack();
  });

  $('#stopButton').click(function(){
    counter.stopTrack();
  });

});
