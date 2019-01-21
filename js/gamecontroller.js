isFullscreen = false;

document.documentElement.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 57) {
        if (document.getElementById("navbar").style.display == "none") {
            document.getElementById("navbar").style.display = "block";
        }
        else {
            document.getElementById("navbar").style.display = "none";
        }
    }
    if (event.keyCode === 48) {
        elem = document.getElementById("game-resp-container");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }
});