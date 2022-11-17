(function(){
    let pricePounds;
    let exchnageRate;
    let priceEuros;
    let convertForm = document.getElementById('myForm');
    let msg = document.getElementById('msg');

    convertForm.addEventListener('submit',formSubmission)
    function formSubmission(ev){
        ev.preventDefault();
        pricePounds = parseFloat(document.getElementById('pounds').value);
        exchangeRate = 1.14
        priceEuros = 0
        if(isNaN(pricePounds)){
            msg.style.display = "block";
            msg.innerHTML = "You must enter a number";
            msg.setAttribute('class', 'error');
        }
        if(pricePounds === 0){
            msg.style.display = "block";
            msg.innerHTML = "You must enter more than zero."
            msg.setAttribute('class', 'error');
        }else{
            priceEuros = pricePounds * exchangeRate;
            msg.style.display = "block";
            priceEuros = priceEuros.toFixed(2);
            msg.innerHTML = "You will get &euro;"+priceEuros;
            msg.removeAttribute('class');
        }
    }
    document.getElementById('pounds').addEventListener('focus', function(){
        this.value = "";
        msg.innerHTML = "";
        msg.removeAttribute('class');
        })
})()