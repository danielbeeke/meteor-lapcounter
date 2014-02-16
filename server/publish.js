Meteor.publish(null, function() {
  return Laps.find();
});

Meteor.publish(null, function() {
  return Races.find();
});

Meteor.publish(null, function() {
  return Players.find();
});

Meteor.publish(null, function() {
  return Tracks.find();
});
