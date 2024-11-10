

function loginForm() {
    var userName = document.getElementById("input_user").value;
    var userPassword = document.getElementById("input_Password").value;
    
    if (userName === "" || userPassword === "") {
        alert("Please enter both username and password");
        return;
    }

    if (userName === "admin") {
        if (userPassword === "admin") {
            window.location.href = "index2.html"; // Redirect to another page
        } else {
            alert("Please enter a valid password");
        }
    } else {
        alert("Please enter a valid username");
    }
}
