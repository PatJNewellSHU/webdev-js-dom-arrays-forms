(function(){
    let url = window.location.href;
    let fileName = url.split("/").pop();
    //document.querySelector("nav ul li").setAttribute("class", "currentPage")
    let listOfLinks = document.querySelectorAll("nav ul li")

    
    for(let i = 0; i < listOfLinks.length;i++){
        let currentLink = listOfLinks[i].querySelector("a").getAttribute("href")
        console.info(currentLink)
        if(currentLink === fileName){
        listOfLinks[i].setAttribute("class","currentPage");
        }   
    }
})()