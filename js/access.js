var isLocked = false;
function noscroll() {
    if (isLocked) {
        window.scrollTo(0, 0);
        document.documentElement.style.overflow = "hidden";
    }
    else {
        ID('modal').style.display = "none";
        document.documentElement.style.overflow = "auto";
        ID("@port").removeAttribute("style");
    }
}
noscroll();

ID("access").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) ID("accessBtn").click();
});

function Password() {
    if (ID("access").value === "48826") {
        ID('modal').style.display = "none";
        document.documentElement.style.overflow = "auto";
        ID("@port").removeAttribute("style");
    }
    else {
        if ( ID('modal-content').classList.contains("shakesideplay")) ID('modal-content').classList.remove("shakesideplay");
        ID('access').style.color = "grey";
        ID('access').disabled = true;
        ID('accessBtn').style.pointerEvents = "none";
        ID('accessBtn').style.opacity = "0.75";
        setTimeout(function() {
            ID("access").value = '';
            ID('access').style.color = "black";
            ID('access').disabled = false;
            ID('accessBtn').style.pointerEvents = "auto";
            ID('accessBtn').style.opacity = "1";
            ID("access").focus();
            ID('modal-content').classList.add("shakesideplay");
        }, 2000);
    }
}