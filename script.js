// ---- On page load: check if credentials exist ----
const existingBtn = document.getElementById("existing");

const savedUser = localStorage.getItem("username");
const savedPass = localStorage.getItem("password");

if (savedUser && savedPass) {
    existingBtn.style.display = "block";
}

// ---- Login form submission ----
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("checkbox").checked;

    alert(`Logged in as ${username}`);

    if (remember) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

// ---- Existing user login ----
existingBtn.addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");
    alert(`Logged in as ${savedUsername}`);
});
