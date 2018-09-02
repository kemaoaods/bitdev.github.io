var isLocked = false;
function noscroll() {
    if (isLocked === true) {
        window.scrollTo( 0, 0 );
    } 
}
Locked();
function Locked() {
    if (isLocked === false) {
        document.getElementById('modal').style.display = "none";
    }
}

document.getElementById("access").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("accessBtn").click();
    }
});

function Password() {
    if (document.getElementById("access").value === "48826") {
        document.getElementById('modal').style.display = "none";
        window.removeEventListener('scroll', noscroll);
    }
    else {
        document.getElementById("access").value = '';
        document.getElementById("incorrect").style.display = "block";
    }
}

window.addEventListener('scroll', noscroll);