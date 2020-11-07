import React, { FC, Fragment } from "react";
import { Container } from "../../styled/Container";
import { capitalize } from "../../utils";
import { options } from "./options";
import { containerProps, FilterName, Form, Options, Option, Title } from "./searchFilters.styles";

export type Filter = {
	by: string;
	value: string;
};

type Props = {
	filters: Filter[];
	onFilterSelected: (filters: Filter[]) => void;
};

const SearchFilters: FC<Props> = ({ onFilterSelected, filters }) => {
	const reducer = (activeFilters: Filter[], currFilter: Filter) => {
		const index = activeFilters.findIndex((filter) => filter.by === currFilter.by);
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
		<>
			<Title>Filters</Title>
			<Form>
				<Container {...containerProps}>
					{options.map((opt, i) => (
						<Fragment key={i}>
							<FilterName>{Object.keys(opt)[0]}:</FilterName>
							<Options
								value={filters?.find((f) => f.by === Object.keys(opt)[0])?.value}
								onChange={(e) => handleOnChange(Object.keys(opt)[0], e.target.value)}
							>
								{/* {console.log(Object.values(opt)[0])} */}
								{Object.values(opt)[0].map((opt, i) => (
									<Option key={i} value={opt}>
										{capitalize(opt)}
									</Option>
								))}
							</Options>
						</Fragment>
					))}
				</Container>
			</Form>
		</>
	);
};

export default SearchFilters;
