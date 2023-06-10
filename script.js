function validateFirstName() {
    const firstnameInput = document.getElementById("firstname");
    const firstnameError = document.getElementById("firstnameError");
    const firstname = firstnameInput.value.trim();
  
    const nameRegex = /^[A-Za-z]+$/;
  
    if (firstname === "") {
      firstnameError.textContent = "First name is required.";
    } else if (!nameRegex.test(firstname)) {
      firstnameError.textContent = "First name should contain only alphabets.";
    } else {
      firstnameError.textContent = "";
    }
  }
  
  function validateLastName() {
    const lastnameInput = document.getElementById("lastname");
    const lastnameError = document.getElementById("lastnameError");
    const lastname = lastnameInput.value.trim();
  
    const nameRegex = /^[A-Za-z]+$/;
  
    if (lastname === "") {
      lastnameError.textContent = "Last name is required.";
    } else if (!nameRegex.test(lastname)) {
      lastnameError.textContent = "Last name should contain only alphabets.";
    } else {
      lastnameError.textContent = "";
    }
  }
  
  function validateDOB() {
    const dobInput = document.getElementById("dob");
    const dobError = document.getElementById("dobError");
    const dob = dobInput.value.trim();
  
    if (dob === "") {
      dobError.textContent = "Date of Birth is required.";
    } else {
      dobError.textContent = "";
    }
  }
  
  function validateAge() {
    const ageInput = document.getElementById("age");
    const ageError = document.getElementById("ageError");
    const age = ageInput.value.trim();
  
    if (age === "") {
      ageError.textContent = "Age is required.";
    } else {
      ageError.textContent = "";
    }
  }
  
  function validateGender() {
    const genderError = document.getElementById("genderError");
    const maleChecked = document.getElementById("male").checked;
    const femaleChecked = document.getElementById("female").checked;
  
    if (!maleChecked && !femaleChecked) {
      genderError.textContent = "Please select a gender.";
    } else {
      genderError.textContent = "";
    }
  }
  
  function validatePhoneNumber() {
    const phnumberInput = document.getElementById("phnumber");
    const phnumberError = document.getElementById("phnumberError");
    const phnumber = phnumberInput.value.trim();
  
    const phnumberRegex = /^\d{10}$/;
  
    if (phnumber === "") {
      phnumberError.textContent = "Phone Number is required.";
    } else if (!phnumberRegex.test(phnumber)) {
      phnumberError.textContent = "Phone Number should be a 10-digit number.";
    } else {
      phnumberError.textContent = "";
    }
  }
  
  function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const email = emailInput.value.trim();
  
    const emailRegex = /^\S+@\S+\.\S+$/;
  
    if (email === "") {
      emailError.textContent = "Email is required.";
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email format.";
    } else {
      emailError.textContent = "";
    }
  }
  
  function validateAddress() {
    const addressInput = document.getElementById("address");
    const addressError = document.getElementById("addressError");
    const address = addressInput.value.trim();
  
    if (address === "") {
      addressError.textContent = "Address is required.";
    } else {
      addressError.textContent = "";
    }
  }
  
  function validateState() {
    const stateInput = document.getElementById("state");
    const stateError = document.getElementById("stateError");
    const state = stateInput.value;
  
    if (state === "") {
      stateError.textContent = "Please select a state.";
    } else {
      stateError.textContent = "";
    }
  }
  
  function validateCity() {
    const cityInput = document.getElementById("city");
    const cityError = document.getElementById("cityError");
    const city = cityInput.value;
  
    if (city === "") {
      cityError.textContent = "Please select a city.";
    } else {
      cityError.textContent = "";
    }
  }
  
  function validateUsername() {
    const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("usernameError");
    const username = usernameInput.value.trim();
  
    const usernameRegex = /^[A-Za-z0-9]+$/;
  
    if (username === "") {
      usernameError.textContent = "Username is required.";
    } else if (!usernameRegex.test(username)) {
      usernameError.textContent = "Username should contain only alphabets and digits.";
    } else {
      usernameError.textContent = "";
    }
  }
  
  function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const password = passwordInput.value.trim();
  
    const passwordRegex = /^.{6,}$/;
  
    if (password === "") {
      passwordError.textContent = "Password is required.";
    } else if (!passwordRegex.test(password)) {
      passwordError.textContent = "Password should be at least 6 characters long.";
    } else {
      passwordError.textContent = "";
    }
  }
  
  function validateConfirmPassword() {
    const passwordInput = document.getElementById("password");
    const confirmpassInput = document.getElementById("confirmpass");
    const confirmpassError = document.getElementById("confirmpassError");
    const password = passwordInput.value.trim();
    const confirmpass = confirmpassInput.value.trim();
  
    if (confirmpass === "") {
      confirmpassError.textContent = "Confirm Password is required.";
    } else if (confirmpass !== password) {
      confirmpassError.textContent = "Passwords do not match.";
    } else {
      confirmpassError.textContent = "";
    }
  }
  
  var cityOptions = {
    kerala: ["Kochi", "Calicut", "Kannur", "Trivandrum"],
    tamilnadu: ["Chennai", "Coimbatore", "Madurai", "Salem"],
    karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore"],
    goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"]
  };

  
  function updateCityOptions() {
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
    var selectedState = stateSelect.value;
  
    citySelect.innerHTML = "";
  
    var cities = cityOptions[selectedState];
    for (var i = 0; i < cities.length; i++) {
      var option = document.createElement("option");
      option.value = cities[i];
      option.textContent = cities[i];
      citySelect.appendChild(option);
    }
  }
  
  document.getElementById("state").addEventListener("change", updateCityOptions);
  
  function updateAge() {
    var dobInput = document.getElementById("dob");
    var ageInput = document.getElementById("age");
  
    var dob = new Date(dobInput.value);
    var today = new Date();
  
    var age = today.getFullYear() - dob.getFullYear();
  
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }
  
    ageInput.value = age;
  }
  