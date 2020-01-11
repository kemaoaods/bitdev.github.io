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
    for (let each of TN("div")) {
        let file = each.getAttribute("layout");
        if (file) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {each.innerHTML = this.responseText;}
                    if (this.status == 404) {each.innerHTML = "Page not found.";}
                    each.removeAttribute("layout");
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