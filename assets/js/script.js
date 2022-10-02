const burgerBtn = document.getElementsByClassName('fa-bars')[0]
const closeBtn = document.querySelector('.fa-xmark')

const overlayMenu = document.querySelector('.overlay')

console.log(overlayMenu)


burgerBtn.addEventListener('click', showOverlay)
closeBtn.addEventListener('click', closeMenu)

// function showOverlay() {
// overlayMenu.style.width= "100%"
// }

// function closeMenu() {
//     overlayMenu.style.width="0"
// }

function showOverlay() {
    overlayMenu.classList.add('active')
}

function closeMenu() {
    overlayMenu.classList.remove('active')

}