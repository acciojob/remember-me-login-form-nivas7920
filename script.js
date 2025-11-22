// ---- Check saved credentials on page load ----
const existingBtn = document.getElementById("existing");

const savedUser = localStorage.getItem("username");
const savedPass = localStorage.getItem("password");

if (savedUser && savedPass) {
    existingBtn.style.display = "block"; // show existing user button
}

// ---- Submit login form ----
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("checkbox").checked;

    alert(`Logged in as ${username}`);

    if (remember) {
        // Store credentials
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Remove credentials
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

// ---- Login as existing user ----
existingBtn.addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");
    alert(`Logged in as ${savedUsername}`);
});
