import serialize from "serialize-javascript";

export const markup = (html, preloadedState) => {
	const { title, styles, fonts } = {
		title: "Heroes",
		styles: "/styles.css",
		fonts: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap",
	};

	return `
    <!doctype html>
    <html>
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>${title}</title>
			<link rel="stylesheet" type="text/css" href=${styles}>
		</head>
		<body>
			<div id="app">${html}</div>
			<script>
			window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
			</script>
			<script src="/bundle.js" defer></script>
		</body>
    </html>
    `;
};
