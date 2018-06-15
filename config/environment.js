const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/sweepstake';
const secret = process.env.SECRET || 'h,jX>5#G/Q8yGzL!';

module.exports = { port, dbURI, secret };
