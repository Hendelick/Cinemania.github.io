// JavaScript source code
function validation() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var cinema = document.getElementById("cinema").value;
    var movie = document.getElementById("movie").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var number = document.getElementById("number").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if (name.length < 5) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if (cinema == "Cinema") {
        text = "Please Select A Cinema";
        error_message.innerHTML = text;
        return false;
    }

    if (movie == "Movie") {
        text = "Please Select A Movie";
        error_message.innerHTML = text;
        return false;
    }

    if (date == "Date") {
        text = "Please Select A Valid Date";
        error_message.innerHTML = text;
        return false;
    }

    if (time == "Time") {
        text = "Please Select A Valid Time";
        error_message.innerHTML = text;
        return false;
    }

    if (number <= 0 || isNaN(number)) {
        text = "Please Enter A Valid Number";
        error_message.innerHTML = text;
        return false;
    }

    alert("Thank You and Enjoy Your Movie!");
    return true;
}

let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;