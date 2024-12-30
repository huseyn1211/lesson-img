
let imgElements = document.querySelectorAll(".book")
imgElements.forEach(elements =>{
    elements.addEventListener("click",(e)=>{
        imgElements.forEach(elements2=>{
            elements2.style.transform = "scale(1)"

        })
        e.target.style.transform = "scale(1.1)"
    })
})








  let childrenElements = document.querySelectorAll(".child")


childrenElements.forEach(child =>{
    child.addEventListener("click",(e) =>{
        childrenElements.forEach(child2 =>{
            if (child2 === e.target) {
                child2.style.color = "yellow"

            }else{
            child2.style.color = "black"
            }
        })
       

    })
})