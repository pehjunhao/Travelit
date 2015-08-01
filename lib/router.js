// Router.configure({
// 	layoutTemplate: 'layout',
// });

//Sets default page if there are no users
Router.onBeforeAction(function(){
	if(!Meteor.loggingIn() && !Meteor.user()) {
		Router.go('/landing');
	}

	this.next();
},{except: ['landing', 'pageNotFound']});

//Set session's itinerary id
Router.onBeforeAction(function(route) {
	var routeItem = route.url.split("/");
	if(routeItem.length > 2) {
		Session.set("itineraryId", routeItem[2]);
	}
	this.next();
},{except: ['landing', 'pageNotFound', 'itinerary']})

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
	// if(itinerary) {
		Session.set("itineraryId", this.params._id);
		this.render('itineraryItem', {data: itinerary});
	// } else {
	// 	Router.go('/itinerary');
	// }
});
Router.route('/itinerary/:_id/newLocation', function() {
	var itinerary = Itinerary.findOne({_id: this.params._id});
	if(itinerary) {
		Session.set("itineraryId", this.params._id);
		this.render('newLocation', {data: itinerary});
	} else {
		Router.go('/itinerary');
	}
});
Router.route('/itinerary/:_id/:_lId', function() {
	var itinerary = Itinerary.findOne({_id: this.params._id});
	var location = Location.findOne({_id: this.params._lId});

	Session.set("itineraryId", this.params._id);
	this.render('location', {data: location});
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