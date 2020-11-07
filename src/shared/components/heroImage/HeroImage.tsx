import React, { FC, ReactNode, useState } from "react";
import { HeroDetailsT } from "../../redux/heroeDetails/heroeDetailsReducer";
import { LoaderIcon } from "../heroItem/heroItem.styles";
import { Image } from "./heroImage.styles";

type Props = { hero: HeroDetailsT; children: ReactNode };

const HeroImage: FC<Props> = ({ hero, children: heroInfo }) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	return (
		<>
			<Image onLoad={() => setImgLoaded(true)} onError={() => setImgLoaded(true)} src={hero.image.url} />
			{!imgLoaded ? <LoaderIcon /> : heroInfo}
		</>
	);
};

export default HeroImage;
