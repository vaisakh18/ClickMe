let but = document.querySelector("button")
let moved = false

but.addEventListener("mouseover", function() {
  if(!moved) {
    but.style.marginLeft = "100px"
    moved = true
  } else{
    but.style.marginLeft = "0px"
    moved = false
  }
  
})
