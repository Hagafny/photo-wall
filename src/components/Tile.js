import React from "react";

const Tile = ({ alt, url }) => {
  return <img className='tile' src={url} alt={alt} />;
};

export default Tile;
