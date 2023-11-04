var togglerBTN = document.querySelector('.nav-toggler');
if (typeof togglerBTN !== 'undefined') {
    togglerBTN.addEventListener('click', function() {
        var navbarEL = document.querySelector('.Navbar');
        navbarEL.classList.toggle("navbar-collapsed");
    });
}

var playersRange = document.getElementById(`players`);
if (typeof playersRange !== 'undefined') {
    document.addEventListener("DOMContentLoaded", (event) => {
        var modsRange = document.getElementById(`mods`);
        var old = 5;
        playersRange.onchange = function() {
            var valueorsmth = parseFloat(playersRange.value) + parseFloat(modsRange.value) - 1;
            if (old > 8) old = 0;
            if (valueorsmth >= 8) {
                valueorsmth = 8;
            }
            if (old) document.getElementById(old).style.display = "none"
            document.getElementById(valueorsmth).style.display = "flex"
            old = parseFloat(playersRange.value) + parseFloat(modsRange.value) - 1
        }

        modsRange.onchange = function() {
            var valueorsmth = parseFloat(playersRange.value) + parseFloat(modsRange.value) - 1;
            if (old > 8) old = 0;
            if (valueorsmth >= 8) {
                valueorsmth = 8;
            }
            if (old) document.getElementById(old).style.display = "none"
            document.getElementById(valueorsmth).style.display = "flex"
            old = parseFloat(playersRange.value) + parseFloat(modsRange.value) - 1
        }
    });
}

function Ping(URL, element) {
    var fakeImg = document.createElement("img");
    fakeImg.display = "hidden";
    var start = new Date().getTime();
    fakeImg.src = URL;
    fakeImg.addEventListener("error", function() {
        var end = new Date().getTime();
        element.innerHTML = "" + (end - start) + "ms";
    });
}

function StartPing() {
    Ping("https://pinguk01.wisehosting.com/", document.getElementById("uk-speed"));
    Ping("https://panel.wisehosting.com/ping", document.getElementById("us-speed"));
}

function pingTest(domain) {
    var startTime, endTime;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 2) {
            startTime = new Date().getTime();
        }

        if (xhr.readyState === 3) {
            endTime = new Date().getTime();
            var responseTime = endTime - startTime;
            console.log("Response time for " + domain + ": " + responseTime + "ms");
            return responseTime;
        }
    }

    xhr.open("GET", "https://" + domain, true);
    xhr.send();
}