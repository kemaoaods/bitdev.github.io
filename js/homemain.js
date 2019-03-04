//Shorten function
function ID(id) {
    return document.getElementById(id);
}

//SWITCHING TEXTS ON MENU
var a = ["SOFTWARE DEVELOPER","PROGRAMMER","GAME DEVELOPER","GRAPHIC DESIGNER","VIDEO EDITOR","PHOTOSHOPPER","WEB DEVELOPER","WEB DESIGNER","3D MODELER","CODER"];
if (ID("role") != null) {
    AnimatedText(a, 4000, 20, true);
}

function AnimatedText(texts, changeInterval, updateInterval, onTextChanged) {
    var currentText = parseInt(Math.random() * texts.length);
    var areaText = texts[0];

    this.t1 = setInterval(function() {
        var c = parseInt(Math.random() * Math.max(texts[currentText].length, areaText.length));
        var s = texts[currentText][c];
        if (typeof s == 'undefined') s = " ";
        while (areaText.length < c) areaText += " ";
        var newText = (areaText.slice(0, c) + s + areaText.slice(c + 1)).trim();
        var diff = !(newText == areaText);
        areaText = newText;
        if (onTextChanged && diff) onTextChanged = true;
        document.getElementById("role").textContent = areaText.length == 0 ? "&nbsp;" : areaText;
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

// PRESS '`' to reload
document.documentElement.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === "Backquote") location.reload();
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        ID("navbar").style.top = "0";
    } else {
        ID("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;

    //ID('workexperience').offsetTop)
    //document.documentElement.scrollTop
    //ID("navbar").style.top = "-60px"
}

function Searching() {
    var input, list, count;
    input = ID("search");
    list = ID("document").getElementsByTagName("h6");
    count = list.length;
    for (var i = 0; i < list.length; i++) {
        if (list[i].innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
            list[i].parentElement.style.display = "block";
        } else {
            list[i].parentElement.style.display = "none";
            count--;
        }
    }
    if (count == 0) {
        ID("emptyresult").style.display = "block";
        ID("storedlist").style.display = "none";
    }
    else {
        ID("emptyresult").style.display = "none";
        ID("storedlist").style.display = "block";
    }
}

var focusablephoto = document.getElementsByClassName("photoplace");
for (var i = 0; i < focusablephoto.length; i++) {
    for (var j = 0; j < focusablephoto[i].getElementsByTagName("img").length; j++) {
            focusablephoto[i].getElementsByTagName("img")[j].addEventListener("click", function(){
            ID("focusimg").src = this.src;
            ID("photomodal").style.display = "block";
            //ID("caption").innerHTML = element.alt;
        });
    }
}

//close photomodal element id
window.onclick = function(event) {
    if (event.target == photomodal) {
        photomodal.style.display = "none";
    }
}

//CONNECTED PAGE
window.onload = function sharedLayout() {
    for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
        var elmnt = document.getElementsByTagName("div")[i];
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
};

//PORTFOLIO : BOOK
function flipbook(flip) {
    if ((ID("flipbookpage").textContent == 1 && flip == -1) || (ID("flipbookpage").textContent == 12 && flip == 1)) flip = 0;
    ID("flipbook").src = "image/Magazine-NE/p" + (Number(ID("flipbookpage").textContent) + flip) + ".jpg";
    ID("flipbookpage").textContent = Number(ID("flipbookpage").textContent) + flip;
}

//PORTFOLIO : BOOK
if (ID("portfolio") != null) {
    for (var i = 0; i < ID("portfolio").childElementCount; i++) {
        (function(index){
            ID("portheadingbuttons").children[i].addEventListener("click", function(){
                for (var j = 0; j < ID("portfolio").childElementCount; j++) {
                    if (index == j) {
                        ID("portfolio").children[j].style.display = "block";
                        ID("portheadingbuttons").children[j].classList.add("clicked");
                    }
                    else {
                        ID("portfolio").children[j].style.display = "none";
                        ID("portheadingbuttons").children[j].classList.remove("clicked");
                    }
                }
            });
        })(i);
    }
}

//Scroll to top of the page
window.scroll({
    top: 0,
    left: 0, 
    behavior: 'smooth' 
});