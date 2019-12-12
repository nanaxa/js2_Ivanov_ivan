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
                    <span class="title goods-title">${this.title}</span>
                    <span class="goods-price">${this.price} ₽</span>
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

//Пустые классы для корзины
/* список продуктов(массив) в корзине ProductList и их сумарная стоимость TotalPrice */
class CartList {
    constructor() {
        this.ProductList = [];//массив товара в корзине
        //метод подсчета суммы в корзине
        this.TotalPrice = () => {
            let totalSum = 0;
            this.ProductList.forEach((Product) => {if (product.price !=undefined || product.price != 0 ) {
                totalSum= totalSum+product.price;
            }
                
            }
            )
        }
        
        }
    
}   
    /*ПОЧЕМУ ТО НЕ РАБОТАЕТ КОД, ЕСЛИ РАСКОМЕНТИРОВАТЬ КОД КОТОРЫЙ НИЖЕ НАДО РАЗБИРАТЬСЯ*/

//2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.

/*GoodsList.prototype.EndSum = () {
    let sum = 0;
    this.goods.forEach((good) => {
        if (good.price!==undefined ) {
            sum+=parseInt(good.price);
            return sum;
        }
    })
}
*/
//метод подсчета суммы товаров в корзине со скидкой
CartList.prototype.TotalSum =()=> {
    this.Discount = Discount;
    this.TotalPrice = Math.round
(TotalPrice/100*Discount);
}
//