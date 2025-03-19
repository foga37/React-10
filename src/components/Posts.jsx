import React, { useState, useEffect } from 'react';
import { getPosts, getPostDetails } from '../api/posts';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showDetails, setShowDetails] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const toggleDetails = async (id) => {
        if (showDetails[id]) {
            setShowDetails((prev) => ({ ...prev, [id]: false }));
            setSelectedPost(null);
        } else {
            setShowDetails((prev) => ({ ...prev, [id]: true }));
            const postDetails = await getPostDetails(id);
            setSelectedPost(postDetails);
        }
    };

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                        <button onClick={() => toggleDetails(post.id)}>
                            {showDetails[post.id] ? 'Hide Details' : 'Show Details'}
                        </button>
                        {showDetails[post.id] && selectedPost && selectedPost.id === post.id && (
                            <div>
                                <p>{selectedPost.body}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
