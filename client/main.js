Deps.autorun(function() {
	allusers = Meteor.subscribe('allUsers');
	allItineraries = Meteor.subscribe('allItineraries', Meteor.userId());
});
