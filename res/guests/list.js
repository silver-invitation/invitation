var guests = {
    1: "Carlyle, Lorraine, Mignonne & Shania"
}

function getGuest(i) {
    document.getElementById("to").innerHTML = "To, <br>" + guests[i]
}