const fs = require('fs');
const folder = process.cwd()+'\\assets\\avatars';

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const readAvatarsNames = () => fs.readdirSync(folder);

export const getRandomAvatar = () => {
  const avatarNames = readAvatarsNames();
  return avatarNames[getRandomInt(0, avatarNames.length-1)];
};

