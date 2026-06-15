let but = document.querySelector("button")
let moved = false
let predict = document.querySelector(".predict")

but.addEventListener("mouseover", function() {
  if(!moved) {
    but.style.marginLeft = "100px"
    moved = true
  } else{
    but.style.marginLeft = "0px"
    moved = false
  }
})

setTimeout(function(){
  but.style.display = "none"
  predict.innerText = "Sorry......"
},10000)