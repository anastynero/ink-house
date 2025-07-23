import {catalogData} from './catalog-data.js';
const buttons = document.querySelectorAll('.country-btn');
const container = document.querySelector('.items');
const englandItems = catalogData.filter(item => item.country === 'england')
const franceItems = catalogData.filter(item => item.country === 'france')
const germanyItems = catalogData.filter(item => item.country === 'germany')

buttons.forEach((button) => button.addEventListener('click', function(){
    const selectedCountry = button.getAttribute('data-category')
    renderItems(selectedCountry);
}))
// TODO: починить выделение табов
function renderItems(country){
    let data = [];
    if (country === 'england'){data = englandItems}
    else if (country === 'france'){data = franceItems}
    else{data = germanyItems}
        container.innerHTML = data.map((item) => (
           ` <div class="catalog-item">
              <img src="${item.image}" alt="${item.title}"/>
              <p class='item-author'>${item.author}</p>
              <h3 class='item-title'>${item.title}</h3>
              <p class='item-description'>${item.description}</p>
              <p class='item-price'>${item.price}</p>
              <a href="#" class="btn">В корзину</a>
            </div>`
          )).join('');
}


renderItems('france')