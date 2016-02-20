Template.race.helpers({
  player: function (keyCode) {
    return { keyCode: keyCode }
  },

  track: function () {
    return Tracks.findOne({ _id: this.track })
  },

  player1: function () {
    return Players.findOne({ _id: this.player1 })
  },

  player2: function () {
    return Players.findOne({ _id: this.player2 })
  }
})

Template.race.rendered = function() {
  $('body:not(".attached")').addClass('attached').on('keyup',function(event) {
    var race = Router.current().data()

    console.log(event.keyCode)

    if (event.keyCode == 49 || event.keyCode == 50) {
      Meteor.call('add_lap', event.keyCode, race._id)
    }
  })
} 


