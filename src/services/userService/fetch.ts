import fetch from "isomorphic-fetch";

export default (url: string, method: string, body: {}) => {
	return fetch(url, {
		method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});
};
