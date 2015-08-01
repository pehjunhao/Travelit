Template.location.events({
	'click .delete-location-btn': function() {
		Meteor.call("deleteLocation", this._id, function(err) {
			if(err) {
				Session.set('errorMessage', err.reason || 'Unknown error');
			} else {
				Router.go("/itinerary/"+Session.get("itineraryId"));
			}
		});
	}
});