import graphql from 'graphql'
const { buildSchema } = graphql

const schemaProduct = buildSchema(`
    type Product {
        id: Int,
        title: String,
        description: String,
        code: String,
        stock: Int,
        price: Int,
        thumbnail: String,
    }

    input ProductInput {
        title: String,
        description: String,
        code: String,
        stock: Int,
        price: Int,
        thumbnail: String,
    }

    type Query {
        getProduct(id: ID!): Product,
        getProducts(field: String, value: String): [Product],
    }

    type Mutation {
        createProduct(data: ProductInput): Product,
        updateProduct(id: ID!, data: ProductInput): Product,
        deleteProduct(id: ID!): Product,
    }

`)

export default schemaProduct