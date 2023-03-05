const checkbox = document.querySelector(".checkbox")
const annually = document.querySelectorAll(".annually")
const monthly = document.querySelectorAll(".monthly")



checkbox.addEventListener("input", () =>{
        monthly.forEach(element =>{
            element.classList.toggle('hidden')
        })
        annually.forEach(element =>{
            element.classList.toggle("hidden")
        })
})
