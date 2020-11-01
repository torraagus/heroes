import React, { useState } from "react";
import { Container } from "../../styled/Container";
import { Button as PrevBtn, Button as NextBtn } from "../../styled/Button";
import { props, btnProps } from "./pagination.styles";
import { colors } from "../../../browser/styles/colors";

const Pagination = ({ page, onPageChange, totalPages }) => {
  return (
    <Container {...props}>
      {page > 1 && (
        <PrevBtn {...btnProps} onClick={() => onPageChange(page - 1)}>
          Previous
        </PrevBtn>
      )}
      {totalPages > page && (
        <NextBtn {...btnProps} onClick={() => onPageChange(page + 1)}>
          Next
        </NextBtn>
      )}
    </Container>
  );
};

export default Pagination;
