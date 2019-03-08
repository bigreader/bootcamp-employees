var config = {
    apiKey: "AIzaSyCV94moc7hXyIGlBASk7LRyW7UgDHdd4P4",
    authDomain: "bootcamp-employees-3d8f4.firebaseapp.com",
    databaseURL: "https://bootcamp-employees-3d8f4.firebaseio.com",
    projectId: "bootcamp-employees-3d8f4",
    storageBucket: "",
    messagingSenderId: "664257132182"
  };
firebase.initializeApp(config);



$(document).ready(function() {

	$('#FORM_ID??').on("submit", function(event) {
		event.preventDefault();

		var name = $('#name-input').val();
		var role = $('#role-input').val();
		var startDate = $('#start-date-input').val();
		var monthlyRate = $('#monthly-rate-input').val();

		var row = $('<tr>');
		row.append($('<td>').text(name));
		row.append($('<td>').text(role));
		row.append($('<td>').text(startDate));
		row.append($('<td>').text(monthlyRate));
		$('#EMPLOYEE_TABLE??').append(row);

		database.ref("/users").push({
			name: name,
			role: role,
			startDate: startDate,
			monthlyRate: monthlyRate
		});

	});

	

});


/*
name
role
start_date
monthly_rate
*/