// Router.configure({
// 	layoutTemplate: 'layout',
// });

// Router.onBeforeAction(function(){
// 	if(!Meteor.loggingIn() && !Meteor.user()) {
// 		console.log("this ran");
// 		Router.go('unauthorized');
// 	}
// },{except: ['unauthorized']});

Router.route('/', function () {
	this.render('landing');
});

Router.route('/signup');
Router.route('/signin');
Router.route('/landing');
Router.route('/itinerary', function() {
	if(Meteor.loggingIn() || Meteor.user()) {
		this.render('itineraryList');
	} else {
		Router.go('/landing');
	}
});
Router.route('/itinerary/new', function() {
	this.render('newItinerary');
});

Router.route("/(.*)", function() {
	this.render('pageNotFound');
});


// Router.route('/machine', function () {
// 	this.render('machinePage');
// });
// Router.route('/machine/:_id', function () {
// 	var machine = Machine.findOne({_id: this.params._id});
// 	this.render('machineItemPage', {data: machine});
// });
// Router.route('/machine/:_id/edit', function () {
// 	Session.set("machineId", this.params._id);
// 	var machine = Machine.findOne({_id: this.params._id});
// 	this.render('machineItemEditPage', {data: machine});
// }, {
// 	onRun: function() {
// 		Session.set("machineId", this.params._id);
// 		this.next();
// 	},
// 	onStop: function() {
// 		Session.set("machineId", null);
// 	}
// });