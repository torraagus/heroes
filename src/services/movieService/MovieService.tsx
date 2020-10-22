import fetch from "isomorphic-fetch";

const apiKey = process.env.TMDB_API_KEY;

const fetchNowPlayingMovies = async (page) => {
	const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success && !data.results) throw new Error(data.status_message);

	return data;
};

const fetchPopularMovies = async (page) => {
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success && !data.results) throw new Error(data.status_message);

	return data;
};

const fetchUpcomingMovies = async (page: number) => {
	const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success && !data.results) throw new Error(data.status_message);

	return data;
};

const fetchMovie = async (id: string) => {
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
	const response = await fetch(url);
	const data = await response.json();

	if (data.success !== undefined && !data.success) throw new Error(data.status_message);

	return data;
};

const fetchMovieCast = async (id: string) => {
	const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.cast) throw new Error(data.status_message);

	return data.cast;
};

const searchMovies = async (query: string, page: number) => {
	const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.results) throw new Error(data.status_message);

	return data;
};

const fetchSimilarMovies = async (id: string) => {
	let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.results) throw new Error(data.status_message);

	return data.results;
};

const fetchMovieKeywords = async (id: string) => {
	let url = `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${apiKey}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.keywords) throw new Error(data.status_message);

	return data.keywords;
};

const fetchMovieReviews = async (id: string) => {
	let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.results) throw new Error(data.status_message);

	return data.results;
};

export const fetchRecommendations = (params) => {
	let url = `https://api.themoviedb.org/3/movie/${params.movieId}/recommendations?api_key=${apiKey}&language=en-US&page=${params.page}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export default {
	fetchNowPlayingMovies,
	fetchPopularMovies,
	fetchUpcomingMovies,
	fetchMovie,
	searchMovies,
	fetchMovieCast,
	fetchSimilarMovies,
	fetchMovieKeywords,
	fetchMovieReviews,
};
