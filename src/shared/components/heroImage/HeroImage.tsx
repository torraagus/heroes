import React, { useState } from "react";
import { LoaderIcon } from "../heroItem/heroItem.styles";
import { Image } from "./heroImage.styles";

const HeroImage = ({ hero, children: heroInfo }) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	return (
		<>
			<Image onLoad={() => setImgLoaded(true)} onError={() => setImgLoaded(true)} src={hero.image.url} />
			{!imgLoaded ? <LoaderIcon /> : heroInfo}
		</>
	);
};

export default HeroImage;
