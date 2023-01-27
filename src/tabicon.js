const tabFavicon = document.getElementById("tabFavicon");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
    if (isDark.matches) tabFavicon.href = "images/d-white.png";
    else tabFavicon.href = "images/d.png";
}

changeFavicon();

setInterval(changeFavicon, 1000);