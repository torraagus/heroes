import { useState, useEffect } from "react";

export interface ScrollI {
	showScroll: boolean;
	pageYOffset: number;
	arrowAppearOffset: number;
	scrollTop: () => void;
}

function useScroller(): ScrollI {
	const arrowAppearOffset = 400;
	const [showScroll, setShowScroll] = useState(false);
	const [pageYOffset, setPageYOffset] = useState(0);

	const checkScrollTop = () => {
		setPageYOffset(window.pageYOffset);
		if (!showScroll && window.pageYOffset > arrowAppearOffset) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= arrowAppearOffset) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};
	}, [showScroll]);

	return { showScroll, scrollTop, pageYOffset, arrowAppearOffset };
}

export default useScroller;
