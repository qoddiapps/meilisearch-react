import { MeiliSearch } from "meilisearch";
import Image from "next/image";
import { useEffect, useState } from "react";

const client = new MeiliSearch({
    host: "http://hvlrjtupcw.us05.qoddiapp.com/",
    headers: {
        Authorization: `Bearer ${process.env.MEILI_MASTER_KEY}`,
        "Content-Type": "application/json",
    },
});

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        //search movie index based on search value
        client
            .index("movies")
            .search(search)
            .then((results) => {
                setMovies(results.hits);
            });
    }, [search]);

    return (
        <div className="App">
            <div className="search">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="movies">
                {movies?.map((movie) => (
                    <div className="movie" key={movie.id}>
                        <h2>
                            {movie.id} - {movie.name}
                        </h2>

                        <div className="movie-info">
                            <p>{movie.imdb_id}</p>
                            <p>{movie.year}</p>
                            <p>{movie.director}</p>
                            <p>{movie.actors}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
