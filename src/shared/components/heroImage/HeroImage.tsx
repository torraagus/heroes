import React, { useState } from "react";
import { LoaderIcon } from "../heroItem/heroItem.styles";

const HeroImage = ({ hero, children: heroInfo }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      <img
        style={{ height: "128px", borderRadius: 15 }}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(true)}
        src={hero.image.url}
      />
      {!imgLoaded ? <LoaderIcon /> : heroInfo}
    </>
  );
};

export default HeroImage;
