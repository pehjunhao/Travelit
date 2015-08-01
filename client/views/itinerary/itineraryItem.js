Template.itineraryItem.events({
	'click .add-location-btn': function() {
		Router.go("/itinerary/"+this._id+"/newLocation");
	},

	'click .delete-itinerary-btn': function() {
		Meteor.call("deleteItinerary", this._id, function(err) {
			if(err) {
				Session.set('errorMessage', err.reason || 'Unknown error');
			} else {
				Router.go("/itinerary");
			}
		});
	}
});

Template.itineraryItem.helpers({
	'locationList': function() {
		return Location.find();
	},

	'getItineraryId': function() {
		return Session.get("itineraryId");
	}
});