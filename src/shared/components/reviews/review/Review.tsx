import React, { FC } from "react";
import { IReview } from "../../../reducers/reviews.reducer";
import { Container, Content, Author } from "./review.styles";

type Props = { review: IReview };

const Review: FC<Props> = ({ review }) => {
	return review ? (
		<Container>
			<Author href={review.url} target="blank">
				{review.author}
			</Author>
			<Content>{review.content}</Content>
		</Container>
	) : null;
};

export default Review;
