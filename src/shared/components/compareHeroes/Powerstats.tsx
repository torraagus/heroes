import React from "react";

const Powerstats = ({ hero }) => {
  const powerstats = [
    "combat",
    "intelligence",
    "strength",
    "durability",
    "power",
    "speed",
  ];

  return (
    <>
      <p>#{hero.id}</p>
      <p>
        <b>{hero.name}</b>
      </p>
      {powerstats.map((p) => (
        <p key={p}>
          <small style={{ textTransform: "capitalize" }}>{p}: </small>{" "}
          <b>{hero[p] != "null" ? hero[p] : "-"}</b>
        </p>
      ))}
    </>
  );
};

export default Powerstats;
