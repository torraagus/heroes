import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 2rem 0 0 2vw;
	width: 13vw;

	@media (max-width: 1366px) {
		width: 23vw;
		margin: 2rem 0 0 2vw;
	}

	@media (max-width: 1024px) {
		width: 90vw;
		margin: 2rem 0 0 0;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 2rem 0 0 0;
`;

export const Title = styled.h2``;
export const Error = styled.p`
	color: red;
`;
