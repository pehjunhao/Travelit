Location = new Meteor.Collection('location');

Meteor.methods({
	newLocation: function(attr){
		var location = _.extend(_.pick(attr, 'name', 'description', 'itinerary_id'), {
				timestamp_created: new Date().getTime()
		});

		var locationId = Location.insert(location);

	    return locationId;
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