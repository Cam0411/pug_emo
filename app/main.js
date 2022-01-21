const menu = document.querySelector(".menu")
const modal = document.querySelector(".modal")
const content = document.querySelector(".content__modal")
menu.addEventListener("click",()=> {
  modal.classList.add("open")
 
})
modal.addEventListener("click",() => {
    modal.classList.remove("open")
})
content.addEventListener("click",event => {
    event.stopPropagation()
})