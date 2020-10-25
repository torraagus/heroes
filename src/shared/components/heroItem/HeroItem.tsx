import React, { FC, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Container } from "../../styled/Container";
import { LoaderIcon } from "./heroItem.styles";

type Props = { hero: { name: string; id: string; image: { url: string } } };

const HeroItem: FC<Props & RouteComponentProps> = ({ hero, history }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Container
      height="auto"
      width="128px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      display="flex"
      padding=".25rem .25rem"
      hover={true}
      onClick={() => history.push(`/heroes/${hero.id}`)}
    >
      <img
        style={{ height: "128px", borderRadius: 15 }}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(true)}
        src={hero.image.url}
      />
      {!imgLoaded ? (
        <LoaderIcon />
      ) : (
        <>
          <h2>#{hero.id}</h2>
          <small style={{ textAlign: "center" }}>{hero.name}</small>
        </>
      )}
    </Container>
  );
};

export default withRouter(HeroItem);
