import React, { FC } from "react";
import { Container } from "../../styled/Container";
import { Button as LoadMoreBtn } from "../../styled/Button";
import { props, btnProps } from "./pagination.styles";

type Props = {
	page: number;
	pagesTotal: number;
	onPageChange: (page: number) => void;
};

const Pagination: FC<Props> = ({ page, onPageChange, pagesTotal }) => {
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
