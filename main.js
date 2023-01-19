const body = document.getElementById("body");
const container = document.querySelector(".container");

//localStorage.clear()
//let isDark = false;

reDraw()
let isDark = (document.getElementById("checkIsDark").checked == true);

function changeTheme() {
    isDark = !isDark;
    localStorage.setItem('isDark', isDark)
    reDraw()
}

function reDraw() {
    if (localStorage.getItem('isDark') != "true") {
        body.className = "body-light";
        container.classList.remove("container-dark");
        container.classList.add("container-light");
    }
    else {
        document.getElementById("checkIsDark").checked = true;
        body.className = "body-dark";
        container.classList.remove("container-light");
        container.classList.add("container-dark");
    }
}