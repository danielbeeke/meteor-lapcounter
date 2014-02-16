Template.menu.events({
	"click #sign-in-facebook": function(event, template){
	    Meteor.loginWithFacebook(function (error) {
	    	console.log(error)
	    })
	},
	"click #login-buttons-logout": function (event, template) {
	    Meteor.logout()
	}
})

Template.menu.helpers({
	conference: function () {
		if (Router.current().params.slug) {
			var conference = Conferences.findOne({ slug: Router.current().params.slug})
			 
			if (conference) {
				return conference
			}
		}
	},

	facebookIsConfigured: function () {
		if (Accounts.loginServiceConfiguration.find().fetch().length) {
			return true
		}
	},

	active: function (path) {
		if (Router.current().template == path) {
			return 'active'
		}
	}
})