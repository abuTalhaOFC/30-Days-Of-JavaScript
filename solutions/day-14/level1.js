let inputFild = document.querySelector("#inpt")
let inputSubmitBtn = document.querySelector("#btn")

inputSubmitBtn.addEventListener('click', showMassege)
 

function showMassege (){
    let x = inputFild.value
    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
        if(x>=5 || x <= 10) throw 'its ok'
      } catch (err) {
        console.log(err)
        alert(err)
      }
    
}

 
