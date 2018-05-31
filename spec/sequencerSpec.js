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


});
