/*const goods = [
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
renderGoodsList(goods);*/
class GoodsItem {
    constructor(title = 'Без имени', price = '') {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
                    <h3 class="title goods-title">${this.title}</h3>
                    <p>${this.price} ₽</p>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods()  {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 150 },
            { title: 'Jacket', price: 150 },
            { title: 'Shoes', price: 150 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
