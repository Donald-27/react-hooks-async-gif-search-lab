import React from "react";

function GifList({ gifs }) {
  return (
    <ul>
      {gifs.map((gif, index) => (
        <li key={index}>
          <img src={gif} alt={`gif-${index}`} />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
