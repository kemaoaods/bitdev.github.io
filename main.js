const ID = (id) => document.getElementById(id);
const CL = (cl) => document.getElementsByClassName(cl);
const TN = (tn) => document.getElementsByTagName(tn);

window.onerror = (msg, url, lineNo, columnNo, error) => alert(msg);

//Searching for projects page.
function SearchingPorj() {
    const input = ID("search");
    const list = ID("document").getElementsByTagName("h6");
    let count = list.length;
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
            list[i].parentElement.style.display = "block";
        }
        else {
            list[i].parentElement.style.display = "none";
            count--;
        }
    }

    ID("emptyresult").style.display = (count == 0) ? "block" : "none";
    ID("storedlist").style.display = (count == 0) ? "none" : "block";
}

//Searching for application page.
function SearchingApp() {
    let input, list, count;
    input = ID("search");
    list = ID("document").getElementsByClassName("item");
    count = list.length;
    for (let i = 0; i < list.length; i++) {
        if (list[i].children[0].innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
            list[i].children[0].parentElement.style.display = "block";
        } else {
            list[i].children[0].parentElement.style.display = "none";
            count--;
        }
    }

    ID("emptyresult").style.display = count == 0 ? "block" : "none";
    ID("storedlist").style.display = count == 0 ? "none" : "block";
}

// showing bigger photo when clicking on the photo target.
for (const each of CL("photoplace")) {
    for (const img of each.getElementsByTagName("img")) {
        img.addEventListener("click", function(){
            ID("focusimg").src = this.src;
            ID("photomodal").style.display = "block";
            //ID("caption").innerHTML = element.alt;
        });
    }
}

// close clicked photo when clicked outside the photo (photomodal)
window.onclick = (event) => {
    if (event.target == photomodal) photomodal.style.display = "none";
}

// PROFILE : fliping the e-book (not completed)
(function DynamicAge() {
    let d = new Date();
    if (ID("dynamic-age"))
        ID("dynamic-age").textContent = (d.getFullYear() - ((d.getMonth() == 8 && d.getDate() == 10) ? 2000 : 2001)) + " ปี";
})();

function flipbook(flip) {
    if ((ID("flipbookpage").textContent == 1 && flip == -1) || (ID("flipbookpage").textContent == 12 && flip == 1))
        flip = 0;
    
    ID("flipbook").src = "image/Magazine-NE/p" + (Number(ID("flipbookpage").textContent) + flip) + ".jpg";
    ID("flipbookpage").textContent = Number(ID("flipbookpage").textContent) + flip;
}

// PROFILE : BOOK
if (ID("portfolio")) {
    for (let i = 0; i < ID("portfolio").childElementCount; i++) {
        (function(index){
            ID("profile-headings").children[i].addEventListener("click", function(){
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

// Scroll to top of the page
window.scroll({
    top: 0,
    left: 0, 
    behavior: 'smooth' 
});