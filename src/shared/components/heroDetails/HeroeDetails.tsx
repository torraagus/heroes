import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { colors } from "../../../browser/styles/colors";
import {
  clearHeroeDetails,
  fetchHeroeDetails,
} from "../../redux/heroeDetails/heroeDetailsAction";
import { props } from "./heroDetails.styles";
import { Container } from "../../styled/Container";

const HeroeDetails = ({ hero, fetchHeroe, clearState, location }) => {
  useEffect(() => {
    fetchHeroe(location.pathname.split("/").pop());
    return () => {
      clearState();
    };
  }, []);

  return (
    <Container {...props}>
      <Container
        width="90vw"
        display="flex"
        flexDir="column"
        alignItems="center"
        padding="2rem 0"
      >
        <img style={{ width: 200, borderRadius: 15 }} src={hero.image?.url} />
        {hero.id && (
          <h1 style={{ margin: "1rem 0" }}>
            {hero.name} (#{hero.id})
          </h1>
        )}
        <div style={{ width: "90vw", display: "flex" }}>
          {hero.biography && (
            <div
              style={{
                width: "70vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2 style={{ padding: "1rem 0 .5rem 0" }}>Biography</h2>
              <div style={{ margin: ".25rem 0" }}>
                <p>Full name</p>{" "}
                <p
                  style={{
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.biography["full-name"] != ""
                    ? hero.biography["full-name"]
                    : hero.name}
                </p>
              </div>
              <div style={{ margin: ".25rem 0" }}>
                <p>Alter egos</p>{" "}
                <p
                  style={{
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.biography["alter-egos"]}
                </p>
              </div>
              <div style={{ margin: ".25rem 0" }}>
                <p>Aliases </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {hero.biography.aliases.map((a, i) => (
                    <p
                      key={i}
                      style={{
                        fontWeight: "bold",
                        backgroundColor: `${colors.primary}`,
                        padding: ".25rem .5rem",
                        margin: ".5rem .25rem 0 0",
                        color: "white",
                      }}
                    >
                      {a}
                    </p>
                  ))}
                </div>
              </div>
              <div style={{ margin: ".25rem 0" }}>
                <p>Place of birth</p>{" "}
                <p
                  style={{
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.biography["place-of-birth"]}
                </p>
              </div>
              <div style={{ margin: ".25rem 0" }}>
                <p>First appearance</p>{" "}
                <p
                  style={{
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.biography["first-appearance"]}
                </p>
              </div>
              <div style={{ margin: ".25rem 0" }}>
                <p>Publisher</p>{" "}
                <p
                  style={{
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.biography.publisher}
                </p>
              </div>
              <div style={{ margin: ".25rem 0" }}>
                <p>Alignment</p>{" "}
                <p
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.biography.alignment}
                </p>
              </div>
              <h2 style={{ padding: "1rem 0 .5rem 0" }}>Work</h2>
              <div style={{ margin: ".25rem 0" }}>
                <p>Occupation</p>{" "}
                <p
                  style={{
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.work.occupation}
                </p>
              </div>
              <div style={{ margin: ".25rem 0" }}>
                <p>Base</p>{" "}
                <p
                  style={{
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.work.base}
                </p>
              </div>
              <h2 style={{ padding: "1rem 0 .5rem 0" }}>Connections</h2>
              <div style={{ margin: ".25rem 0" }}>
                <p>Group affiliation</p>{" "}
                <p
                  style={{
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.connections["group-affiliation"]}
                </p>
              </div>
              <div style={{ margin: ".25rem 0" }}>
                <p>Relatives</p>{" "}
                <p
                  style={{
                    fontWeight: "bold",
                    margin: ".25rem 0",
                    color: `${colors.primary}`,
                  }}
                >
                  {hero.connections.relatives}
                </p>
              </div>
            </div>
          )}
          {hero.powerstats && (
            <div
              style={{
                width: "20vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2 style={{ padding: "1rem 0 .5rem 0" }}>Powerstats</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  backgroundColor: colors.primary,
                }}
              >
                <p style={{ color: "white" }}>Combat</p>
                <p style={{ color: colors.fourth, fontWeight: "bold" }}>
                  {hero.powerstats.combat}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  backgroundColor: colors.primary,
                }}
              >
                <p style={{ color: "white" }}>Intelligence</p>
                <p style={{ color: colors.fourth, fontWeight: "bold" }}>
                  {hero.powerstats.intelligence}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  backgroundColor: colors.primary,
                }}
              >
                <p style={{ color: "white" }}>Strength</p>
                <p style={{ color: colors.fourth, fontWeight: "bold" }}>
                  {hero.powerstats.strength}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  backgroundColor: colors.primary,
                }}
              >
                <p style={{ color: "white" }}>Durability</p>
                <p style={{ color: colors.fourth, fontWeight: "bold" }}>
                  {hero.powerstats.durability}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  backgroundColor: colors.primary,
                }}
              >
                <p style={{ color: "white" }}>Power</p>
                <p style={{ color: colors.fourth, fontWeight: "bold" }}>
                  {hero.powerstats.power}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  backgroundColor: colors.primary,
                }}
              >
                <p style={{ color: "white" }}>Speed</p>
                <p style={{ color: colors.fourth, fontWeight: "bold" }}>
                  {hero.powerstats.speed}
                </p>
              </div>
              <h2 style={{ padding: "1rem 0 .5rem 0" }}>Appearance</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  borderBottom: "1px solid #ccc",
                }}
              >
                <p>Gender</p>
                <p style={{ color: colors.secondary, fontWeight: "bold" }}>
                  {hero.appearance.gender}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  borderBottom: "1px solid #ccc",
                }}
              >
                <p>Race</p>
                <p style={{ color: colors.secondary, fontWeight: "bold" }}>
                  {hero.appearance.race != "null" ? hero.appearance.race : "-"}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  borderBottom: "1px solid #ccc",
                }}
              >
                <p>Height</p>
                <p
                  style={{
                    color: colors.secondary,
                    fontWeight: "bold",
                    textAlign: "end",
                  }}
                >
                  {hero.appearance.height[0]} | {hero.appearance.height[1]}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  borderBottom: "1px solid #ccc",
                }}
              >
                <p>Weight</p>
                <p
                  style={{
                    color: colors.secondary,
                    fontWeight: "bold",
                    textAlign: "end",
                  }}
                >
                  {hero.appearance.weight[0]} | {hero.appearance.weight[1]}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  borderBottom: "1px solid #ccc",
                }}
              >
                <p>Eye color</p>
                <p style={{ color: colors.secondary, fontWeight: "bold" }}>
                  {hero.appearance["eye-color"]}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: ".25rem 0",
                  padding: ".25rem 1rem",
                  borderRadius: 15,
                  borderBottom: "1px solid #ccc",
                }}
              >
                <p>Hair color</p>
                <p style={{ color: colors.secondary, fontWeight: "bold" }}>
                  {hero.appearance["hair-color"]}
                </p>
              </div>
            </div>
          )}
        </div>
        {/* <p>{JSON.stringify(hero.powerstats)}</p>
      <p>{JSON.stringify(hero.biography)}</p>
      <p>{JSON.stringify(hero.appearance)}</p>
      <p>{JSON.stringify(hero.work)}</p>
      <p>{JSON.stringify(hero.connections)}</p> */}
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    hero: state.heroeDetails.details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroe: (id: string) => dispatch(fetchHeroeDetails(id)),
    clearState: () => dispatch(clearHeroeDetails()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(HeroeDetails);
