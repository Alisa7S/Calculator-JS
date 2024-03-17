//const body = document.body

//body.style.background ='blue'
//const arr = [ '123', 23, true,{}]

//const elemCalc = body.childNodes[1]

//console.log(elemCalc.nextSibling.nextSibling)

const button = document.querySelector('.button')
const tablo = document.querySelector('.tablo')
const numbers = ['0','1','2','3','4','5','6','7','8','9',',']
const operators = ['AC','+/-','%','*','-','+','=']

let num1 = 0
let num2 = 0
let operator = ''

//function log(){
    //console.log('click on button')
//}

button.addEventListener('click',(event)=>{
    const context = event.target.innerText
    //if(context){
        //console.log(context)

    if(numbers.includes(context)){
        console.log('число')
        tablo.value = context
        num1 = +tablo.value

    }else if (operators.includes(context)){
        console.log('оператор')
    }else {
        console.log('не число и не оператор')
    }
})
