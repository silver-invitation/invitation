var guests = {
    "1":  "Carlyle, Lorraine, Mignonne & Shania",
    "N02":  "Sherril, Vincy & Chantelle",
    "N03":  "Conrad, Marissa, Due-el, Wren & Gary",
    "N04":  "Rainer, Ruwanthi, Hannah & Gabriel",
    "N05":  "Marionette & Elias",
    "N06":  "Marius & Joan",
    "N07":  "Murphy & Ancila",
    "N08":  "Anne & Tarcy",
    "N09":  "Wesley & Diana",
    "N10":	"A. Faith & Jean",
    "N11":	"Dean & Mariolla",
    "N12":	"A. Jennifer & Raisa",
    "N13":	"Pinette & Rudolph",
    "N14":	"Torril & Keith",
    "N15":	"Roselyn & Arun",
    "N16":	"U. Jude, Maria & Caroline",
    "N17":	"Babette & Lloyd",
    "N18":	"A. Claire, Ralston & Wanda",
    "N19":	"A. Loretta & Ainsley",
    "N20":	"Ferdie & Suzie",
    "N21":	"Godfrey & Veronica",
    "N22":	"Delyse & fly",
    "N23":	"Charlotte & Abel",
    "N24":	"Cecil, Strandlin & Heather",
    "N25":	"Audrey",
    "N26":	"Nathan & Cynthia",
    "N27":	"Francis & Genevieve",
    "N28":	"Gavin & Aloma",
    "N29":	"Fr. Melroy",
    "N30":	"U. Barses & A. Otty",
    "N31":	"Lara & Earl",
    "N32":	"Lanfrence & Averil",
    "N33":	"Suzie & Amanda",
    "N34":	"Joseph, Gladys, Fr. Clifton & Clinto",
    "N35":	"Ralph & Caroline",
    "N36":	"Trevor & Yolanda",
    "N37":	"Savio & Savita",
    "N38":	"Johnson & Simone",
    "N39":  "Justin",

    "A1":   "Aldrin & Ella",
    "A02":  "Karen",
    "A03":  "A. Thelma",
    "A04":  "Deepak, Marianne & fly",
    "A05":  "U. Trevor, A. Maureen, Michelle & Dimple",
    "A06":  "U. Shanu, A. Glenda & Garry",
    "A07":  "Barry & fly",

    "S01":  "Rolanda",
    "S02":  "Pearl",
    "S03":  "Annette",

    "K01":  "San",
    "K02":  "Trevin",
    "K03":  "Jasmine",
    "K04":  "Eden",
    "K05":  "Heeral",
    
    "P01":  "Doris D'silva",
    "P02":  "Michael & Alvina",
    "P03":  "A. Melba",
    "P04":  "Mr. & Mrs. John Rodrigues",
    "P05":  "Bertilda & Theo",
    "P06":  "Alan & Judy",
    "P07":  "Irene",
    "P08":  "Fr. Michael and all the Priests of our Parish"
}

var to = document.getElementById("to")
var params = new URLSearchParams(window.location.search);

function getGuest() {
    console.log(params.get("id"))
    var x = guests[params.get("id")]
    if (x) {
        to.innerHTML = "Dear " + x + ","
    }
}