export default function Head(state) {
	const { req } = state;
	const { path } = req;
	return `<!doctype html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>decor.pictures — ${path}</title>
		<meta name="description" content="find and share holiday decor pictures">
		<link rel="stylesheet" href="/_public/main.css">
		<link rel="icon" href="/_public/favicon.svg">
	</head>`;
}