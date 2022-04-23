import crypto from 'crypto'

class Cart {
    constructor(id,data) {
        this.id = id
        this.data = data;
    }

}

const cartDB = {}

function getCarts({field, value}) {
    const carts = Object.values(cartsDB)

    if(field && value) {
        return carts.filter(s => s[field] == value)
    }

    return carts
}

function getCart({id}) {
    if(!cartsDB[id]) {
        throw new Error('Cart not found')
    }

    return cartsDB[id]
}

function createCart({data}) {
    const id = crypto.randomBytes(10).toString('hex')
    const newCart = new Cart(id, data)
    cartsDB[id] = newCart

    return newCart
}

function updateCart({id, data}) {
    if(!cartsDB[id]) {
        throw new Error('Cart not found')
    }

    const cartUpdated = new Cart(id, data)
    cartsDB[id] = cartUpdated

    return cartUpdated
}

function deleteCart({id}) {
    if(!cartsDB[id]) {
        throw new Error('Cart not found')
    }

    const cartDeleted = cartsDB[id]
    delete cartsDB[id]

    return cartDeleted
}

export {
    getCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart
}