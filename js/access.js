function noscroll() {
  window.scrollTo( 0, 0 );
}

document.getElementById("access").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("accessBtn").click();
    }
});

function Password() {
    if (document.getElementById("access").value === "100943") {
        document.getElementById('id01').style.display = "none";
        window.removeEventListener('scroll', noscroll);
    }
    else {
        document.getElementById("access").value = '';
        document.getElementById("incorrect").style.display = "block";
    }
}

window.addEventListener('scroll', noscroll);