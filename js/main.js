(function(){
    document.getElementById("myHeading").innerHTML = "Pat Newell"
    firstLink.setAttribute ("href", "https://google.co.uk")
    // event on button
    let myBttn = document.getElementById("myTestEvent")
    myBttn.addEventListener("click", myFunction)
    
    function myFunction(event){
        console.info("hi")  
        console.info(event.target)
        event.target.style.backgroundColor = "#f00"
    }

    let redBtn = document.querySelector(".red")
    redBtn.addEventListener("click", redFunction)
    let myBodyElement = document.querySelector("body")

    function redFunction(){
        myBodyElement.setAttribute("class", "redBack")

    }
    let blueBtn = document.querySelector(".blue")
    blueBtn.addEventListener("click", blueFunction)

    function blueFunction(){
        myBodyElement.setAttribute("class", "blueBack")

    }
    let greenBtn = document.querySelector(".green")
    greenBtn.addEventListener("click", greenFunction)

    function greenFunction(){
        myBodyElement.setAttribute("class", "greenBack")

    }
    let defualtBtn = document.querySelector(".reset")
    defualtBtn.addEventListener("click", defualtFunction)

    function defualtFunction(){
        myBodyElement.removeAttribute("class")
    }
    let imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg','images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];

    let picBtn = document.querySelector('#myImages')

    setInterval(chgImage, 500)
    picBtn.addEventListener("click",manualChgImage)
    let index = 0
    function chgImage()
    {
        if(index == imageAr.length - 1){
            index = 0
        }
        document.getElementById('myImages').setAttribute('src', imageAr[index]);
        index += 1
    }
    function manualChgImage(){

        if(index == imageAr.length - 1){
            index = 0
        }
        else{
            index += 1
        }
        document.getElementById('myImages').setAttribute('src', imageAr[index]);
    }

})()
