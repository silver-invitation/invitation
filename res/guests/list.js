var guests = {
    1: "Carlyle, Lorraine, Mignonne & Shania"
}

function getGuest(i) {
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id); // "sai"

    document.getElementById("to").innerHTML = "To, <br>" + guests[id]
}