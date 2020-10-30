import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { compareHeroes } from "../../redux";
import { Container } from "../../styled/Container";
import HeroImage from "../heroImage/HeroImage";
import { Form, Submit, Input, wrapperProps, heroProps } from "./compareHeroes.styles";
import Powerstats from "./Powerstats";

const CompareHeroes = ({ hero, compare, history }) => {
  const [idOne, setIdOne] = useState("");
  const [idTwo, setIdTwo] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    compare(idOne, idTwo);
  };

  return (
    <>
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <div>
          <Input
            type="number"
            value={idOne}
            placeholder="Id #1..."
            onChange={(e) => setIdOne(e.target.value)}
          />
          <Input
            type="number"
            value={idTwo}
            placeholder="Id #2..."
            onChange={(e) => setIdTwo(e.target.value)}
          />
        </div>
        <Submit margin="1rem 0" type="submit" value="Compare" />
      </Form>
      <Container {...wrapperProps}>
        {hero.error && <p style={{ color: "red" }}>{hero.error}</p>}
        {hero.details.comparison?.map((hero) => (
          <Container
            {...heroProps}
            key={hero.id}
            onClick={() => history.push(`heroes/${hero.id}`)}
          >
            <HeroImage hero={hero}>
              <Powerstats hero={hero} />
            </HeroImage>
          </Container>
        ))}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    hero: state.heroeDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    compare: (one: string, two: string) => dispatch(compareHeroes(one, two)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(CompareHeroes);
