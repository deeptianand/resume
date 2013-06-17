$(document).ready(function(){
	
	var comments = "<div class=\"comments\"><span id=\"errormessage\"></span><span id =\"nameinfo\"></span><br><span id =\"emailinfo\"></span><br><span id =\"subjectinfo\"></span><br><span id =\"contentinfo\"></span></div>"
		$('#form').hide();
	$('.email_out').on("click",function(e){
		$('#form').slideToggle();
		$('#form').append(comments);
	});

	$('#form').on("submit",function(e){
		e.preventDefault();
		var error ="Thanks!"
		checkemail();
		checkname();
		checksubject();
		checkcontent();
		var serializedData = $('#form').serialize();
		if(checkemail() && checkname() && checksubject && checkcontent()){
			$('#gif_loader').show();
			$.ajax({
			url: "/users",
			type: "post",
			data: serializedData,
			success: function(){
				alert("Successfull");
				$('#gif_loader').hide();
			},
			error:function(){
				$('#errormessage').text(error);
				$('#gif_loader').hide();
				
			}
			});
		}
	})
});

function sendEmail(data){
	
}


function checkemail(){

	var pattern = /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
	var email = $('#user_email').val(); 
	if (pattern.test(email)){
		$('#emailinfo').text("");
		return true;
	}
	else {
		$('#emailinfo').text("Not a valid email");
		return false;
	}
}

function checkname(){
	var name = $('#user_name').val();
	if (name == ""){
		$('#nameinfo').text("Please enter your name");
		return false;
	}
	else {
		$('#nameinfo').text("");
		return true;
	}
}

function checksubject(){

	var subject = $('#user_subject').val();
	if (subject == ""){
		$('#subjectinfo').text("Please enter your subject");
		return false;
	}
	else {
		$('#subjectinfo').text("");
		return true;
	}
}

function checkcontent(){
	var content =$('#user_body').val();
	if (content == ""){
		$('#contentinfo').text("Please enter your content");
		return false;
	}
	else {
		$('#contentinfo').text("");
		return true;
	}
}