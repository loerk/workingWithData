
class CoffeeShop {
	constructor(name, menu) {
		this.name = name
		this.menu = menu
		this.orders = [];

	}

	addOrder(item) {
		let availableItem = this.menu.find(el => el.name === item)
		if (availableItem) {
			console.log(`${item} has been added to your orders`)
			return this.orders.push(availableItem)
		} else {
			console.log(`${item} is currently unavailable`)
		}
		return this.orders
	}


	fulfillOrder() {
		if (this.orders.length > 0) {
			console.log(`Your ${this.orders[0].name} is ready`)
			this.orders.shift()
		} else {
			console.log('All your orders have been fulfilled')
		}
	}

	listOrders() {
		if (this.orders.length > 0) {
			let list = []
			for (let order of this.orders) {
				list.push(order.name)
			}
			console.log(`This is you order: ${list.join(', ')}`)
		} else {
			console.log('You dont have any orders left')
		}
	}

	dueAmount() {
		let sum = this.orders.reduce((acc, curr) => { return acc + curr.price }, 0);
		console.log(`You have to pay ${sum.toFixed(2)}€`)

	}

	cheapestItem() {
		this.menu.sort((a, b) => a.price - b.price)
		console.log(`This is the cheapest item we offer: `, this.menu[0].name)
	}

	drinksOnly() {
		let drinksItemList = []
		this.menu.filter(item => item.type === 'drink')
			.forEach(item => drinksItemList.push(item.name))
		return `These are the drink we offer: ${drinksItemList.join(', ')}`
	}

	foodOnly() {
		let foodItemList = []
		this.menu.filter(item => item.type === 'food')
			.forEach(item => foodItemList.push(item.name))
		return `These are the food we offer: ${foodItemList.join(', ')}`
	}


}


const menu1 =
	[{
		name: 'Coffee',
		type: 'drink',
		price: 2.50,
	},
	{
		name: 'Black Tea',
		type: 'drink',
		price: 2.55,
	},
	{
		name: 'Hot Chocolate',
		type: 'drink',
		price: 3.99,
	},
	{
		name: 'Cinnamon Roll',
		type: 'food',
		price: 4.15,
	},
	{
		name: 'Croissant',
		type: 'food',
		price: 1.55,
	},
	{
		name: 'Vegan Bagel',
		type: 'food',
		price: 2.5,
	}]


let thisShop = new CoffeeShop('thisShop', menu1);

thisShop.addOrder('croissant')
thisShop.addOrder('coffee')
thisShop.addOrder('cinnamon roll')
thisShop.listOrders()
thisShop.dueAmount()
thisShop.addOrder('poo')
console.log(thisShop.orders)
thisShop.fulfillOrder()
thisShop.listOrders()
thisShop.fulfillOrder()
thisShop.fulfillOrder()
thisShop.fulfillOrder()
thisShop.listOrders()
thisShop.cheapestItem()
console.log(thisShop.drinksOnly())
console.log(thisShop.foodOnly())
