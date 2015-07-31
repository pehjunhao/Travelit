Template.itineraryList.events({
	'click .add-itinerary-btn': function() {
		Router.go("/itinerary/new");
	}
});

Template.itineraryList.helpers({
	getAllItinerary: function() {
		return Itinerary.find();
	}
});