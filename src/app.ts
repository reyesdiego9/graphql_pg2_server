import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers, typeDefs } from './schema/index';
import { AppDataSource } from './db';
import { expressjwt } from 'express-jwt';
import cors from 'cors';
import { formatError } from 'graphql';

const PORT = 3000;
const JWT_SECRET = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');
const app = express();
app.use(
  cors(),
  express.json(),
  expressjwt({
    algorithms: ['HS256'],
    credentialsRequired: false,
    secret: JWT_SECRET
  })
);

const start = async () => {
  try {
    await AppDataSource;
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      formatError: (error) => {
        console.log(error); // imprime el error en la consola
        return formatError(error);
      },
      debug: true
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });

    app.listen(PORT, () => {
      console.log('server on port', PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
