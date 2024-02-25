window.addEventListener('click', function (event) {

    const counterWrapper = event.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');

    

    if (event.target.dataset.action === 'plus') {
        ++counter.textContent;

        calcCartPrice()
    }

    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.textContent) > 1) {
            --counter.textContent;

            calcCartPrice()
            // if (event.target.closest('.cart-wrapper') && parseInt(counter.textContent) == 0)
        } else {
            event.target.closest('.cart-item').remove(); 

            toggleCartStatus()

            calcCartPrice()
        } 
    } 
}) 