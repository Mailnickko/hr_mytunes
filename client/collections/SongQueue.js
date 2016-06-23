// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){
      if(this.length < 2) {
        this.playFirst();
      }
    }, this)

    this.on('ended', function() {
      this.remove(this.at(0));
      if(this.at(0)) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song)
    }, this)

  },

  playFirst: function() {
    this.at(0).play();
  },

});