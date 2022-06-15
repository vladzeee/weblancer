$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "js/mail.php", //Change
			data: th.serialize()
		}).done(function() {
				swal({
 					 icon: "success",
				});
				swal("Хорошая  работа!", "Я вам перезвоню!", "success")
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});