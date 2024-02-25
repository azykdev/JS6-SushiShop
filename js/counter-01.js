let btnMinus = document.querySelectorAll('[data-action="minus"]'),
    btnPlus = document.querySelectorAll('[data-action="plus"]'),
    counter = document.querySelectorAll('[data-counter]');

    

btnPlus.forEach( (item, i) => {
    item.addEventListener('click', () => {
        ++counter[i].textContent;
    })
})

btnMinus.forEach( (item, i) => {
    item.addEventListener('click', () => {
        if(parseInt(counter[i].textContent) > 1) {
            --counter[i].textContent;
        }
    })
})



// btnPlus bajaradigan funksiya
// btnPlus.onclick = () => {
//     ++counter.textContent;
// }

//  btnMinus bajaradigan funksiya
// btnMinus.onclick = () => {
//     if (parseInt(counter.textContent) > 1) {
//         --counter.textContent;
//     }
// }



