import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import config from "../config";
import { getImages } from "../images.service";
import "./App.css";
import WallDisplay from "./WallDisplay";
import Loading from "./Loading";
// import mockImages from "./hardcodedImages.json";

function App() {
  const [isloading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  // For testing
  // const getHardcodedImages = () => Promise.resolve(mockImages);

  const fetchImages = useCallback(() => {
    setIsLoading(true);
    getImages(config.photos_amount)
    .then((images) => {
      setIsLoading(false);
      setImages(images);
    });
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className='background'>
      {isloading ? (
        <Loading />
      ) : (
        <WallDisplay images={images} handleLoading={fetchImages} />
      )}
      ;
    </div>
  );
}

export default App;
