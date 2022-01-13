const { MeiliSearch } = require("meilisearch");
const movies = require("./movies.json");

client = new MeiliSearch({
    host: "http://localhost:7700",
    apiKey: "masterKey",
});

client.index("movies").addDocuments(movies);
