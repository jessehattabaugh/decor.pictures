import aws from 'aws-sdk';
import { v4 as uuid } from 'uuid';

export async function post(req) {
	const s3Client = new aws.S3();
	const { ARC_STORAGE_PUBLIC_DECOR_PICTURES: Bucket = 'oops' } = process.env;
	const { base64: Body } = req.body;
	const Key = uuid();
	console.log('🪣', Bucket, Body, Key, req);
	const data = await new Promise((resolve, reject) => {
		s3Client.putObject({ Body, Bucket, Key }, (err, data) => {
			if (err) {
				console.error(err, err.stack);
				reject(err);
			} else {
				console.log('🦄', data);
				resolve(data);
			}
		});
	});
	return { data, location: '/thanks' };
}
