import React from "react";
import { CategoryTitle, Property, PropertyName, PropertyValue } from "../heroDetails.styles";
import { properties } from "./biography.properties";
import { Alias, AliasesWrapper } from "./biography.styles";

const Biography = ({ heroName, biography }) => {
	return (
		<>
			<CategoryTitle>Biography</CategoryTitle>
			{properties.map((p, index) => {
				return (
					<Property key={p.name}>
						<PropertyName>{p.name}</PropertyName>
						{index !== 2 && index !== 6 ? (
							<PropertyValue>{biography[p.prop] != "" ? biography[p.prop] : heroName}</PropertyValue>
						) : index === 6 ? (
							<PropertyValue textTransform="capitalize">
								{biography[p.prop] != "" ? biography[p.prop] : heroName}
							</PropertyValue>
						) : (
							<AliasesWrapper>
								{biography.aliases.map((a, i) => (
									<Alias key={i}>{a}</Alias>
								))}
							</AliasesWrapper>
						)}
					</Property>
				);
			})}
		</>
	);
};

export default Biography;
