import React, { useEffect, useState } from "react";
import { compareHeroes } from "../../redux";
import { connect } from "react-redux";
import { Form, Input, Submit } from "./compareHeroesForm.styles";

const CompareHeroesForm = ({ compare }) => {
	const [idOne, setIdOne] = useState("");
	const [idTwo, setIdTwo] = useState("");

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		compare(idOne, idTwo);
	};

	return (
		<Form onSubmit={(e) => handleOnSubmit(e)}>
			<div>
				<Input type="number" value={idOne} placeholder="Id #1..." onChange={(e) => setIdOne(e.target.value)} />
				<Input type="number" value={idTwo} placeholder="Id #2..." onChange={(e) => setIdTwo(e.target.value)} />
			</div>
			<Submit margin="1rem 0" type="submit" value="Compare" />
		</Form>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		compare: (one: string, two: string) => dispatch(compareHeroes(one, two)),
	};
};

export default connect(null, mapDispatchToProps)(CompareHeroesForm);
