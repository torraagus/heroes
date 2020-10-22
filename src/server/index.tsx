import { matchPath, StaticRouter as Router } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import "localstorage-polyfill";
import express from "express";
import cors from "cors";
import App from "../shared/App";
import React from "react";
import { markup } from "./markup";
import store from '../shared/redux/store'

const app: any = express();

app.use(cors());
app.use(express.static("public"));
app.use(handleRender);

async function handleRender(req, res) {

	const html = renderToString(
		<Provider store={store}>
			<Router location={req.url}>
				<App />
			</Router>
		</Provider>
	);

	const initialState = store.getState();
	res.send(markup(html, initialState));
}

app.get("/favicon.ico", (req, res) => res.status(204));

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is listening on port ${process.env.PORT ? process.env.PORT : 3000}`);
});
