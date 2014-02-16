Template.track.helpers({
  races: function () {
    return Races.find({ track: this._id })
  }
})