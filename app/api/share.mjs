import { cloudinary } from 'cloudinary-core';

var cl = new cloudinary.Cloudinary({ cloud_name: 'df33f8u2s', secure: true });

export async function post(req) {
	return { location: '/thanks' };
}
