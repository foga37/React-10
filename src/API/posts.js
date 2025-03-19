import axios from 'axios';

const getPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};

const getPostDetails = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
};

export { getPosts, getPostDetails };
