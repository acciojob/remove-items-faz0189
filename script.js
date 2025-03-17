document.querySelector("input[type='button']").onclick = function () {
    let select = document.getElementById("colorSelect");
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
};