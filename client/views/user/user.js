Template.userList.helpers({
	getAllUsers: function() {
		return Meteor.users.find();
	}
})