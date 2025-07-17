function validateAll() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const dob = document.getElementById("dob");
    const today = new Date();
    const dateOfBirth = new Date(dob.value);
    const registForm = document.getElementById("registration-form");

    if (name.value.trim() == "") {
        alert("Name must be filled!");
    } else if (!email.value.endsWith("@gmail.com")) {
        alert("Email must end with '@gmail.com!'");
    } else if (address.value.trim() == "") {
        alert("Address must be filled!");
    } else if (dob.value === ""){
        alert("Date of Birth must be filled!"); 
    } else if(dateOfBirth >= today) {
        alert("Date of Birth must be before today!");
    } else if (gender.value =="None") {
        alert("Gender cannot be 'None'!");
    } else {
        registForm.submit();
    }
}