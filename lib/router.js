// Router.configure({
// 	layoutTemplate: 'layout',
// });

Router.onBeforeAction(function(){
	if(!Meteor.loggingIn() && !Meteor.user()) {
		Router.go('/landing');
	}
	this.next();
},{except: ['landing', 'pageNotFound']});

Router.route('/', function () {
	if(Meteor.loggingIn() || Meteor.user()) {
		this.render('itineraryList');
	} else {
		this.render('landing');
	}
});

Router.route('/signup');
Router.route('/signin');
Router.route('/landing');
Router.route('/itinerary', function() {
	this.render('itineraryList');
});
Router.route('/itinerary/new', function() {
	this.render('newItinerary');
});
Router.route('/itinerary/:_id', function() {
	var itinerary = Itinerary.findOne({_id: this.params._id});
	this.render('itineraryItem', {data: itinerary});
});
Router.route('/itinerary/:_id/newLocation', function() {
	var itinerary = Itinerary.findOne({_id: this.params._id});
	this.render('newLocation', {data: itinerary});
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