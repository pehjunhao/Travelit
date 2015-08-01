Template.newLocation.events({
	'click .add-location-btn': function() {
		Meteor.call("newLocation", {
			name: $(".location-name").val(),
			description: $(".location-description").val(),
			itinerary_id: this._id
		}, function(err, locationId) {
			if(err) {
				Session.set('errorMessage', err.reason || 'Unknown error');
			} else {
				Router.go("/itinerary/"+this._id);
			}
				
		}.bind(this));
	}
});