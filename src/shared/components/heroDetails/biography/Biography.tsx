import React, { FC } from "react";
import { CategoryTitle, Property, PropertyName, PropertyValue } from "../heroDetails.styles";
import { properties, BiographyI } from "./biography.properties";
import { Alias, AliasesWrapper } from "./biography.styles";

type Props = { heroName: string; biography: BiographyI };

const Biography: FC<Props> = ({ heroName, biography }) => {
	return (
		<>
			<CategoryTitle>Biography</CategoryTitle>
			{properties.map((p, index) => {
				return (
					<Property key={p.name}>
						<PropertyName>{p.name}</PropertyName>
						{index !== 0 && index !== 2 && index !== 6 ? (
							<PropertyValue>
								{biography[p.prop] !== "" && biography[p.prop] !== "null" ? biography[p.prop] : "-"}
							</PropertyValue>
						) : index === 6 ? (
							<PropertyValue textTransform="capitalize">
								{biography[p.prop] !== "" && biography[p.prop] !== "null" ? biography[p.prop] : "-"}
							</PropertyValue>
						) : index === 0 ? (
							<PropertyValue>
								{biography[p.prop] !== "" && biography[p.prop] !== "null" ? biography[p.prop] : heroName}
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
