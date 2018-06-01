/// KICK DRUM
var testDrum = new Howl({
  src: ['audio/kick.mp3']
});
var testDrummer = new Sequencer(testDrum);

$('#1-1').click(function(){
  testDrummer.toggleNoteState(0);
});

$('#1-2').click(function(){
  testDrummer.toggleNoteState(1);
});

$('#1-3').click(function(){
  testDrummer.toggleNoteState(2);
});

$('#1-4').click(function(){
  testDrummer.toggleNoteState(3);
});

$('#2-1').click(function(){
  testDrummer.toggleNoteState(4);
});

$('#2-2').click(function(){
  testDrummer.toggleNoteState(5);
});

$('#2-3').click(function(){
  testDrummer.toggleNoteState(6);
});

$('#2-4').click(function(){
  testDrummer.toggleNoteState(7);
});

$('#3-1').click(function(){
  testDrummer.toggleNoteState(8);
});

$('#3-2').click(function(){
  testDrummer.toggleNoteState(9);
});

$('#3-3').click(function(){
  testDrummer.toggleNoteState(10);
});

$('#3-4').click(function(){
  testDrummer.toggleNoteState(11);
});

$('#4-1').click(function(){
  testDrummer.toggleNoteState(12);
});

$('#4-2').click(function(){
  testDrummer.toggleNoteState(13);
});

$('#4-3').click(function(){
  testDrummer.toggleNoteState(14);
});

$('#4-4').click(function(){
  testDrummer.toggleNoteState(15);
});

/// CLAP

var testClap = new Howl({
  src: ['audio/clap.mp3']
});
var testClapper = new Sequencer(testClap);

$('#clap-1').click(function(){
  testClapper.toggleNoteState(0);
});

$('#clap-2').click(function(){
  testClapper.toggleNoteState(1);
});

$('#clap-3').click(function(){
  testClapper.toggleNoteState(2);
});

$('#clap-4').click(function(){
  testClapper.toggleNoteState(3);
});

$('#clap-5').click(function(){
  testClapper.toggleNoteState(4);
});

$('#clap-6').click(function(){
  testClapper.toggleNoteState(5);
});

$('#clap-7').click(function(){
  testClapper.toggleNoteState(6);
});

$('#clap-8').click(function(){
  testClapper.toggleNoteState(7);
});

$('#clap-9').click(function(){
  testClapper.toggleNoteState(8);
});

$('#clap-10').click(function(){
  testClapper.toggleNoteState(9);
});

$('#clap-11').click(function(){
  testClapper.toggleNoteState(10);
});

$('#clap-12').click(function(){
  testClapper.toggleNoteState(11);
});

$('#clap-13').click(function(){
  testClapper.toggleNoteState(12);
});

$('#clap-14').click(function(){
  testClapper.toggleNoteState(13);
});

$('#clap-15').click(function(){
  testClapper.toggleNoteState(14);
});

$('#clap-16').click(function(){
  testClapper.toggleNoteState(15);
});

/// MUTE BUTTONS

$('#muteKick').click(function(){
  testDrummer.muteTrack();
});

$('#muteClap').click(function(){
  testClapper.muteTrack();
});

/// PLAY STOP BUTTONS

$('#playButton').click(function(){
  testDrummer.playTrack();
  testClapper.playTrack();
});

$('#stopButton').click(function(){
  testDrummer.stopTrack();
  console.log('stopped kick');
});

$('#stopButton').click(function(){
  testClapper.stopTrack();
  console.log('stopped clap');
});
