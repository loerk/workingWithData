
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }


    list() {
        if (this.items.length != 0) {
            console.log('---------------')
            console.log('Cart:')
            console.log('---------------')
            this.items.forEach(item => console.log(
                `Item: ${item.name}\nPrice: ${item.price}\nQuantity: ${item.quantity}\nSubtotal: ${item.quantity * item.price}\n---------------`
            ))
            console.log('_______________')

        } else {
            console.log('You dont have any items in your cart,yet')
        }
    }

    add(product) {
        let productNames = this.items.map(item => item.name)
        let index = productNames.indexOf(product.name)

        if (index === -1) {
            this.items.push({
                ...product,
                quantity: 1,
            })
        } else {
            let itemsUntilIndex = this.items.slice(0, index)
            let itemsAfterIndex = this.items.slice(index + 1)
            let updatedProduct = { ...this.items[index], quantity: this.items[index].quantity + 1 }
            let updatedProducts = [...itemsUntilIndex, updatedProduct, ...itemsAfterIndex]
            this.items = updatedProducts
        }
    }

    remove(name) {
        let item = this.items.find(item => name === item.name)
        if (item.quantity >= 1) {
            item.quantity--
        }
        if (item.quantity === 0) {
            let index = this.items.indexOf(item)
            this.items.splice(index, 1)
        }
    }

    getTotal() {
        let total = this.items.reduce((total, curr) => total + curr.price * curr.quantity, 0)
        return `Total: ${total}€`
    }

    shippingCost() {
        let itemsInCart = this.items.reduce((result, curr) => result + curr.quantity, 0)
        let total = this.items.reduce((total, curr) => total + curr.price * curr.quantity, 0)

        if (total > 100) {
            return 0
        } else if (itemsInCart < 5) {
            return 4.9
        } else {
            return 9.9
        }

    }

}


let myCart = new Cart();
let shoes = new Product("shoes", 15.99);
let shirt = new Product("shirt", 25.99);
let jeans = new Product("jeans", 29.99);



myCart.list()


myCart.add(shirt)
myCart.add(shoes)
myCart.add(shirt)
myCart.add(shirt)
myCart.list()
console.log(myCart.getTotal())
console.log(myCart.shippingCost())
