new Vue ({
	el: "#events", 

	data: {
		event: { 
			name: '', 
			description: '', 
			date: ''
		}, 
		events: []
	}, 

	ready: function() {

		this.fetchEvents(); 
	}, 

	methods: {

		fetchEvents: function(){
			var events = [
			  {
			    id: 1,
			    name: 'Lab meeting',
			    description: 'Weekly Monday meetings',
			    date: '2017-04-10'
			  },
			  {
			    id: 2,
			    name: 'ReactJs workshop',
			    description: 'Women who code meetup',
			    date: '2016-4-13'
			  },
			  {
			    id: 3,
			    name: 'Buildathon, Hack Oregon',
			    description: 'Budget Team all day build',
			    date: '2017-04-08'
			  }

			]; 

			this.$set('events', events); 
		}, 

		addEvent: function() {
			console.log('inside add event')
			if(this.event.name){
				this.events.push(this.event); 
				this.event = { 
					name: '', 
					description: '', 
					date: ''
				}
			}
		}, 

		deleteEvent: function(index) {
		 
		    this.events.splice(index, 1);
		  
		}
	}
}); 



