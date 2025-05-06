// TODO: optimize

const numberOfItems = parseInt(readline())
const numberOfOrders = parseInt(readline())

let itemList = []
let orderList = []

for (let i = 0; i < numberOfItems; i++) {

    const item = readline()

    let [category, size, price] = item.split(" ")

    itemList.push({
        category: category,
        size: size,
        price: parseInt(price),
        isSold: false
    })
}

itemList.sort((a, b) => a.price - b.price)

for (let i = 0; i < numberOfOrders; i++) {

    const order = readline()

    let [category, size] = order.split(" ")

    orderList.push({
        category: category,
        size: size,
        isFulfilled: false,
        price: 0
    })
}

for (order of orderList) {

    for (item of itemList) {

        if (!order.isFulfilled && !item.isSold && item.category === order.category && item.size === order.size) {
            order.price = item.price
            item.isSold = true
            order.isFulfilled = true
        }
    }
}

for (order of orderList) {
    if (order.isFulfilled === true) {
        console.log(order.price)
    }
    else {
        console.log('NONE')
    }
}