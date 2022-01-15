const { MeiliSearch } = require("meilisearch");
const movies = require("./movies.json");

client = new MeiliSearch({
    host: "http://eumpstdziw.us05.qoddiapp.com/",
    apiKey: "masterKey",
    headers: {
        "X-Meili-API-Key": process.env.MEILI_MASTER_KEY,
    },
});

client.index("movies").addDocuments(movies);
