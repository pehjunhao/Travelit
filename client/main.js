Deps.autorun(function() {
	allusers = Meteor.subscribe('allUsers');
	allItineraries = Meteor.subscribe('allItineraries', Meteor.userId());
	allLocations = Meteor.subscribe('allLocations', Session.get("itineraryId"));
});
