const nav_links = document.querySelectorAll('.nav-links a')
const subtract = document.getElementById('minus')
const add = document.getElementById('plus');
const quantity = document.getElementById('quanti')
// total items to be added on cart
const itemquantity = document.getElementById('quantity')
const addCartButton = document.getElementById('addcart')
const cartIconButton = document.getElementById('carticon')
const cartItem = document.getElementById('cartitem')

let quantityAmount = parseInt(quantity.innerText)

const itemlists = [];


nav_links.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault()
    })
})

add.addEventListener('click', () =>{
    quantityAmount += 1
    quantity.innerText = quantityAmount
})

subtract.addEventListener('click', () => {
    if(quantityAmount > 0){
        quantityAmount -= 1
        quantity.innerText = quantityAmount
    }
})

addCartButton.addEventListener('click', ()=>{
    itemlists.push({quantityAmount})
    console.log(itemlists)
})

cartIconButton.addEventListener('click', ()=>{
    // cartItem.style.visibility = 'visible'
    cartItem.classList.toggle('visible')
})