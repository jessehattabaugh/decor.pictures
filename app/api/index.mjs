export async function get() {
	return {
		json: {
			pictures: [
				'http://placekitten.com/200/300',
				'http://placekitten.com/300/200',
				'http://placekitten.com/400/300',
			],
		},
	};
}
