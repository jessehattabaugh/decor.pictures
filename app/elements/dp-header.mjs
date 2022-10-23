export default function DpHeader({ html }) {
	return html`
	<style>:host {
		flex: none;
	}</style>
	<header>
		<h1><a href=/>decor.pictures</a></h1>
		<h2>find and share holiday decor pictures</h2>
		<nav>
			<a href=/share>share a picture</a>
		</nav>
	</header>`;
}
