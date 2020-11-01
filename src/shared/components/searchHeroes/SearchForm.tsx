import React, { FC, useRef, useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Form, Submit, Input } from "./searchForm.styles";

type Props = {
  search: string;
  flexDir: string;
};

const SearchForm: FC<Props & RouteComponentProps> = ({
  search,
  history,
  flexDir,
}) => {
  const inputRef = useRef(null);
  const [query, setQuery] = useState(search);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push({
      pathname: "search",
      search: query
    });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h1>Search heroes</h1>
      <Form
        display="flex"
        flexDir={flexDir}
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <Input
          ref={inputRef}
          type="text"
          placeholder="Insert hero name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Submit
          margin={flexDir === "column" ? ".5rem 0" : "1rem .25rem"}
          type="submit"
          value="Search"
        />
      </Form>
    </>
  );
};

export default withRouter(SearchForm);
