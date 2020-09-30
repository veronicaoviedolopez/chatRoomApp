const fs = require('fs');
import path from 'path';

// const folder = process.cwd()+'\\assets\\avatars';
const folder = 'https://cryptic-harbor-61839.herokuapp.com/avatars/';
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const readAvatarsNames = () => fs.readdirSync(folder);

export const getRandomAvatar = () => {
  const avatarNames = readAvatarsNames();
  return avatarNames[getRandomInt(0, avatarNames.length-1)];
};

