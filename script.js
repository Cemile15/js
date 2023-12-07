let btn=document.querySelector("#btn");
let body = document.querySelector("#body");


btn.addEventListener("click",()=>{
    let ggg= document.createElement("div");
    ggg.style.width= "600px"
    ggg.style.height="590px"
    ggg.style.background="red"

    
    body.append(ggg)

});



