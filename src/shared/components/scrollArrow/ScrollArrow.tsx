import React, { FC } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import useScroller from "../../hooks/UseScroller";
import { Arrow } from "./scrollArrow.styles";

const ScrollArrow: FC = () => {
	const { showScroll, scrollTop } = useScroller();

	return (
		<Arrow>
			<MdKeyboardArrowUp onClick={scrollTop} size={60} style={{ display: showScroll ? "flex" : "none" }} />
		</Arrow>
	);
};

export default ScrollArrow;
