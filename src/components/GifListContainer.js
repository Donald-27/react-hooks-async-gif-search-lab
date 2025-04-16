import React, { useState } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  function fetchGifs(query) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=fTGsOS4A7PVEAb7WfaMeL0RRT10MI8aN&rating=g`)
      .then((res) => res.json())
      .then((data) => {
        const firstThree = data.data.slice(0, 3);
        const gifUrls = firstThree.map((gif) => gif.images.original.url);
        setGifs(gifUrls);
      });
  }

  return (
    <div className="container mt-4">
      <GifSearch onSearch={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
