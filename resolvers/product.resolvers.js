import crypto from 'crypto'

class Product {
    constructor(id,data) {
        this.id = id
        this.data = data;
    }

}

const productsDB = {}

function getProducts({field, value}) {
    const products = Object.values(productsDB)

    if(field && value) {
        return products.filter(s => s[field] == value)
    }

    return products
}

function getProduct({id}) {
    if(!productsDB[id]) {
        throw new Error('Product not found')
    }

    return productsDB[id]
}

function createProduct({data}) {
    const id = crypto.randomBytes(10).toString('hex')
    const newProduct = new Product(id, data)
    productsDB[id] = newProduct

    return newProduct
}

function updateProduct({id, data}) {
    if(!productsDB[id]) {
        throw new Error('Product not found')
    }

    const productUpdated = new Product(id, data)
    productsDB[id] = productUpdated

    return productUpdated
}

function deleteProduct({id}) {
    if(!productsDB[id]) {
        throw new Error('Product not found')
    }

    const productDeleted = productsDB[id]
    delete productsDB[id]

    return productDeleted
}

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}