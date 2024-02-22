const places = document.querySelectorAll( '.place')
places.forEach(place => {
    place.addEventListener( 'mouseover', () =>{
        removeActiveClasses()
        place.classList.add('active')
    })
})

function removeActiveClasses(){
    places.forEach(place => {
        place.classList.remove('active')
    })
}