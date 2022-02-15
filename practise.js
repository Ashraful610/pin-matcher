// genarate button
 function getPin (){
    const pin = Math.round(Math.random()* 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin()
    }
 }
function generatePin(){
 const pin = getPin() ;
  document.getElementById('display-pin').value = pin ;
}


// calculate
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText 
    const calcNumber = document.getElementById('typed-numbers');
    if(isNaN (number)){
        if(number == 'C'){
            calcNumber.value = ''
        }
    }
    else{
        const previousNumber = calcNumber.value 
        const newNumber = previousNumber + number
        calcNumber.value = newNumber     
    }
})

// notify 
function verifyPin(){
    const pin = document.getElementById('display-pin').value ;
    const typed = document.getElementById('typed-numbers').value ;
    const notifySuccess = document.getElementById('notify-success');
    const notifyError = document.getElementById('notify-Error')
    if(pin == typed){
        notifySuccess.style.display = 'block';
        notifyError.style.display = 'none';
    }
    else {
        notifySuccess.style.display = 'none';
        notifyError.style.display = 'block';
    }
}