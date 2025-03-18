function remove_color() {
    let removalcolor = document.getElementById("colorSelect"); // Get the select element
    let button = document.querySelector("input[type='button']"); // Get the button

    button.addEventListener("click", function () {
        if (removalcolor.selectedIndex !== -1) { // Check if an option is selected
            removalcolor.remove(removalcolor.selectedIndex); // Remove selected option
        }
    });
}