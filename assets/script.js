

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

	});

	

});


/*
name
role
start_date
monthly_rate
*/