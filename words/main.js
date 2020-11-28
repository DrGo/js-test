

// A = pi*r2
function circleArea(r){
 let a = 3.14 * r*r
 return(a)
}

function test() {
    // //let x = circleArea(2)
    // let x= fullName("Iryna", "f")
    // console.log(x)
    // let y= fullName("Salah", "x")
    let y=legalAge(33, "us")
    console.log(y)
    Math.sqrt
  }
  
  // given a name and gender,
  // return Mr. xxx if gender==m
  // otherwise return Ms.

  function fullName(name, gender){
    if(gender=="m") {
        return("Mr. "+ name)
    } 
    else if(gender=="f"){
        return("Ms. "+ name)
    } else {
        return("Error")
    }
  }

 legalAge(25, "ca")
  // given an age return wether someone can drink in Canada or USA
  // in Canada, if age >18
  // in USA if age >21

  // punctuations
  // & ampersand
  // ! exclimation
  // , comma
  // . period
  //; semicolon
  //: colon
  //# : hash
  // ^ hat

  function legalAge(age, country){
      if(age>18 && country=="ca") {
          return("you are allowed to drink")
      } else if (age>21 && country=="us") {
          return("you are allowed to drink")
      } else {
          return("you are not allowed to drkin")
      }
  }