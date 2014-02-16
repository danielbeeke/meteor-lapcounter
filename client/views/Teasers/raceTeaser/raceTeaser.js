Template.raceTeaser.helpers({
  player1: function () {
    if (this.player1) {
      return Players.findOne({ _id: this.player1 })
    }
  },

  player2: function () {
    if (this.player2) {
      return Players.findOne({ _id: this.player2 })
    }
  },

  totalLaps: function () {
    var race = this

    if (race && race._id) {
      return Math.max(0, Math.round((Laps.find({ race: race._id }).count() - 1) / 2))
    }
  },

  fastestLap: function () {
    var race = this

    if (race && race._id) {
      var fastestLap = Laps.findOne({ race: race._id, roundTime: {$gt: 0 } }, { sort: { roundTime: 1 }})

      if (fastestLap && fastestLap.roundTime) {
        return fastestLap
      }
    }
  },

  track: function () {
    return Tracks.findOne({ _id: this.track })
  }
})