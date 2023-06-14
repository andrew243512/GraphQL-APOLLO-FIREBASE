import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import * as admin from "firebase-admin";
import { Supplier } from "./shared/models/Supplier";
import { Customer } from "./shared/models/Customer";
import { ValidationError, ApolloError } from "apollo-server";
import {serviceAccountKey} from "../serviceAccountKey";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey as admin.ServiceAccount),
});

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    async suppliers() {
      try {
        const suppliers = await admin.firestore().collection("Suppliers").get();
        return suppliers.docs.map((supplier) => supplier.data()) as Supplier[];
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async customer(_: null, args: { id: string }) {
      try {
        const customerDoc = await admin
          .firestore()
          .doc(`Customers/${args.id}`)
          .get();
        const customer = customerDoc.data() as Customer | undefined;
        return customer || new ValidationError("customer ID not found");
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },

  //   Mutation: {
  //     addBook: (_, { title, author }) => {
  //       const book = { title, author };
  //       books.push(book);
  //       return book;
  //     },
  //   },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
