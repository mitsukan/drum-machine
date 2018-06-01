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
    testSequencer.tempoInMS = 500;
    jasmine.clock().install();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('is instantiated with a sound object', function(){
    expect(testSequencer.sound).toEqual(testSound);
  });

  describe('updatePlayHead', function(){
    it('resets playHead back to 0 after 16 times', function(){
      testSequencer.playHead = 15;
      testSequencer.updatePlayHead();
      expect(testSequencer.playHead).toEqual(0);
    });

    it('increments the playHead by 1 every time its called', function(){
      spyOn(testSound, 'play');
      testSequencer.updatePlayHead();
      // console.log(testSequencer.playHead);
      expect(testSequencer.playHead).toEqual(1);
      testSequencer.updatePlayHead();
      // console.log(testSequencer.playHead);
      testSequencer.updatePlayHead();
      // console.log(testSequencer.playHead);
      expect(testSequencer.playHead).toEqual(3);
    });
  });

  describe('playSound', function(){
    it('calls play on the sound object when arg is true', function(){
      spyOn(testSound, 'play');
      testSequencer.playSound(true);
      expect(testSequencer.sound.play).toHaveBeenCalled();
    });

    it('doesnt play if arg is false', function(){
      spyOn(testSound, 'play');
      testSequencer.playSound(false);
      expect(testSequencer.sound.play).not.toHaveBeenCalled();
    });
  });

  describe('playTrack', function(){
    it('sets isPlaying to true', function(){
      testSequencer.playTrack();
      expect(testSequencer.isPlaying).toBe(true);
    });

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

    it('calls playSound with the correct argument from noteArray', function(){
      spyOn(testSequencer, 'playSound');
      testSequencer.toggleNoteState(1);
      testSequencer.playTrack();
      expect(testSequencer.playSound).toHaveBeenCalledWith(false);
      jasmine.clock().tick(501);
      expect(testSequencer.playSound).toHaveBeenCalledWith(true);
    });

    it('pauses if called while track is playing', function(){
      spyOn(testSequencer, 'pauseTrack');
      testSequencer.playTrack();
      testSequencer.playTrack();
      expect(testSequencer.pauseTrack).toHaveBeenCalled();
    });
  });

  describe('pauseTrack', function(){
    it('stops the calls to playSound', function(){
      spyOn(testSequencer, 'playSound');
      testSequencer.playTrack();
      jasmine.clock().tick(501);
      expect(testSequencer.playSound).toHaveBeenCalledTimes(2);
      testSequencer.pauseTrack();
      jasmine.clock().tick(5000);
      expect(testSequencer.playSound).toHaveBeenCalledTimes(2);
    });

    it('resets isPlaying when called', function(){
      testSequencer.playTrack();
      testSequencer.pauseTrack();
      expect(testSequencer.isPlaying).toBe(false);
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

    it('resets the playHead', function(){
      testSequencer.playTrack();
      jasmine.clock().tick(1000);
      testSequencer.stopTrack();
      expect(testSequencer.playHead).toEqual(0);
    });

    it('resets isPlaying when called', function(){
      testSequencer.playTrack();
      testSequencer.stopTrack();
      expect(testSequencer.isPlaying).toBe(false);
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
      expect(testSequencer.noteArray[5]).toBe(false);
    });
  });




});
