import nodemailer from 'nodemailer';
// const transporter = nodemailer.createTransport({
// 	host: 'smtp.gmail.com',
// 	port: 465,
// 	secure: true,
// 	auth: {
// 		user: 'abhij3682@gmail.com',
// 		pass: 'tbptecwqpskowbyz',
// 	},
// });
const sendEmail = async (email, subject, text) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'abhij3682@gmail.com',
			pass: 'jlfheacpwikviaba',
		},
	});

	try {
		await transporter.sendMail({
			to: email,
			subject: subject,
			text: text,
		});
		console.log('email sent sucessfully');
	} catch (error) {
		console.log('email not sent');
		console.log(error);
	}
};

export default sendEmail;
