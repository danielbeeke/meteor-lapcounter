Template.racePlayer.helpers({
  laps: function () {
    var race = Router.current().data()

    if (race && race._id) {
      return Laps.find({ keyCode: this.keyCode, race: race._id }, { sort: { index: -1 }})
    }
  },

  total: function () {
    var race = Router.current().data()

    if (race && race._id) {
      return Math.max(0, Laps.find({ keyCode: this.keyCode, race: race._id }).count() - 1)
    }
  },

  isFirst: function () {
    var race = Router.current().data()

    if (race && race._id) {
      var totalCount =  Laps.find({ keyCode: this.keyCode, race: race._id }).count()
      if (totalCount == this.index) {
        return 'active'
      }
    }
  },

  fastestLap: function () {
    var race = Router.current().data()

    if (race && race._id) {
      var fastestLap = Laps.findOne({ keyCode: this.keyCode, race: race._id, roundTime: {$gt: 0 } }, { sort: { roundTime: 1 }})

      if (fastestLap && fastestLap.roundTime) {
        return fastestLap
      }
    }
  }
})