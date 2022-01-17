import React from "react";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const searchClient = instantMeiliSearch(
    "http://hvlrjtupcw.us05.qoddiapp.com",
    process.env.MEILI_MASTER_KEY
);

const App = () => (
    <InstantSearch indexName="movies" searchClient={searchClient}>
        <SearchBox />
        <Hits hitComponent={Hit} />
    </InstantSearch>
);

const Hit = ({ hit }) => <Highlight attribute="name" hit={hit} />;

export default App;
