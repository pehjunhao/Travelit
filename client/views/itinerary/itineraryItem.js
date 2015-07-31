Template.itineraryItem.events({
	'click .add-location-btn': function() {
		Router.go("/itinerary/"+this._id+"/newLocation");
	}
});