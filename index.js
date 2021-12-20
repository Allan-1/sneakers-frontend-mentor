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
const imagethumbnails = document.querySelectorAll('#img-thumbs')

// modal
const modal = document.getElementById('modal')
const closemodal = document.getElementById('close-modal')
const overlay = document.getElementById('overlay')

// courasel
const next = document.getElementById('next')
const previous = document.getElementById('prev')
const imagebox = document.getElementById('courasel-img')

const mainSection = document.querySelector('.main')

let quantityAmount = parseInt(quantity.innerText)

const itemlists = [];

const imagelist = ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4']


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

imagethumbnails.forEach(button => button.addEventListener('click', ()=>{
    modal.classList.add('visible');
    overlay.classList.add('overlay')
}))

closemodal.addEventListener('click', ()=>{
    modal.classList.remove('visible')
    overlay.classList.remove('overlay')
})

// image index
let index = 0

next.addEventListener('click', ()=>{
    index += 1
    if(index < imagelist.length){
        imagebox.setAttribute('src', 'images/'+imagelist[index]+'.jpg')
    }else{
        index = 0
        imagebox.setAttribute('src', 'images/'+imagelist[index]+'.jpg')
    }
})
previous.addEventListener('click', ()=>{
    index -= 1
    if(index >= 0){
        imagebox.setAttribute('src', 'images/'+imagelist[index]+'.jpg') 
    }else{
        index = imagelist.length -1
        imagebox.setAttribute('src', 'images/'+imagelist[index]+'.jpg') 
    }
})