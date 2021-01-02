function validasi(login)
{
    var returnValue = true;
    var name = document.getElementById("username");
    var password = document.getElementById("password");

    if(name.value == "13320050" && password.value == "shopia"){
        alert("Selamat anda berhasil masuk ke sistem!")
    }
    else if(name.value.length == 0 && password.value.length == 0){
        alert("Periksa kembali username dan password anda");
    }
    else{
        alert("Anda gagal masuk ke sistem!");
    }

    returnValue;
}




function validate(form) {
	var returnValue = true;
	var username = document.getElementById ("username");
	var password = document.getElementById ("password");
			
	if(username.value != "admin"){
		returnValue = false;
		alert("Masukkan Username dengan benar");
		document.getElementById("username").focus();
	}
	else if(password.value != "admin") {
		returnValue = false;
		alert("Password anda salah! \n Coba lagi.");
		document.getElementById("password").focus();
	}
	return returnValue;
}
	