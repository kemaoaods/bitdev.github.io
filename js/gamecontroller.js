const ID = (id) => document.getElementById(id);
const CL = (cl) => document.getElementsByClassName(cl);
const TN = (tn) => document.getElementsByTagName(tn);

isFullscreen = false;
ID("fullscreen").addEventListener("click", function() {
    if (ID("gameContainer").requestFullscreen) {
        ID("gameContainer").requestFullscreen();
    } else if (ID("gameContainer").mozRequestFullScreen) { /* Firefox */
        ID("gameContainer").mozRequestFullScreen();
    } else if (ID("gameContainer").webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        ID("gameContainer").webkitRequestFullscreen();
    } else if (ID("gameContainer").msRequestFullscreen) { /* IE/Edge */
        ID("gameContainer").msRequestFullscreen();
    }
});

ID("navbarcontroller").addEventListener("click", function() {
    ID("navbar").style.display = (ID("navbar").style.display == "none") ? "block" : "none";
});

function sharedLayout() {
    for (var i = 0; i < TN("div").length; i++) {
        var elmnt = TN("div")[i];
        var file = elmnt.getAttribute("layout");
        if (file) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    elmnt.removeAttribute("layout");
                    sharedLayout();
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}
sharedLayout();