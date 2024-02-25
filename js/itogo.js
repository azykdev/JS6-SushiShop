// function calcCartPrice() {
//     let totalPrice = document.querySelector('.total-price'),
//         cartWrapper = document.querySelector('.cart-wrapper'),
//         priceCurrency = cartWrapper.querySelector('.price__currency'),
//         total = 0;


// }




calcCartPrice = () => {

    const cartWrapper = document.querySelector('.cart-wrapper'),
          priceEl = cartWrapper.querySelectorAll('.price__currency'),
          totalPriceEl = document.querySelector('.total-price');

    let totalPrice = 0;


    priceEl.forEach(function (item) {
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
              
        totalPrice += parseInt(item.innerText) * parseInt(amountEl.innerText);   
    })


    totalPriceEl.innerText = totalPrice;

    // Dostavka besplatna qachon korinishi
    let free = document.querySelector('.delivery-cost');

    if (totalPrice >= 1000) {
        free.classList.add('free');
        free.innerText = 'бесплатно'
    } else if (totalPrice < 1000){
        free.classList.remove('free');
        free.innerText = '250 ₽'
    }
}

