const ID = (id) => document.getElementById(id);
const CL = (cl) => document.getElementsByClassName(cl);
const TN = (tn) => document.getElementsByTagName(tn);

window.onerror = (msg, url, lineNo, columnNo, error) => alert(msg);

// switching text on the home page
let a = ["SOFTWARE DEVELOPER","PROGRAMMER","GAME DEVELOPER","GRAPHIC DESIGNER","VIDEO EDITOR","PHOTOSHOPPER","WEB DEVELOPER","WEB DESIGNER","3D MODELER","CODER"];
if (ID("role"))
    AnimatedText(a, 4000, 20, true);

function AnimatedText(texts, changeInterval, updateInterval, onTextChanged) {
    let currentText = parseInt(Math.random() * texts.length);
    let areaText = texts[0];

    this.t1 = setInterval(function() {
        let c = parseInt(Math.random() * Math.max(texts[currentText].length, areaText.length));
        let s = texts[currentText][c];

        if (typeof s == 'undefined') s = " ";
        while (areaText.length < c) areaText += " ";

        let newText = (areaText.slice(0, c) + s + areaText.slice(c + 1)).trim();
        let diff = !(newText == areaText);
        areaText = newText;

        if (onTextChanged && diff) onTextChanged = true;
        ID("role").textContent = areaText.length == 0 ? "&nbsp;" : areaText;
    }.bind(this), updateInterval ? updateInterval : 50);

    this.t2 = setInterval(function() {
        currentText = parseInt(Math.random() * texts.length);
    }.bind(this), changeInterval ? changeInterval : 4000);
}

AnimatedText.prototype = {
    constructor: AnimatedText,
    stop: function() {
        clearInterval(this.t1); clearInterval(this.t2); 
    }
}

// navbar function scrolling down to hide else to show
/* let prevScrollpos = window.pageYOffset;
window.onscroll = function ScrollingBar() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        ID("navbar").style.top = "0";
    } else {
        ID("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;

    //ID('workexperience').offsetTop)
    //document.documentElement.scrollTop
    //ID("navbar").style.top = "-60px"
} */

//Searching for projects page.
function SearchingPorj() {
    let input, list, count;
    input = ID("search");
    list = ID("document").getElementsByTagName("h6");
    count = list.length;
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
            list[i].parentElement.style.display = "block";
        } else {
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

    ID("emptyresult").style.display = (count == 0) ? "block" : "none";
    ID("storedlist").style.display = (count == 0) ? "none" : "block";
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
window.onclick = function(event) {
    if (event.target == photomodal)
        photomodal.style.display = "none";
}

// connent page layout for reducing html code
function sharedLayout() {
    for (let i = 0; i < TN("div").length; i++) {
        let elmnt = TN("div")[i];
        let file = elmnt.getAttribute("layout");
        if (file) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    switch (this.status) {
                        case 200: this.responseText; break;
                        case 404: elmnt.innerHTML = "Page not found."; break;
                    }
                    
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

// PROFILE : fliping the e-book (not completed)
function DynamicAge() {
    let d = new Date();
    if (ID("dynamic-age"))
        ID("dynamic-age").textContent = (d.getFullYear() - ((d.getMonth() == 8 && d.getDate() == 10) ? 2000 : 2001)) + " ปี";
}
DynamicAge();

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