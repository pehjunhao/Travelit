Location = new Meteor.Collection('location');

Meteor.methods({
	newLocation: function(attr){
		if(!attr.name || !attr.description) {
			throw new Meteor.Error("insuffient-data", "Name and description is required");
		}

		var location = _.extend(_.pick(attr, 'name', 'description', 'itinerary_id'), {
				timestamp_created: new Date().getTime()
		});

		var locationId = Location.insert(location);

	    return locationId;
	},

	deleteLocation: function(locationId) {
		if(locationId) {
			Location.remove({_id: locationId});
		} else {
			throw new Meteor.Error("insuffient-data", "Location's id is required");
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