import React, { Dispatch, FC, useEffect, useRef, useState } from "react";
import { compareHeroes } from "../../redux";
import { connect } from "react-redux";
import { Form, Input, Submit } from "./compareHeroesForm.styles";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import useScroller from "../../hooks/useScroller";

type Props = { compare: (idOne: string, idTwo: string) => (dispatch: Dispatch<AnyAction>) => void };

const CompareHeroesForm: FC<Props> = ({ compare }) => {
	const [idOne, setIdOne] = useState("");
	const [idTwo, setIdTwo] = useState("");
	const { pageYOffset, arrowAppearOffset } = useScroller();
	const inputRef = useRef<HTMLInputElement>(null);

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		compare(idOne, idTwo);
	};

	useEffect(() => {
		if (pageYOffset > arrowAppearOffset) inputRef.current.focus();
	}, [pageYOffset > arrowAppearOffset]);

	return (
		<Form onSubmit={(e) => handleOnSubmit(e)}>
			<div>
				<Input
					ref={inputRef}
					type="number"
					value={idOne}
					placeholder="Id #1..."
					onChange={(e) => setIdOne(e.target.value)}
				/>
				<Input type="number" value={idTwo} placeholder="Id #2..." onChange={(e) => setIdTwo(e.target.value)} />
			</div>
			<Submit margin="1rem 0" type="submit" value="Compare" />
		</Form>
	);
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, undefined, undefined>) => {
	return {
		compare: (one: string, two: string) => dispatch(compareHeroes(one, two)),
	};
};

export default connect(null, mapDispatchToProps)(CompareHeroesForm);
