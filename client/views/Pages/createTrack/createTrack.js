Template.createTrack.events({
  "click .add_track": function(event, template){
    var title = $(template.find('#title')).val()

    if (title.length) {
      Meteor.call('add_track', title, function (error, trackId) {
        Router.go('track', { _id: trackId });
      })
    }
  },
})
