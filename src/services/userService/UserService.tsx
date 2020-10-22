import fetch from "isomorphic-fetch";
import myFetch from "./fetch";

const apiKey = process.env.TMDB_API_KEY;

const guestLogin = async () => {
	const url = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success) throw new Error(data.status_message);

	return data;
};

const requestToken = async () => {
	const url = `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success) throw new Error(data.status_message);

	return data.request_token;
};

const validateWithLogin = async (request_token: string, { username, password }) => {
	const url = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`;
	const body = {
		username,
		password,
		request_token,
	};
	const response = await myFetch(url, "POST", body);
	const data = await response.json();

	if (!data.success) throw new Error(data.status_message);

	return data.request_token;
};

const sessionId = async (request_token: string) => {
	const url = `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`;
	const body = {
		request_token,
	};
	const response = await myFetch(url, "POST", body);
	const data = await response.json();

	if (!data.success) throw new Error(data.status_message);

	return data.session_id;
};

const userLogin = async (credentials: { username: string; password: string }) => {
	let session_id: string;
	try {
		const request_token = await requestToken();
		const validated_token = await validateWithLogin(request_token, credentials);
		session_id = await sessionId(validated_token);
	} catch (error) {
		throw new Error(error);
	}

	return { session_id, username: credentials.username };
};

const rateMovie = async (id: string, value: number, isGuest: boolean, session_id: string) => {
	const chunk = isGuest ? `guest_session_id=${session_id}` : `session_id=${session_id}`;
	const url = `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${apiKey}&${chunk}`;
	const body = {
		value,
	};
	const response = await myFetch(url, "POST", body);
	const data = await response.json();

	if (data.status_code !== 1) throw new Error(data.status_message);
};

const removeVote = async (id: string, isGuest: boolean, session_id: string) => {
	const chunk = isGuest ? `guest_session_id=${session_id}` : `session_id=${session_id}`;
	const url = `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${apiKey}&${chunk}`;
	const response = await fetch(url, {
		method: "DELETE",
	});
	const data = await response.json();

	if (data.status_code !== 13) throw new Error(data.status_message);
};

const fetchRatedMovies = async (username: string, isGuest: boolean, session_id: string) => {
	let url: string = isGuest
		? `https://api.themoviedb.org/3/guest_session/${session_id}/rated/movies?api_key=${apiKey}&language=en-US&sort_by=created_at.asc`
		: `https://api.themoviedb.org/3/account/${username}/rated/movies?api_key=${apiKey}&language=en-US&session_id=${session_id}&sort_by=created_at.asc&page=1`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.results) throw new Error(data.status_message);

	return data;
};

export default { guestLogin, userLogin, rateMovie, removeVote, fetchRatedMovies };
