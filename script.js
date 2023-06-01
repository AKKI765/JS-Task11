function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var language = document.getElementById("language").value;
    
    
    var isValid = true;

   

    // Reset error messages
    document.getElementById("firstnameError").innerHTML = "";
    document.getElementById("lastnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("repasswordError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("stateError").innerHTML = "";
    document.getElementById("countryError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("languageError").innerHTML = "";
    
    

    // Name validation
    if (firstname === "") {
        document.getElementById("firstnameError").innerHTML = "POOR";
        isValid = false;
    }

    if (lastname === "") {
        document.getElementById("lastnameError").innerHTML = "POOR";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerHTML = "POOR";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "POOR";
        isValid = false;
    }

    if (repassword === "" || repassword!=password) {
        document.getElementById("repasswordError").innerHTML = "POOR or MISMATCH";
        isValid = false;
    }

     // Gender validation
     if (gender === "") {
        document.getElementById("genderError").innerHTML = "POOR";
        isValid = false;
    }


    // Phone number validation
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "POOR";
        isValid = false;
    }

     // Address validation
     if (address === "") {
        document.getElementById("addressError").innerHTML = "POOR";
        isValid = false;
    }


    // State Validation
    if(state===""){
        document.getElementById("stateError").innerHTML = "POOR";
        isValid = false;
    }



    // Country validation
    if (country === "") {
        document.getElementById("countryError").innerHTML = "POOR";
        isValid = false;
    }
   

    // Language validation
    if (language === "") {
        document.getElementById("languageError").innerHTML = "POOR";
        isValid = false;
    }

    

   

    return isValid;
}