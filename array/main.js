let grades = []  //create an empty list
const grade = document.getElementById("grade")
const list = document.getElementById("list")
const avgBox = document.getElementById("avg")

function add() {
    //validation
    let n = parseInt(grade.value)
    if (Number.isInteger(n)) {
        grades.push(n) //add to the list
        list.textContent = grades // show the list
        //   err.textContent =""
        grade.style.border = "1px soild green"
        grade.title = ""
    } else {
        // err.textContent ="not valid number"
        grade.style.border = "2px dotted red"
        grade.title = "invalid number"
    }
}

function sort() {
    grades.sort()
    list.textContent = grades // show the list
}
function calc() {
   let sum = 0
    for (let i = 0; i < grades.length; i++) {
        sum = sum + grades[i]
    }
    let avg = sum / grades.length
    avgBox.textContent = `average= ${avg}`
}