const express = require('express')
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("../utils/utils");
const { rootValue } = require("../controller");
const router = express()

router.use(
    "/graphql",
    graphqlHTTP({
      schema,
      rootValue,
      graphiql: true,
    })
  );



module.exports = router