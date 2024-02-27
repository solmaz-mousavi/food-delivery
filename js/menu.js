// select page elements and variables-------------------------------------------------------
const productsContainer = document.querySelector('.products-container')
const titleElem = document.querySelector('.title-text h1')
const pathElem = document.querySelector('.title-text p')
const groupID = new URLSearchParams(window.location.search).get('group_id')


// functions--------------------------------------------------------------------------------
// page title handler
function titleHandler(productGroup){
    const groupTitle = productGroup.group_title;
    titleElem.innerHTML = groupTitle;
    pathElem.innerHTML = 'خانه &#8592; منو &#8592; ' + groupTitle;
}

// creating product list tumbnails
function productTmbHandler(productGroup){

    const productList = productGroup.product_list;

    for (let i = 0; i < productList.length; i++) {

        const productTmbElem = document.createElement('div');
        productTmbElem.className = 'product-tumbnail';
    
        const productTmbTopElem = document.createElement('div');
        productTmbTopElem.className = 'product-tumbnail-top';
    
        const productCapElem = document.createElement('div');
        productCapElem.className = 'product-caption';
        
        const productTitleElem = document.createElement('h3');
        productTitleElem.innerText = productList[i].product_name;
        
        const productPriceElem = document.createElement('p');
        productPriceElem.innerText = productList[i].product_price /1000 + ',000 ' + ' تومان';
        
        const productImgElem = document.createElement('img');
        productImgElem.setAttribute('src',productList[i].product_img);
        productImgElem.className = 'product-img';
    
        const productDetailsElem = document.createElement('p');
        productDetailsElem.innerText = [...productList[i].product_cntnr];
    
    
        productCapElem.appendChild(productTitleElem);
        productCapElem.appendChild(productPriceElem);
    
        productTmbTopElem.appendChild(productCapElem);
        productTmbTopElem.appendChild(productImgElem);
    
        productTmbElem.appendChild(productTmbTopElem);
        productTmbElem.appendChild(productDetailsElem);
    
        productsContainer.appendChild(productTmbElem);
    }
}

// insert json file data--------------------------------------------------------------------
let requestURL = 'https://raw.githubusercontent.com/solmaz-mousavi/data-json-files/master/foodDelivery-productsData.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL , true);
request.responseType = 'json';
request.send();

request.onload = function(){

    const productGroup = request.response.product_group[groupID-1];

    titleHandler(productGroup)
    productTmbHandler(productGroup)
}


