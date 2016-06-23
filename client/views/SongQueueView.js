// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    var domElement = this.$el.html('');
    this.collection.each(function(model) {
      var songEntryView = new SongQueueEntryView({model: model}).render();
    })
    return this.$el;
  }

});
