var isLocked = true;
function noscroll() {
    if (isLocked === true) window.scrollTo( 0, 0 );
    else document.getElementById('modal').style.display = "none";
}

document.getElementById("access").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) document.getElementById("accessBtn").click();
});

function Password() {
    if (document.getElementById("access").value === "48826") {
        document.getElementById('modal').style.display = "none";
        document.getElementById('navbar').style.display = "block";
        window.removeEventListener('scroll', noscroll);
    }
    else {
        if ( document.getElementById('modal-content').classList.contains("shakesideplay")) document.getElementById('modal-content').classList.remove("shakesideplay");
        document.getElementById('access').style.color = "grey";
        document.getElementById('access').disabled = true;
        document.getElementById('accessBtn').style.pointerEvents = "none";
        document.getElementById('accessBtn').style.opacity = "0.75";
        setTimeout(function() {
            document.getElementById("access").value = '';
            document.getElementById('access').style.color = "black";
            document.getElementById('access').disabled = false;
            document.getElementById('accessBtn').style.pointerEvents = "auto";
            document.getElementById('accessBtn').style.opacity = "1";
            document.getElementById("access").focus();
            document.getElementById('modal-content').classList.add("shakesideplay");
        }, 2000);
    }
}

window.addEventListener('scroll', noscroll);