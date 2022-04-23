import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schemaProduct from './schema/product.schema.js'
import schemaCart from './schema/cart.schema.js'
import * as resolvers from './resolvers/product.resolvers.js'

const app = express()

app.use('/product', graphqlHTTP({
    schema: schemaProduct,
    rootValue: resolvers,
    graphiql: true
}))
app.use('/cart', graphqlHTTP({
    schema: schemaCart,
    rootValue: resolvers,
    graphiql: true
}))

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running (${PORT})...`)
})
