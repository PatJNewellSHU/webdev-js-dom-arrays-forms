(function(){
    document.getElementById("myHeading").innerHTML = "Pat Newell"
    document.querySelector("nav ul li").setAttribute("class", "currentPage")
    let firstLink = document.querySelector("nav ul li a")
    firstLink.setAttribute ("href", "https://google.co.uk")
    // event on button
    let myBttn = document.getElementById("myTestEvent")
    myBttn.addEventListener("click", myFunction)
    
    function myFunction(event){
        console.info("hi")  
        console.info(event.target)
        event.target.style.backgroundColor = "#f00"
    }

    // let redBtn = document.querySelector(".red")
    // redBtn.addEventListener("click", redFunction)
    let myBodyElement = document.querySelector("body")

    // function redFunction(){
    //     myBodyElement.setAttribute("class", "redBack")

    // }
    // let blueBtn = document.querySelector(".blue")
    // blueBtn.addEventListener("click", blueFunction)

    // function blueFunction(){
    //     myBodyElement.setAttribute("class", "blueBack")

    // }
    // let greenBtn = document.querySelector(".green")
    // greenBtn.addEventListener("click", greenFunction)

    // function greenFunction(){
    //     myBodyElement.setAttribute("class", "greenBack")

    // }
    // let defualtBtn = document.querySelector(".reset")
    // defualtBtn.addEventListener("click", defualtFunction)

    // function defualtFunction(){
    //     myBodyElement.removeAttribute("class")

    // }
})()
