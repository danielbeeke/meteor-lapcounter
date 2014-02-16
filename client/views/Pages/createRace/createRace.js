Template.createRace.events({
  "click .add_race": function(event, template){
    var race = {
      title: $(template.find('#title')).val(),
      track: $(template.find('[name="tracks"]:checked')).val(),
      player1: $(template.find('[name="player1"]:checked')).val(),
      player2: $(template.find('[name="player2"]:checked')).val()
    }

    if (race.title && race.track && race.player1 && race.player2) {
      Meteor.call('add_race', race, function (error, raceId) {
        Router.go('race', {_id: raceId });
      })
    }
  },
})

Template.createRace.helpers({
  tracks: function () {
    return Tracks.find()
  },

  players: function () {
    return Players.find()
  }
})