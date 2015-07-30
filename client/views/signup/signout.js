Template.signout.events({
	'click .signout-btn': function() {
		Meteor.logout(function() {
    		Router.go("/signin");
		})
	}
});