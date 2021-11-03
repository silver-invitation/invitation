var guests = {
    1: "Carlyle, Lorraine, Mignonne & Shania",
    2: "Sherril, Vincy & Chantelle"
}

var to = document.getElementById("to")
var params = new URLSearchParams(window.location.search);

function getGuest() {
    var x = guests[params.get("id")]
    if (x) {
        to.innerHTML = "Dear " + x + ","
    }
}