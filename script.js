// onkeyup event for Name
function checkName() {
    let name = document.getElementById("name").value;

    if (name.length < 3) {
        document.getElementById("nameError").innerHTML = "Name must be at least 3 characters";
    } else {
        document.getElementById("nameError").innerHTML = "";
    }
}

// onkeyup event for Email
function checkEmail() {
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        document.getElementById("emailError").innerHTML = "Invalid Email";
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
}

// onkeyup event for Phone
function checkPhone() {
    let phone = document.getElementById("phone").value;

    if (phone.length != 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerHTML = "Phone must be 10 digits";
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }
}

// onchange event for dropdown
function checkCourse() {
    let course = document.getElementById("course").value;

    if (course == "") {
        document.getElementById("courseError").innerHTML = "Please select a course";
    } else {
        document.getElementById("courseError").innerHTML = "";
    }
}

// onclick event on button
function buttonClick() {
    document.getElementById("result").innerHTML = "";
}

// onsubmit event for final validation
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    if (name == "" || email == "" || phone == "" || course == "") {
        document.getElementById("result").innerHTML = "All fields are required";
        return false;
    }

    document.getElementById("result").innerHTML = "Registration Successful!";
    return false;
}
