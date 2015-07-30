/*******************************
*   
******************************/

Template.signup.events({
	'click .signup-btn': function() {
		Accounts.createUser({
			password: $(".signup-password").val(),
			email: $(".signup-email").val(),
			username: $(".signup-username").val()
		}, function(err) {
			if(!err) {
        		Router.go("/itinerary");
			} else {
				alert(err);
			}
		});
    },
    'click .back-to-signin': function() {
    	Router.go("/signin");
    }
});








