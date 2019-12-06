const goods = [
    { title: "Shirt", price: 100 },
    { title: "Jeans", price: 200 },
    { title: "T-Shirt", price: 70 },
     {title: "Cap", price: 50 },
];

const renderGoodsItem = (title, price) => {
    return `<div class='goods-item'><h3>${title}</h3><p>${price}</p></div>`
    };

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join(` `);
    document.querySelector(`.goods-list`).innerHTML = goodsList;
} 
renderGoodsList(goods);