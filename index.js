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
const incart = document.getElementById('incart');

const mainSection = document.querySelector('.main')

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
        itemquantity.innerText = quantityAmount
        incart.innerText = quantityAmount;
        incart.classList.add('visible')
        let ttl = quantityAmount * 125
        totalamount.innerText = '$' + ttl + '.00'
    }
})

cartIconButton.addEventListener('click', ()=>{
    if(itemlists.length === 0){
        emptyCartItem.classList.toggle('visible')
    }
    cartItem.classList.toggle('visible')
})

mainSection.addEventListener('click', ()=>{
    cartItem.classList.remove('visible')
})