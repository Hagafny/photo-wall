import React from "react";
import Tile from "./Tile";
const WallDisplay = ({ images, handleLoading }) => {
  const tiles = images.map((image) => (
    <Tile key={image.id} url={image.url} alt={image.alt} />
  ));

  return (
    <>
      <div className='imageContainer'>{tiles}</div>
      <button onClick={handleLoading}>Refresh</button>
    </>
  );
};

export default WallDisplay;
