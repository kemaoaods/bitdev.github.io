//Shorten function
function ID(id) {
    return document.getElementById(id);
}

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
        game = document.getElementById("gameContainer");
        if (game.requestFullscreen) {
            game.requestFullscreen();
        } else if (game.mozRequestFullScreen) { /* Firefox */
            game.mozRequestFullScreen();
        } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            game.webkitRequestFullscreen();
        } else if (game.msRequestFullscreen) { /* IE/Edge */
            game.msRequestFullscreen();
        }
    }
});

ID("fullscreen").addEventListener("click", function() {
    game = document.getElementById("gameContainer");
    if (game.requestFullscreen) {
        game.requestFullscreen();
    } else if (game.mozRequestFullScreen) { /* Firefox */
        game.mozRequestFullScreen();
    } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        game.webkitRequestFullscreen();
    } else if (game.msRequestFullscreen) { /* IE/Edge */
        game.msRequestFullscreen();
    }
});

ID("navbarcontroller").addEventListener("click", function() {
    document.getElementById("navbar").style.display = (document.getElementById("navbar").style.display == "none") ? "block" : "none";
});