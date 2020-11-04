const fs = require('fs');
import path from 'path';
//const publicPath = path.join(__dirname, '..', 'assets\avatars');

//const folder = process.cwd()+'\\assets\\avatars';
//const folder = 'https://cryptic-harbor-61839.herokuapp.com/avatars/';
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

//const readAvatarsNames = () => fs.readdirSync(publicPath);

export const getRandomAvatar = () => {
  const avatarNames =  [ 
    "https://cryptic-harbor-61839.herokuapp.com/avatars/bee.png",
    "https://cryptic-harbor-61839.herokuapp.com/avatars/giraffe.png",
    "https://cryptic-harbor-61839.herokuapp.com/avatars/lion.png"
  ];
  return avatarNames[getRandomInt(0, avatarNames.length-1)];
};

