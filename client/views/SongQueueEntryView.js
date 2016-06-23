// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  //change default BB tagName from div to tr (row)
  tagName: 'tr',

  template: _.template('<td><%= title %></td><td><%= artist %></td>'),

  render: function () {
    var SongQueueEntryTemplate = this.template(this.model.attributes);
  return this.$el.html(SongQueueEntryTemplate);

  },

  events: {
    'click' : function(){
      this.model.dequeue(this.model);
    }
  }

});
