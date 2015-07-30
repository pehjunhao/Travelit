Template.newItinerary.events({
	'click .add-itinerary-btn': function() {
		Meteor.call('newItinerary', {
			name: $(".itinerary-name").val(),
			description: $(".itinerary-description").val(),
			owner_id: Meteor.userId()
		}, function (err) {
			if (err) {
				Session.set('errorMessage', err.reason || 'Unknown error');
			} else {
				Router.go("itinerary");
			}
		});
	}
});