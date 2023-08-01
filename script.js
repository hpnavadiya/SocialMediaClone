var settingmenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");

// For setting menu 
function settingMenuToggle() {
    settingmenu.classList.toggle("setting-menu-height");
}

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    // For dark theme 
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Store the dark theme and light theme into local storage
if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}