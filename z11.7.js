var x = prompt('введи число', '')
var n = prompt('введи степень', '')

if (n < 0) {
    alert('степень должна быть больше нуля')
}

function pow(x, n) {
    return x ** n; 
}

var result = x ** n 
alert(result)
pow(x, n);