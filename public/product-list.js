const items = document.querySelector(".items");
let listProducts = [];
 
const addDataToHtml = () => {
    listProducts.innerHTML = ``;
    if(listProducts.length > 0) {
        listProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('items');

            productDiv.innerHTML = `
                <img src="${product.image.thumbnail}" alt="image">
                <button class="flex items-center content-center gap-2 py-1 px-3 -mt-4 ml-16 bg-yellow-500 rounded-3xl sticky cursor-pointer">
                    <img src="/main-folder/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart">
                    Add To Cart
                </button>
                <div>
                    <h4 class="text-rose-300 text-sm">${product.category}</h4>
                    <p>${product.name}</p>
                    <div>${product.price}</div>
                </div>
            `;
            items.appendChild(productDiv);
        })
    }
}

const initApp = () => {
    fetch('data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        listProducts = data;
        addDataToHtml();
    })
}
initApp();