import styled from "styled-components";

export type ContainerProps = {
	width?: string;
	width768?: string;
	width1024?: string;
	width1366?: string;

	height?: string;
	minHeight?: string;
	display?: string;
	display768?: string;

	flexDir?: string;
	flexDir768?: string;
	flexDir1024?: string;

	justifyContent?: string;
	justifyContent768?: string;

	alignItems?: string;
	alignItems768?: string;

	bgColor?: string;
	color?: string;
	padding?: string;
	padding768?: string;
	padding1024?: string;

	flexWrap?: string;
	flexWrap768?: string;

	hover?: boolean;
	maxHeight?: string;
	borderRadius?: string;
	borderTop?: string;
	margin?: string;
	shadow?: boolean;

	animation?: string;
	frames?: string;
	animationName?: string;
	animationDelay?: string;

	mobile?: boolean;

	overflowX768?: string;
};

export const Container = styled.div<ContainerProps>`
	width: ${({ width }) => (width ? width : "100vw")};
	height: ${({ height }) => height && height};
	min-height: ${({ minHeight }) => minHeight && minHeight};
	max-height: ${({ maxHeight }) => maxHeight && maxHeight};
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

	${({ mobile }) => mobile && `@media (min-width: 768px) {display: none;}`};

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
		justify-content: ${({ justifyContent768 }) => justifyContent768 && justifyContent768};
		flex-wrap: ${({ flexWrap768 }) => flexWrap768 && flexWrap768};
		overflow-x: ${({ overflowX768 }) => overflowX768 && overflowX768};
		display: ${({ display768 }) => display768 && display768};
		align-items: ${({ alignItems768 }) => alignItems768 && alignItems768};
	}

	@media (min-width: 768px) {
		${({ shadow }) =>
			shadow &&
			`
		-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
		-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
		box-shadow: 5px 5px 5px 0px #651a1b27
		`};
	}

	animation: ${({ animation }) => animation && animation};
	animation-delay: ${({ animationDelay }) => animationDelay && animationDelay};

	${({ animation, animationName, frames }) =>
		animation &&
		`@keyframes ${animationName} {
			${frames}
		}`};
`;
