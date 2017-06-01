var name_of_user;

function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
	var y = document.forms["myForm"]["email"].value;
    var z = document.getElementById("numb").value;

	if (x == null || x == "") {
        alert("First Name must be filled out");
        return false;
    }
	if (y == null || y == "") {
        alert("Email Cannot be Empty");
        return false;
    }
	 
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(z) || z < 1 || z> 10000000000) {
        alert("Number is not in Correct Format and Enter not more than 10 digits");
    }
     else {
	alert("Form Submitted");
}	
    
	
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
document.getElementById("login_name").innerHTML = user;
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
		   setCookie("username", user, 30);
       document.getElementById("login_name").innerHTML = user;
	    name_of_user=user;
	   console.log(document.cookie);
           
        }
    }
}
