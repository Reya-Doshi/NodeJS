function validateForm() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var members = document.getElementById("members").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(name == "" || age == "" || members == "" || address == "" || phone == "" || email == "" || password == ""){
        alert("All fields must be filled.");
        return false;
    }

    if(phone.length != 10 || isNaN(phone)){
        alert("Phone number must be exactly 10 digits.");
        return false;
    }

    if(email.indexOf("@") == -1){
        alert("Email must contain @ symbol.");
        return false;
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters.");
        return false;
    }

    alert("Booking Successful!");
    return true;
}