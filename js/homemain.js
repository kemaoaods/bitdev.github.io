var a = document.getElementById("role");
var b = ["SOFTWARE DEVELOPER","PROGRAMMER","GAME DEVELOPER","GRAPHIC DESIGNER","VIDEO EDITOR","PHOTOSHOPPER","WEB DEVELOPER","WEB DESIGNER","3D MODELER","CODER"];
var c = 4000; //(optional, default 4000): time between string changes in ms
var d = 15; //(optional, default 50) : time between character changes in ms
var e = true; //(optional): a callback function called when a character is changed (useful for animations)
AnimatedText(a, b, c, d, e);

function AnimatedText(target, texts, changeInterval, updateInterval, onTextChanged) {
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
        if (onTextChanged && diff) onTextChanged();
        target.innerHTML = areaText.length == 0 ? "&nbsp;" : areaText;
    }.bind(this), updateInterval ? updateInterval : 50);
    this.t2 = setInterval(function() {
        currentText = parseInt(Math.random() * texts.length);
        }.bind(this), changeInterval ? changeInterval : 4000);
    }
    AnimatedText.prototype = {
        constructor: AnimatedText,
        stop: function() { clearInterval(this.t1); clearInterval(this.t2); 
    }
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}

function Searching() {
    var input, h6, count;
    input = document.getElementById("search");
    div = document.getElementById("document");
    h6 = div.getElementsByTagName("h6");
    count = h6.length
    for (var i = 0; i < h6.length; i++) {
        if (h6[i].innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
            h6[i].parentElement.style.display = "block";
        } else {
            h6[i].parentElement.style.display = "none";
            count--;
        }
    }
    EmptyResult(count);
}

function EmptyResult(i) {
    if (i === 0) {
        document.getElementById("emptyresult").style.display = "block";
    }
    else {
        document.getElementById("emptyresult").style.display = "none";
    }
}

var focusablephoto = document.getElementsByClassName("photoplace");
for (var i = 0; i < focusablephoto.length; i++) {
    for (var j = 0; j < focusablephoto[i].getElementsByTagName("img").length; j++) {
            focusablephoto[i].getElementsByTagName("img")[j].addEventListener("click", function(){
            document.getElementById("focusimg").src = this.src;
            document.getElementById("photomodal").style.display = "block";
            //document.getElementById("caption").innerHTML = element.alt;
        });
    }
}

//close photomodal element id
window.onclick = function(event) {
    if (event.target == photomodal) {
        photomodal.style.display = "none";
    }
}

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

window.scroll({
    top: 0, //use when scroll up''
    left: 0, 
    behavior: 'smooth' 
});