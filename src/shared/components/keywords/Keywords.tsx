import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import { IKeyword } from "../../reducers/movieKeywords.reducer";
import { isEmpty } from "../../utils";
import { Wrapper, Container, Title, Error } from "./keywords.styles";
import Keyword from "./keyword/Keyword";

type Props = {};

const Keywords: FC<Props> = () => {
	const { keywords, error } = useSelector((state: RootState) => state.movieKeywordsReducer);

	return !isEmpty(keywords) ? (
		<Wrapper>
			<Title>Keywords</Title>
			<Container>
				{keywords.map((k: IKeyword) => (
					<Keyword key={k.id} keyword={k.name} />
				))}
				{error && <Error>{error}</Error>}
			</Container>
		</Wrapper>
	) : null;
};

export default Keywords;
