import { Client } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65aa43df32d9ebb04b8b");

export default client;
