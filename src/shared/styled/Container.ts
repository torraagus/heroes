import styled from "styled-components";

type ContainerProps = {
	width?: string;
	width768?: string;
	width1024?: string;
	width1366?: string;

	height?: string;
	display?: string;
	flexDir?: string;
	flexDir768?: string;
	flexDir1024?: string;

	justifyContent?: string;
	alignItems?: string;
	bgColor?: string;
	color?: string;
	padding?: string;
	padding768?: string;
	padding1024?: string;

	flexWrap?: string;
	hover?: boolean;
	maxHeight?: string;
	borderRadius?: string;
	borderTop?: string;
	margin?: string;
};

export const Container = styled.div<ContainerProps>`
	width: ${({ width }) => (width ? width : "100vw")};
	min-height: ${({ height }) => (height ? height : "100vh")};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
	display: ${({ display }) => (display ? display : "block")};
	flex-direction: ${({ flexDir }) => flexDir && flexDir};
	justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
	align-items: ${({ alignItems }) => alignItems && alignItems};
	background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
	color: ${({ color }) => (color ? color : "#000")};
	padding: ${({ padding }) => padding && padding};
	margin: ${({ margin }) => margin && margin};
	border-top: ${({ borderTop }) => borderTop && borderTop};
	border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
	flex-wrap: ${({ flexWrap }) => flexWrap && flexWrap};

	:hover {
		cursor: ${({ hover }) => hover && "pointer"};
		opacity: ${({ hover }) => hover && "75%"};
		border-radius: ${({ hover }) => hover && "15px"};
	}

	@media (max-width: 1366px) {
		width: ${({ width1366 }) => width1366 && width1366};
	}

	@media (max-width: 1024px) {
		width: ${({ width1024 }) => width1024 && width1024};
		flex-direction: ${({ flexDir1024 }) => flexDir1024 && flexDir1024};
		padding: ${({ padding1024 }) => padding1024 && padding1024};
	}

	@media (max-width: 768px) {
		width: ${({ width768 }) => width768 && width768};
		flex-direction: ${({ flexDir768 }) => flexDir768 && flexDir768};
		padding: ${({ padding768 }) => padding768 && padding768};
	}
`;
