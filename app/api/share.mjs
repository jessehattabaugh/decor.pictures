export async function post(req) {
	const { body } = req;
	console.log('🧜‍♀️', body, process.env);
	// upload file to S3
	return {
		location: '/thanks',
	};
}