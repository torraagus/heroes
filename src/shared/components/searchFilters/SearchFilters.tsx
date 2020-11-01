import React, { FC } from "react";
import { colors } from "../../../browser/styles/colors";
import { Container } from "../../styled/Container";

type Props = {
  filters: { by: string; value: string }[];
  onFilterSelected: (filters) => void;
};

const SearchFilters: FC<Props> = ({ onFilterSelected, filters }) => {
  const reducer = (activeFilters, currFilter) => {
    const index = activeFilters.findIndex(
      (filter) => filter.by === currFilter.by
    );
    if (index != -1) activeFilters.splice(index, 1);
    return [...activeFilters, currFilter];
  };

  const handleOnChange = (by: string, value: string) => {
    if (value === "Both" || value === "All") {
      filters.splice(
        filters.findIndex((filter) => filter.by === by),
        1
      );
      onFilterSelected([...filters]);
    } else {
      onFilterSelected([...filters, { by, value }].reduce(reducer, []));
    }
  };

  return (
    <Container
      height="auto"
      width="90vw"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="left"
      borderRadius="15px"
      padding="1rem 1rem"
      margin="1rem 0"
    >
      <h5
        style={{
          color: colors.secondary,
          textTransform: "uppercase",
          letterSpacing: 3,
        }}
      >
        Filters
      </h5>
      <form style={{ display: "flex" }}>
        <div style={{ padding: ".5rem" }}>
          <p style={{ fontSize: 12, color: colors.primary, padding: "0.25rem 0" }}>
            Publisher:
          </p>
          <select
            style={{ height: 36, borderRadius: 15, outline: "none" }}
            value={filters?.find((f) => f.by === "publisher")?.value}
            onChange={(e) => handleOnChange("publisher", e.target.value)}
          >
            <option style={{ padding: "1rem 0" }}>All</option>
            <option>Marvel Comics</option>
            <option>DC Comics</option>
            <option>Shueisha</option>
          </select>
        </div>
        <div style={{ padding: ".5rem" }}>
          <p style={{ fontSize: 12, color: colors.primary, padding: "0.25rem 0" }}>
            Gender
          </p>
          <select
            style={{ height: 36, borderRadius: 15 }}
            value={filters?.find((f) => f.by === "gender")?.value}
            onChange={(e) => handleOnChange("gender", e.target.value)}
          >
            <option>Both</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div style={{ padding: ".5rem" }}>
          <p style={{ fontSize: 12, color: colors.primary, padding: "0.25rem 0" }}>
            Alignment
          </p>
          <select
            style={{ height: 36, borderRadius: 15 }}
            value={filters?.find((f) => f.by === "alignment")?.value}
            onChange={(e) => handleOnChange("alignment", e.target.value)}
          >
            <option>Both</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
        </div>
      </form>
    </Container>
  );
};

export default SearchFilters;
