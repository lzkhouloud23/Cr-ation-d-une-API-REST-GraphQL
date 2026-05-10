const fs = require('fs');
const path = require('path');
const express = require('express');
const { buildSchema } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/express');

const resolvers = require('./resolvers');
const userRoutes = require('./routes/userRoutes');
const deviceRoutes = require('./routes/deviceRoutes');

const app = express();
const port = 5000;

const schema = buildSchema(
  fs.readFileSync(path.join(__dirname, 'schema.gql'), 'utf8')
);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'TP REST/GraphQL avec RxDB',
    rest: {
      users: {
        list: 'GET /users',
        one: 'GET /users/:id',
        create: 'POST /users',
        update: 'PUT /users/:id',
        delete: 'DELETE /users/:id'
      },
      devices: {
        list: 'GET /devices',
        one: 'GET /devices/:id',
        byUser: 'GET /devices/user/:userId',
        create: 'POST /devices',
        update: 'PUT /devices/:id',
        delete: 'DELETE /devices/:id'
      }
    },
    graphql: 'POST /graphql'
  });
});

app.all('/graphql', createHandler({
  schema,
  rootValue: resolvers
}));

app.use('/users', userRoutes);
app.use('/devices', deviceRoutes);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
  console.log(`GraphQL disponible sur http://localhost:${port}/graphql`);
});