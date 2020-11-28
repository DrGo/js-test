const cmodel = document.getElementById("model")
const cyear = document.getElementById("year")
const ccolor = document.getElementById("color")
const carList = document.getElementById("car-list")

function addCar(){
    let li= document.createElement("li")
    li.textContent=`${cmodel.value}, ${cyear.value}`
    carList.appendChild(li)
}