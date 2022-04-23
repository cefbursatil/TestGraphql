import graphql from 'graphql'
const { buildSchema } = graphql

const schemaCart = buildSchema(`
    type Cart {
        id: Int,
        productos: Array,
        userid: Int,
    }

    input CartInput {
        productos: Array,
        userid: Int,
    }

    type Query {
        getCart(id: ID!): Cart,
        getCarts(field: String, value: String): [Cart],
    }

    type Mutation {
        createCart(data: CartInput): Cart,
        updateCart(id: ID!, data: CartInput): Cart,
        deleteCart(id: ID!): Cart,
    }

`)

export default schemaCart