
document.getElementById("applyForm").addEventListener("submit", function(event) {
    let name = document.querySelector('input[name="name"]').value.trim();
    let email = document.querySelector('input[name="email"]').value.trim();
    let phone = document.querySelector('input[name="phone"]').value.trim();

    if (!name || !email || !phone) {
        alert("All fields are required!");
        event.preventDefault();
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Invalid email format!");
        event.preventDefault();
    } else if (!/^\d{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number!");
        event.preventDefault();
    } else {
        alert("Form submitted successfully! (Note: No backend to process data)");
    }
});
