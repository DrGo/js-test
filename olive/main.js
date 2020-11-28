let inventory= [
    {
        name : "Directors",
        price : 10,
        qty : 10
    },
    {
        name : "Lama",
        price : 8,
        qty : 7
    },
    {
        name : "Mission",
        price : 12,
        qty : 17
    },
]

function addShip(){
    const oilName = document.getElementById("oilName")
    const qtybox = document.getElementById("qty")
    if (oilName.value==="") {
        alert("please enter name")
        return
    }
    let qty = parseInt(qtybox.value)
    console.log(qtybox.value, qty);
    if (isNaN(qty) || qty < 0 ) {
        alert("please enter valid quantity")
        return
    }
    let card = document.createElement("div")
    card.className = "card"
    let content= `
    <p>Mission</p>
    <img src="img/directors.jpg" alt="" width="80px">
    <p>Price: 9$</p>
    <p>Quantity: 8</p>
    `
    content= content.replace("Mission", oilName.value)
    card.innerHTML = content
    const mainDiv = document.getElementById("main")
    mainDiv.appendChild(card)
    // card.getElementById("oilName").textContent = oilName.value

}

