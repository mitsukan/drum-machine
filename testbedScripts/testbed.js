/// KICK DRUM
var testDrum = new Howl({
  src: ['audio/kick.mp3']
});
var drummer1 = new Sequencer(testDrum);

$('#kick-1').click(function(){
  drummer1.toggleNoteState(0);
});

$('#kick-2').click(function(){
  drummer1.toggleNoteState(1);
});

$('#kick-3').click(function(){
  drummer1.toggleNoteState(2);
});

$('#kick-4').click(function(){
  drummer1.toggleNoteState(3);
});

$('#kick-5').click(function(){
  drummer1.toggleNoteState(4);
});

$('#kick-6').click(function(){
  drummer1.toggleNoteState(5);
});

$('#kick-7').click(function(){
  drummer1.toggleNoteState(6);
});

$('#kick-8').click(function(){
  drummer1.toggleNoteState(7);
});

$('#kick-9').click(function(){
  drummer1.toggleNoteState(8);
});

$('#kick-10').click(function(){
  drummer1.toggleNoteState(9);
});

$('#kick-11').click(function(){
  drummer1.toggleNoteState(10);
});

$('#kick-12').click(function(){
  drummer1.toggleNoteState(11);
});

$('#kick-13').click(function(){
  drummer1.toggleNoteState(12);
});

$('#kick-14').click(function(){
  drummer1.toggleNoteState(13);
});

$('#kick-15').click(function(){
  drummer1.toggleNoteState(14);
});

$('#kick-16').click(function(){
  drummer1.toggleNoteState(15);
});

/// CLAP

var testClap = new Howl({
  src: ['audio/clap-new.mp3']
});
var drummer2 = new Sequencer(testClap);

$('#clap-1').click(function(){
  drummer2.toggleNoteState(0);
});

$('#clap-2').click(function(){
  drummer2.toggleNoteState(1);
});

$('#clap-3').click(function(){
  drummer2.toggleNoteState(2);
});

$('#clap-4').click(function(){
  drummer2.toggleNoteState(3);
});

$('#clap-5').click(function(){
  drummer2.toggleNoteState(4);
});

$('#clap-6').click(function(){
  drummer2.toggleNoteState(5);
});

$('#clap-7').click(function(){
  drummer2.toggleNoteState(6);
});

$('#clap-8').click(function(){
  drummer2.toggleNoteState(7);
});

$('#clap-9').click(function(){
  drummer2.toggleNoteState(8);
});

$('#clap-10').click(function(){
  drummer2.toggleNoteState(9);
});

$('#clap-11').click(function(){
  drummer2.toggleNoteState(10);
});

$('#clap-12').click(function(){
  drummer2.toggleNoteState(11);
});

$('#clap-13').click(function(){
  drummer2.toggleNoteState(12);
});

$('#clap-14').click(function(){
  drummer2.toggleNoteState(13);
});

$('#clap-15').click(function(){
  drummer2.toggleNoteState(14);
});

$('#clap-16').click(function(){
  drummer2.toggleNoteState(15);
});

/// SNARE

var testSnare = new Howl({
  src: ['audio/snare.mp3']
});
var drummer3 = new Sequencer(testSnare);

$('#snare-1').click(function(){
  drummer3.toggleNoteState(0);
});

$('#snare-2').click(function(){
  drummer3.toggleNoteState(1);
});

$('#snare-3').click(function(){
  drummer3.toggleNoteState(2);
});

$('#snare-4').click(function(){
  drummer3.toggleNoteState(3);
});

$('#snare-5').click(function(){
  drummer3.toggleNoteState(4);
});

$('#snare-6').click(function(){
  drummer3.toggleNoteState(5);
});

$('#snare-7').click(function(){
  drummer3.toggleNoteState(6);
});

$('#snare-8').click(function(){
  drummer3.toggleNoteState(7);
});

$('#snare-9').click(function(){
  drummer3.toggleNoteState(8);
});

$('#snare-10').click(function(){
  drummer3.toggleNoteState(9);
});

$('#snare-11').click(function(){
  drummer3.toggleNoteState(10);
});

$('#snare-12').click(function(){
  drummer3.toggleNoteState(11);
});

$('#snare-13').click(function(){
  drummer3.toggleNoteState(12);
});

$('#snare-14').click(function(){
  drummer3.toggleNoteState(13);
});

$('#snare-15').click(function(){
  drummer3.toggleNoteState(14);
});

$('#snare-16').click(function(){
  drummer3.toggleNoteState(15);
});

/// MUTE BUTTONS

$('#muteKick').click(function(){
  drummer1.muteTrack();
});

$('#muteClap').click(function(){
  drummer2.muteTrack();
});

$('#muteSnare').click(function(){
  drummer3.muteTrack();
});

$('#muteClosedHat').click(function(){
  drummer4.muteTrack();
});

$('#muteOpenHat').click(function(){
  drummer5.muteTrack();
});

$('#muteCowbell').click(function(){
  drummer6.muteTrack();
});

/// PLAY STOP BUTTONS

$('#playButton').click(function(){
  drummer1.playTrack();
  drummer2.playTrack();
  drummer3.playTrack();
  if (drummer1.isPlaying) {
    $('#playButton').text('Pause');
  } else {
    $('#playButton').text('Play');
  }
});

$('#stopButton').click(function(){
  drummer1.stopTrack();
  console.log('stopped kick');
});

$('#stopButton').click(function(){
  drummer2.stopTrack();
  console.log('stopped clap');
});
