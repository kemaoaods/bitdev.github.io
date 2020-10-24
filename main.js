const ID = (id) => document.getElementById(id);
const CL = (cl) => document.getElementsByClassName(cl);
const TN = (tn) => document.getElementsByTagName(tn);

window.onerror = (msg, url, lineNo, columnNo, error) => alert(msg);

// close clicked photo when clicked outside the photo (photomodal)
window.onclick = (event) => {
    if (event.target == photomodal) photomodal.style.display = "none";
}

// Scroll to top of the page
window.scroll({
    top: 0,
    left: 0, 
    behavior: 'smooth' 
});

window.onload = () => {
    // showing bigger photo when clicking on the photo target.
    for (const each of CL("photoplace")) {
        for (const img of each.getElementsByTagName("img")) {
            img.addEventListener("click", function(){
                ID("focusimg").src = this.src;
                ID("photomodal").hidden = false;
                //ID("caption").innerHTML = element.alt;
            });
        }
    }

    // PROFILE : fliping the e-book (not completed)
    if (ID("dynamic-age")) {
        const d = new Date();
        ID("dynamic-age").textContent = (d.getFullYear() - ((d.getMonth() == 8 && d.getDate() == 10) ? 2000 : 2001)) + " ปี";
    }

    // PROFILE : BOOK
    if (ID("portfolio")) {
        for (let i = 0; i < ID("portfolio").childElementCount; i++) {
            (function(index){
                ID("profile-headings").children[i].addEventListener("click", function() {
                    for (let j = 0; j < ID("portfolio").childElementCount; j++) {
                        if (index == j) {
                            ID("portfolio").children[j].style.display = "block";
                            ID("profile-headings").children[j].classList.add("selected-profile-heading");
                        }
                        else {
                            ID("portfolio").children[j].style.display = "none";
                            ID("profile-headings").children[j].classList.remove("selected-profile-heading");
                        }
                    }
                });
            })(i);
        }
    }

    window.onload = null;
}

function flipbook(flip) {
    if ((ID("flipbookpage").textContent == 1 && flip == -1) || (ID("flipbookpage").textContent == 12 && flip == 1))
        flip = 0;
    
    ID("flipbook").src = "image/Magazine-NE/p" + (Number(ID("flipbookpage").textContent) + flip) + ".jpg";
    ID("flipbookpage").textContent = Number(ID("flipbookpage").textContent) + flip;
}