var guests = {
    1: "Carlyle, Lorraine, Mignonne & Shania"
}

function getGuest(i) {
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    var x = guests[id]
    if (x) {
        document.getElementById("to").innerHTML = "To, <br>" + x
    }
}