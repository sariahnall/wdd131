let selectElem = document.querySelector('select');
selectElem.addEventListener("change", changeTheme);
function changeTheme() {
    let theme = selectElem.value;
    let body = document.body;
    let img = document.querySelector('img');

    if (theme == 'dark') {
        body.classList.add('dark');
        img.src = "byui-logo_white.png";
    } else {
        body.classList.remove('dark');
        img.src = "byui-logo_blue.webp";
    }
}
