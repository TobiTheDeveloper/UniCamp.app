function closeBtn() {
    // Toggle the navbar
    var navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show'); // Close the dropdown
    } else {
        navbar.classList.add('show'); // Open the dropdown if it's not already open
    }

    // Change the icon of the button
    var button = document.querySelector('.navbar-toggler');
    if (button.innerHTML.includes('navbar-toggler-icon')) {
        // Example: Change to a custom icon. Adjust this part to use your new icon.
        button.innerHTML = '<img src="/asset/close.png" alt="Close" style="width: 0.9em;">';
    } else {
        // Revert back to the original icon if the new icon is already displayed
        button.innerHTML = '<span class="navbar-toggler-icon"></span>';
    }
}
