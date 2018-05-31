describe('Sequencer', function(){
  var testSequencer;
  var testSound;

  beforeEach(function(){
    testSound = {
      play: function(){
        return true;
      }
    };
    testSequencer = new Sequencer(testSound);
    jasmine.clock().install();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('is instantiated with a sound object', function(){
    expect(testSequencer.sound).toEqual(testSound);
  });

  describe('playSound', function(){
    it('calls play on the sound object', function(){
      spyOn(testSound, 'play');
      testSequencer.playSound();
      expect(testSequencer.sound.play).toHaveBeenCalled();
    });
  });

  describe('playTrack', function(){
    it('calls playSound once at the start', function(){
      spyOn(testSequencer, 'playSound');
      testSequencer.playTrack();
      expect(testSequencer.playSound).toHaveBeenCalled();
    });

    it('calls playSound every 500 ms (120bpm)', function(){
      spyOn(testSequencer, 'playSound');
      testSequencer.playTrack();
      jasmine.clock().tick(501);
      expect(testSequencer.playSound).toHaveBeenCalledTimes(2);
    });
  });

  describe('stopTrack', function(){
    it('stops the calls to playSound', function(){
      spyOn(testSequencer, 'playSound');
      testSequencer.playTrack();
      jasmine.clock().tick(501);
      expect(testSequencer.playSound).toHaveBeenCalledTimes(2);
      testSequencer.stopTrack();
      jasmine.clock().tick(5000);
      expect(testSequencer.playSound).toHaveBeenCalledTimes(2);
    });
  });

  describe('toggleNoteState', function(){
    it('toggles the state of the note at the index passed as arg (0)', function(){
      testSequencer.toggleNoteState(0);
      expect(testSequencer.noteArray[0]).toBe(true);
    });

    it('toggles the state of the note at the index passed as arg (4)', function(){
      testSequencer.toggleNoteState(4);
      expect(testSequencer.noteArray[4]).toBe(true);
    });
  });


});
