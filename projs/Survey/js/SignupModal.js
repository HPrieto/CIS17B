function SignupModal() {
	var modal = document.createElement("div");
	var modalInner = "<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>";
	modalInner += "<div class='modal-dialog' role='document'>";
	modalInner += "<div class='modal-content'><div class='modal-header'><h4 class='modal-title' id='myModalLabel'>Sign up</h4>";
	modalInner += "</div><div class='modal-body'><div class='input-group input-group-lg'>";
  	modalInner += "<input type='text' id='modalEmail' class='form-control' placeholder='Email' aria-describedby='sizing-addon1'>";
  	modalInner += "<span class='input-group-addon' id='sizing-addon1'><i class='fa fa-envelope' aria-hidden='true'></i></span>";
	modalInner += "</div><div class='input-group input-group-lg' style='margin-top: 25px;'>";
  	modalInner += "<input type='password' id='modalPassword' class='form-control' placeholder='Password' aria-describedby='sizing-addon1'>";
  	modalInner += "<span class='input-group-addon' id='sizing-addon1'><i class='fa fa-lock' aria-hidden='true'></i></span>";
	modalInner += "</div></div><div class='modal-footer'>";
	modalInner += "<button type='button' class='btn btn-primary btn-lg' style='width: 100%; background-color: #1997F0; border-color: #1997F0;' onClick='signup()'>Sign up</button>";
	modalInner += "</div></div></div></div>";
	modal.innerHTML = modalInner;
	return modal
}

function signup() {
	// User form input
	var email = document.getElementById('modalEmail').value;
	var pass  = document.getElementById('modalPassword').value;
	var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var passRe  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
	// Check for valid email and password
    if (emailRe.test(email)) {
    	if (passRe.test(pass)) {
    		saveUser(email, pass);
	    } else {
	    	alert("password should contain atleast one uppercase letter, one lowercase letter and one number.");
	    }
    } else {
    	alert("invalid email.");
    }
}

function saveUser(email, pass) {
	localStorage.clear();
	localStorage.setItem('user',email);
	localStorage.setItem(email,pass);
	clearModal();
	$('#myModal').modal('hide')
}

function clearModal() {
	var email = document.getElementById('modalEmail').value;
	var pass  = document.getElementById('modalPassword').value;
	email = "";
	pass = "";
}