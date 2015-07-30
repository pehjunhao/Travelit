Template.signin.events({
	'click .signin-btn': function() {
		Meteor.loginWithPassword(
			$(".signin-username").val(), 
			$(".signin-password").val(), 
			function(err) {
				if(err) {
					alert(err);
				} else {
					Router.go("/itinerary");
				}
			});
	},
	'click .signup-btn': function() {
		Router.go("/signup");
	},
	'click .facebook-btn': function() {
		Meteor.loginWithFacebook({
			requestPermissions: ['public_profile', 'email']
		}, function (err) {
			if (err) {
				Session.set('errorMessage', err.reason || 'Unknown error');
			} else {
				Router.go("/itinerary");
			}
		});
	}
});