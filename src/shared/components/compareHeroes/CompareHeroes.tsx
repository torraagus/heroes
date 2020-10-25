import React, { useState } from "react";
import { connect } from "react-redux";
import { compareHeroes } from "../../redux";
import { Container } from "../../styled/Container";
import { Form, Submit, Input } from "./compareHeroes.styles";

const CompareHeroes = ({ heroData, fetchHero }) => {
  const [idOne, setIdOne] = useState("");
  const [idTwo, setIdTwo] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchHero(idOne, idTwo);
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
      <Container
        height="auto"
        display="flex"
        bgColor="inherit"
        justifyContent="center"
      >
        {heroData.error && <p>{heroData.error}</p>}
        {heroData.details.comparison?.map((p) => (
          <Container
            height="auto"
            width="108px"
            padding="1rem"
            bgColor="white"
            margin=".25rem"
            borderRadius="15px"
            hover={true}
            key={p.id}
          >
            <img style={{ height: 128 }} src={p.url} />
            <p>#{p.id}</p>
            <p style={{ fontWeight: "bold" }}>{p.name}</p>
            <p>
              <small>Combat: </small>{" "}
              <b>{p.combat != "null" ? p.combat : "-"}</b>
            </p>
            <p>
              <small>Intelligence: </small>{" "}
              <b>{p.intelligence != "null" ? p.intelligence : "-"}</b>
            </p>
            <p>
              <small>Strength: </small>{" "}
              <b>{p.strength != "null" ? p.strength : "-"}</b>
            </p>
            <p>
              <small>Durability: </small>{" "}
              <b>{p.durability != "null" ? p.durability : "-"}</b>
            </p>
            <p>
              <small>Power: </small> <b>{p.power != "null" ? p.power : "-"}</b>
            </p>
            <p>
              <small>Speed: </small> <b>{p.speed != "null" ? p.speed : "-"}</b>
            </p>
          </Container>
        ))}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    heroData: state.heroeDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHero: (one: string, two: string) => dispatch(compareHeroes(one, two)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompareHeroes);
