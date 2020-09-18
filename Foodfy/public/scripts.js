
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const imageId = card.getAttribute('id')
        const title = card.querySelector('h1').innerHTML
        const author = card.querySelector('h3').innerHTML

        modalOverlay.classList.add('active')
        
        modalOverlay.querySelector('img').src = `assets/${imageId}.png`
        modalOverlay.querySelector('h1').innerHTML = `${title}`
        modalOverlay.querySelector('h3').innerHTML = `${author}`

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})


