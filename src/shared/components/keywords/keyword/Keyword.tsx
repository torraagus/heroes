import React, { FC } from "react";
import { Name } from "./keyword.styles";

type Props = { keyword: string };

const Keyword: FC<Props> = ({ keyword }) => {
	return <Name>{keyword}</Name>;
};

export default Keyword;
