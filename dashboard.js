// Check if the user is logged in
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html"; // Redirect to login page if not logged in
}

// Handle file upload
document.getElementById("uploadForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent page refresh

    const fileInput = document.getElementById("fileInput");
    const uploadMessage = document.getElementById("uploadMessage");

    // Check if file is selected
    if (fileInput.files.length === 0) {
        uploadMessage.textContent = "Please select a file to upload.";
        uploadMessage.style.color = "red";
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http://localhost:5000/upload", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            uploadMessage.textContent = `File "${result.fileName}" uploaded successfully!`;
            uploadMessage.style.color = "green";
        } else {
            uploadMessage.textContent = "File upload failed!";
            uploadMessage.style.color = "red";
        }
    } catch (error) {
        uploadMessage.textContent = "Error uploading file!";
        uploadMessage.style.color = "red";
    }
});
