$(document).ready(function(){
	var initialUrl = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/users'

	if (location.pathname === '/') {
		function getUsers() {
			$.ajax({
			 	url: initialUrl,
			 	type: 'GET',
			 	dataType: 'JSON'
			}).done( function(data) {
				var tbody = $('#users');
				tbody.children().remove();
				data.users.forEach( function(user) {
					var firstName = user.first_name ? user.first_name : '';
					var lastName = user.last_name ? user.last_name : '';
					var phoneNumber = user.phone_number ? user.phone_number : '';
					var row = '<tr data-id="'+ user.id + '"></td>' + user.first_name + '</td>';
							row += ''
							row += '<td>' + firstName + '</td>';
							row += '<td>' + lastName + '</td>';
							row += '<td>' + phoneNumber + '</td>';
 							row += '<td>'
              row += '<button class="btn delete">Delete</button>';
              row += '<button class="btn show">Show</button>';
              row += '</td>';							
              row += '</tr>';
							tbody.append(row);
				});
			}).fail( function(err){
		  	alert('Something went wrong')
		  });
		}

		getUsers();

		$(document).on('click', '.delete', function() {
			var id = $(this).closest('tr').data().id;
			deleteUser(id);
		});

		$(document).on('click', '.show', function() {
			var id = $(this).closest('tr').data().id;
			location.pathname = '/users/' + id;
		});

		function deleteUser(id) {
			$.ajax({
				url: initialUrl + '/' + id,
				type: 'DELETE'
			}).done( function() {
				getUsers();
			})
		}
	}

	var regex = /\/users\/\d+/;
 	if(location.pathname.match(regex)) {
    var panel = $('#panel');
    var id = panel.data().id;
    $.ajax({
      url: initialUrl + '/' + id,
      type: 'GET',
      dataType: 'JSON'
    }).done( function(data) { 
      var user = data.user;
      panel.children('#heading').html(user.first_name);
      var list = $('#user');
      var first_name = '<li>first name' + user.first_name + '</li>';
      var lastName = '<li>last name:' + user.last_name + '</li>';
      var phoneNumber = '<li>phone number: ' + user.phone_number + '</li>';
      list.append(firstName);
      list.append(lastName);
     	list.append(phoneNumber);
		})
	}

	$('#new_user').on('submit', function(e) {
		e.preventDefault();
		$.ajax({
			url: initialUrl,
			type: 'POST',
			dataType: 'JSON',
			data: $(this).serializeArray()
		}).done( function() {
			location.pathname = '/';
		})
	})


});





















