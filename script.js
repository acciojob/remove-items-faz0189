document.addEventListener("DOMContentLoaded", function () {
    let select = document.getElementById("colorSelect");
    let button = document.querySelector("input[type='button']");

    button.addEventListener("click", function () {
        if (select.selectedIndex !== -1) {
            select.remove(select.selectedIndex);
        }
    });
});