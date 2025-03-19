import axios from 'axios';

const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
};

const getUserDetails = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
};

export { getUsers, getUserDetails };
