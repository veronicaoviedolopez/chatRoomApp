import axios from 'axios';

export const addUserSession = token =>
{
    // Agrega token al localStorage
    localStorage.setItem('chatRoomJWT', token);

    // Agrega token al header de Axios
    axios.defaults.headers.common['auth-token'] = token;
}

export const removeUserSession = token =>
{
    // Remueve token al localStorage
    localStorage.removeItem('chatRoomJWT');

    // Remueve token al header de Axios
    delete axios.defaults.headers.common['auth-token'];
}

export const getJwt = () => localStorage.getItem('chatRoomJWT');
