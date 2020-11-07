import React, { FC } from "react";
import { CategoryTitle, Property, PropertyName, PropertyValue } from "../heroDetails.styles";
import { properties, WorkT } from "./work.properties";

type Props = { work: WorkT };

const Work: FC<Props> = ({ work }) => {
	return (
		<>
			<CategoryTitle>Work</CategoryTitle>
			{properties.map((p) => (
				<Property key={p.name}>
					<PropertyName>{p.name}</PropertyName>
					<PropertyValue>{work[p.prop]}</PropertyValue>
				</Property>
			))}
		</>
	);
};

export default Work;
