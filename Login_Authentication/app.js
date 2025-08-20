// Register user
function register() {
  let username = document.getElementById("regUser").value;
  let password = document.getElementById("regPass").value;

  if (username === "" || password === "") {
    alert("Please fill all fields!");
    return;
  }

  // Save to localStorage
  localStorage.setItem(username, password);
  alert("User registered successfully!");
  document.getElementById("regUser").value = "";
  document.getElementById("regPass").value = "";
}

// Login user
function login() {
  let username = document.getElementById("loginUser").value;
  let password = document.getElementById("loginPass").value;

  let storedPassword = localStorage.getItem(username);

  if (storedPassword === null) {
    alert("User not found! Please register first.");
  } else if (storedPassword === password) {
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("registerDiv").style.display = "none";
    document.getElementById("securePage").style.display = "block";
    document.getElementById("userDisplay").innerText = username;
  } else {
    alert("Wrong password!");
  }
}

// Logout user
function logout() {
  document.getElementById("securePage").style.display = "none";
  document.getElementById("loginDiv").style.display = "block";
  document.getElementById("registerDiv").style.display = "block";
  document.getElementById("loginUser").value = "";
  document.getElementById("loginPass").value = "";
}

