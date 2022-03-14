export const config = {
	'username': process.env.POSTGRES_USERNAME,
	'password': process.env.POSTGRES_PASSWORD,
	'database': process.env.POSTGRES_DB,
	'host': process.env.POSTGRES_HOST,
	'dialect': 'postgres',
	'aws_region': process.env.AWS_REGION,
	'aws_profile': process.env.AWS_PROFILE,
	'aws_credentials_file': process.env.AWS_SHARED_CREDENTIALS_FILE,
	'aws_media_bucket': process.env.AWS_BUCKET,
	'url': process.env.URL,
	'jwt': {
		'secret': process.env.JWT_SECRET,
	},
};
