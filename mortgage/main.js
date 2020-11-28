// M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]

// P = principal loan amount

// i = monthly interest rate

// n = number of months required to repay the loan

function calc(){
  let principal= document.getElementById("principal")
  let interest= document.getElementById("interest")
  let amort= document.getElementById("amort")
  let result= document.getElementById("result")
  let p= parseFloat(principal.value)
  if (isNaN(p)) {
      alert("please enter valid principal amount")
      return
  }
  let i= parseFloat(interest.value )
  let am= parseFloat(amort.value)
  let amm= am *12
  let im= i /(100*12)
  let payment= p * (im *((1+ im)**amm)) / ((1+im)**amm -1)
  result.textContent = "Your monthly payment= $" + payment.toFixed(2)
}