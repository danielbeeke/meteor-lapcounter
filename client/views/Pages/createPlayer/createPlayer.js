Template.createPlayer.events({
  "click .add_player": function(event, template){
    var player = {
      name: $(template.find('#name')).val(),
    }

    if (player.name) {
      Meteor.call('add_player', player, function (error, playerId) {
        Router.go('player', {_id: playerId });
      })
    }
  },
})
