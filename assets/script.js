var config = {
    apiKey: "AIzaSyCV94moc7hXyIGlBASk7LRyW7UgDHdd4P4",
    authDomain: "bootcamp-employees-3d8f4.firebaseapp.com",
    databaseURL: "https://bootcamp-employees-3d8f4.firebaseio.com",
    projectId: "bootcamp-employees-3d8f4",
    storageBucket: "bootcamp-employees-3d8f4.appspot.com",
    messagingSenderId: "664257132182"
  };
firebase.initializeApp(config);
var database = firebase.database();


$(document).ready(function() {

	$('#employee-form').on("submit", function(event) {
		event.preventDefault();

		var name = $('#name').val();
		var role = $('#role').val();
		var startDate = $('#start').val();
		var monthlyRate = parseInt($('#mbill').val());

		database.ref("/users").push({
			name: name,
			role: role,
			startDate: startDate,
			monthlyRate: monthlyRate
		});

	});



	database.ref("/users").orderByChild("monthlyRate").on("child_added", function(snapshot) {

		var employee = snapshot.val();

		var row = $('<tr>');
		row.append($('<td>').text(employee.name));
		row.append($('<td>').text(employee.role));
		row.append($('<td>').text(employee.startDate));

		var startMoment = moment(employee.startDate, 'MM/DD/YYYY');
		var monthsWorked = moment().diff(startMoment, 'months');
		row.append($('<td>').text(monthsWorked));
		
		row.append($('<td>').text(employee.monthlyRate));

		var totalPay = employee.monthlyRate * monthsWorked;
		row.append($('<td>').text(totalPay));

		$('#employee-table').append(row);

	});

});


/*
name
role
start_date
monthly_rate
*/