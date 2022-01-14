const { MeiliSearch } = require("meilisearch");
const movies = require("./movies.json");

client = new MeiliSearch({
    host: "http://eumpstdziw.us05.qoddiapp.com/",
    apiKey: "masterkey",
});

client.index("movies").addDocuments(movies);
