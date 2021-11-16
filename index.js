const nav_links = document.querySelectorAll('.nav-links a')
const subtract = document.getElementById('minus')
const add = document.getElementById('plus');
const quantity = document.getElementById('quanti')
// total items to be added on cart
const itemquantity = document.getElementById('quantity')
const totalamount = document.getElementById('totalamt')
const addCartButton = document.getElementById('addcart')
const cartIconButton = document.getElementById('carticon')
const cartItem = document.getElementById('cartitem')
const emptyCartItem = document.getElementById('cartitemempty')

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
    if(quantityAmount != 0){
        itemlists.push({quantityAmount})
        itemquantity.innerText = itemlists[0].quantityAmount
    }
})

cartIconButton.addEventListener('click', ()=>{
    if(itemlists.length === 0){
        emptyCartItem.classList.toggle('visible')
    }
    cartItem.classList.toggle('visible')
})