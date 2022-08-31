import './less/index.less'

// Your code goes here!
const headerNav = document.querySelector(".nav")
const navLInk = document.querySelectorAll(".nav a")

headerNav.addEventListener("mouseover", (event)=> {
    event.target.style.color = "red"
})

document.addEventListener("keydown", (e)=> {
alert(e.key)

})

document.addEventListener("wheel", ()=>{
navLInk.forEach(link => link.style.color = "yellow")
})

window.addEventListener("resize", ()=> {
    alert("working")
})


document.addEventListener("dblclick", (e)=> {
e.target.style.color = "orange"
})

document.addEventListener("select", (e)=> {
e.target.style.color = "pink"
})

window.addEventListener("load", ()=> {
    alert("window alert")
})

navLInk.forEach(link => {
    link.addEventListener("click", (e)=> {
        e.preventDefault()
    })

})

document.addEventListener("scroll", ()=>{
    navLInk[0].style.color = "green"  
})