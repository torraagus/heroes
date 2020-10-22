import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import { IReview } from "../../reducers/reviews.reducer";
import { isEmpty } from "../../utils";
import { Wrapper, Container, Title, Error, ReadAll } from "./reviews.styles";
import Review from "./review/Review";

type Props = {};

const Reviews: FC<Props> = () => {
	const { reviews, error } = useSelector((state: RootState) => state.reviewsReducer);

	return !isEmpty(reviews) ? (
		<Wrapper>
			<Title>Reviews</Title>
			<Container>
				{reviews.map((r: IReview) => (
					<Review key={r.id} review={r} />
				))}
			</Container>
			{error && <Error>{error}</Error>}
			<ReadAll>Read all reviews</ReadAll>
		</Wrapper>
	) : null;
};

export default Reviews;
