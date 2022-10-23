export default function DpPictures({ html, state }) {
	const { store } = state;
	const { pictures = [] } = store;
	return html` <style>
			:host {
				flex: none;
			}
		</style>
		<h2>Pictures of Decor</h2>
		<ol>
			${pictures
				.map((url) => {
					return `<li>
						<img src="${url}" />
					</li>`;
				})
				.join('')}
		</ol>`;
}
