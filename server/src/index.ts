import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import mysql from "mysql2";
import { schema } from "./Schema";
import { Users } from "./Entities/Users";

/* all code main function */
const main = async () => {
  await createConnection({
    type: "mysql",
    database: "Testusers",
    username: "root",
    password: "password",
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  const port: number = 3001;
  const app: any = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

  await app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/`);
  });
};

/* calling main function */
try {
  main();
} catch (err: any) {
  console.log(err);
}
