Router.configure({
	layoutTemplate: 'layout'
})

Router.map(function () {
  this.route('home', {
    path: '/'
  })

  // Cars

  this.route('cars', {
    path: '/cars'
  })

  this.route('car', {
    path: '/cars/:_id',

    data: function () {
      return Cars.findOne({ _id: this.params._id })
    }
  })

  this.route('createCar', {
    path: '/car/add'
  })

  // Track

  this.route('tracks', {
    path: '/tracks'
  })
  
  this.route('track', {
    path: '/tracks/:_id',

    data: function () {
      return Tracks.findOne({ _id: this.params._id })
    }
  })
  
  this.route('createTrack', {
    path: '/track/add'
  })

  // Players

  this.route('players', {
    path: '/players'
  })

  this.route('player', {
    path: '/players/:_id',

    data: function () {
      return Players.findOne({ _id: this.params._id })
    }
  })

  this.route('createPlayer', {
    path: '/player/add'
  })

  // Races

  this.route('races', {
    path: '/races'
  })

	this.route('race', {
		path: '/races/:_id',

    data: function () {
      return Races.findOne({ _id: this.params._id })
    }
	})

  this.route('createRace', {
    path: '/race/add'
  })
})