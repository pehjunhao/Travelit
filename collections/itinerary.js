Itinerary = new Meteor.Collection('itinerary');

Meteor.methods({
	newItinerary: function(attr){
		

		var itinerary = _.extend(_.pick(attr, 'name', 'description', 'owner_id'), {
				timestamp_created: new Date().getTime()
		});

		var itineraryId = Itinerary.insert(itinerary);

	    return itineraryId;
	},
	
	// editMachine: function(machineId, machine){
	// 	Machine.update({_id: machineId}, {
	// 		$set: machine
	// 	});
	// },

	// removeMachine: function(machineId) {
	// 	Machine.remove({_id: machineId});
	// },

});