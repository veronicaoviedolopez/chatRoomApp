import axios from 'axios';

export const setAuthToken = token => {
    // Apply to every request
    axios.defaults.headers.common['auth-token'] = token;
};

export const deleteAuthToken = () => {
    // Delete auth header
    delete axios.defaults.headers.common['auth-token'];
};