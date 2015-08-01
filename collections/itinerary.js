Itinerary = new Meteor.Collection('itinerary');

Meteor.methods({
	newItinerary: function(attr){
		
		if(!attr.name || !attr.description)
			return new Error("Name and description is required");

		var itinerary = _.extend(_.pick(attr, 'name', 'description', 'owner_id'), {
				timestamp_created: new Date().getTime()
		});

		var itineraryId = Itinerary.insert(itinerary);

	    return itineraryId;
	},

	deleteItinerary: function(itineraryId) {
		if(itineraryId) {
			Itinerary.remove({_id: itineraryId});
		} else {
			throw new Meteor.Error("insuffient-data", "Itinerary's id is required");
		}
	}
	
	// editMachine: function(machineId, machine){
	// 	Machine.update({_id: machineId}, {
	// 		$set: machine
	// 	});
	// },

	// removeMachine: function(machineId) {
	// 	Machine.remove({_id: machineId});
	// },

});