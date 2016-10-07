									// Assignment #4
// Create an HTML page with a form. The form should include inputs for a username, email, and
// password as well as a submit button.
// • In a Javascript file, write code that does the following things:
//   • checks that the password is 12345678
//   • checks that the username contains at least one number
//   • if anything is wrong, send an alert message saying "incorrect"
// • Your page should also include an H1 tag. If the information in the form is correct, have
//   Javascript change the text in the H1.

window.addEventListener("load",function(){
	var errCheck = 0; // '1' will be added IF a check passes
	document.getElementById("submit").addEventListener("click", myFunction1);
		function myFunction1(){ // Validate Password
			var userNameCheck = document.getElementById("userName").value;
			// Check for integer within userName string/array
			var unch = userNameCheck.split("");
			var counter = 0;
			for (var i = 0; i <= unch.length - 1; i++){
				if (isNaN(unch[i]) == true){
					counter ++;
				}
			}
			if (counter == unch.length) {
				alert("Incorrect UserName");
			}else{
				errCheck ++;
			}
			myFunction2();
		}
		function myFunction2(){ // Validate UserName
			var pwdCheck = document.getElementById("password").value;
			if (pwdCheck != "12345678"){
				alert("Incorrect password");
			}else{
				errCheck ++;
			}
			if (errCheck == 2) {
				document.getElementById("styling").innerText = "All of your information Checks!"
			}
		}
})

