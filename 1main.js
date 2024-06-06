function promptPassword() {
    const correctPassword = 'NOTHING';  // Replace 'your_password' with the actual password
    let enteredPassword = prompt("Please enter the password:");

    if (enteredPassword === correctPassword) {
        window.location.href = 'NO.html';  // Redirect to BD.html
    } else {
        alert("Incorrect password. Please try again.");
        promptPassword();
    }
}
