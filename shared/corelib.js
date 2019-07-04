const ID = (id) => document.getElementById(id);
const CL = (cl) => document.getElementsByClassName(cl);
const TN = (tn) => document.getElementsByTagName(tn);

// PRESS '`' to reload
document.documentElement.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.keyCode === "Backquote") location.reload();
});