Meteor.methods({
  add_lap: function (keyCode, raceId) {
    var d = new Date()
    var n = d.getTime() 

    var lastLap = Laps.findOne({ keyCode: keyCode, race: raceId }, {sort: { time: -1 }})

    if (lastLap) {
      var roundTime = n - lastLap.time
    }
    else {
      var roundTime = 0
    }

    Laps.insert({
      time: n,
      roundTime: roundTime,
      race: raceId,
      keyCode: keyCode,
      index: Laps.find({ keyCode: keyCode, race: raceId }).count() + 1
    })
  },

  add_race: function (race) {
    return Races.insert(race)
  },

  add_track: function (title) {
    return Tracks.insert({
      title: title
    })
  },

  add_player: function (player) {
    return Players.insert(player)
  }

})