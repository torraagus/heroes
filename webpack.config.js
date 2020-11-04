const path = require("path"),
	webpack = require("webpack"),
	nodeExternals = require("webpack-node-externals"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	dotenv = require("dotenv");

module.exports = () => {
	dotenv.config();
	// console.log(env);
	// console.log(process.env.TMDB_API_KEY);
	// console.log(process.env);
	// let envKeys = {
	// 	...process.env,
	// 	'process.env.TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY),
	// 	'process.env.PORT': JSON.stringify(process.env.PORT),
	// };

	// console.log(envKeys, 'PRIMERO');
	
	// if (env) {
	// 	envKeys = Object.keys(env).reduce((prev, next) => {
	// 		prev[`process.env.${next}`] = JSON.stringify(env[next]);
	// 		return prev;
	// 	}, {});
	// }
	
	// console.log(envKeys, 'SEGUNDO');


	const browserConfig = {
		mode: process.env.NODE_ENV === "production" ? "production" : "development",
		entry: path.resolve(__dirname, "src", "browser", "index.tsx"),
		output: {
			path: path.resolve(__dirname, "public"),
			filename: "bundle.js",
			publicPath: "/",
		},
		module: {
			rules: [
				{
					test: /\.(tsx|ts)$/,
					use: "babel-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.js$/,
					use: "babel-loader",
				},
				{
					test: /\.(css|sass|scss)$/,
					use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"],
				},
				// {
				// 	test: /\.css$/,
				// 	use: ["style-loader", "css-loader", "postcss-loader"],
				// },
			],
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js"],
		},
		plugins: [
			new webpack.EnvironmentPlugin(["NODE_ENV", "HEROES_TOKEN"]),
			new MiniCssExtractPlugin({
				filename: "styles.css",
			}),
		],
	};

	const serverConfig = {
		mode: process.env.NODE_ENV === "production" ? "production" : "development",
		entry: path.resolve(__dirname, "src", "server", "index.tsx"),
		target: "node",
		externals: [nodeExternals()],
		output: {
			path: __dirname,
			filename: "server.js",
			publicPath: "/",
		},
		module: {
			rules: [
				{
					test: /\.(tsx|ts)$/,
					use: "babel-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.js$/,
					use: "babel-loader",
				},
			],
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js"],
		},
		plugins: [new webpack.EnvironmentPlugin(["NODE_ENV", "HEROES_TOKEN"])],
	};
	return [browserConfig, serverConfig];
};