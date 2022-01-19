const { MeiliSearch } = require("meilisearch");
const movies = require("./movies.json");

client = new MeiliSearch({
    host: "http://hvlrjtupcw.us05.qoddiapp.com/",
    headers: {
        Authorization: `Bearer ${process.env.MEILI_MASTER_KEY}`,
        "Content-Type": "application/json",
    },
});

//delete movies and jobs index
// client
//     .index("movies")
//     .delete()
//     .then(() => {
//         console.log("movies index deleted");
//     });

client.index("movies").addDocuments(movies);
