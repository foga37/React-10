import axios from 'axios';

const getComments = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return response.data;
};

const getCommentDetails = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
    return response.data;
};

export { getComments, getCommentDetails };
