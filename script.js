// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded credentials (you can change these as needed)
    const validUsername = "admin";
    const validPassword = "1234";

    // Check if the entered credentials are valid
    if (username === validUsername && password === validPassword) {
        // Store login state in localStorage (so we know user is logged in)
        localStorage.setItem("isLoggedIn", "true");
        // Redirect to the dashboard page (we'll create this page later)
        window.location.href = "dashboard.html";
    } else {
        // Show error message if login is incorrect
        document.getElementById("error-message").textContent = "Invalid Username or Password!";
    }
});
