import bcrypt from 'bcryptjs';

export default (password) => {
  console.log('pass', password);
  bcrypt.genSalt(process.env.numeroSalt)
      .then((salt) => {
        return bcrypt.hash(password, salt);
      });
};
