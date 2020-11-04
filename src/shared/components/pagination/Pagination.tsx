import React from "react";
import { Container } from "../../styled/Container";
import { Button as LoadMoreBtn } from "../../styled/Button";
import { props, btnProps } from "./pagination.styles";

const Pagination = ({ page, onPageChange, pagesTotal }) => {
	return (
		<Container {...props}>
			{pagesTotal > page && (
				<LoadMoreBtn {...btnProps} onClick={() => onPageChange(page + 1)}>
					Load more
				</LoadMoreBtn>
			)}
		</Container>
	);
};

export default Pagination;
