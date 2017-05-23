class EventApi {
	static getAllEvents() {
		
		var db = require('electron').remote.getGlobal('db');

		return new Promise((resolve, reject) => {
			db.events.find({}, function (err, events) {
				if (err) {
					reject(err)
					return err;
				}
				resolve(events)
				return events;
			});
		})

	}
}
		// db.events.find({}, function (err, events) {
		// 	return events;
		// });
		// console.log('1');


		// return fetch('http://localhost:5000/api/v1/cats').then(response => {
		// 	return response.json();
		// }).catch(error => {
		// 	return error;
		// });

export default EventApi;  