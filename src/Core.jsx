import React, { useState } from 'react';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';

const Core = () => {
    const [showUsers, setShowUsers] = useState(false);
    const [showPosts, setShowPosts] = useState(false);
    const [showComments, setShowComments] = useState(false);

    return (
        <div>
            <h1>JSON Placeholder API</h1>
            <button onClick={() => setShowUsers(prev => !prev)}>Toggle Users</button>
            {showUsers && <Users />}

            <button onClick={() => setShowPosts(prev => !prev)}>Toggle Posts</button>
            {showPosts && <Posts />}

            <button onClick={() => setShowComments(prev => !prev)}>Toggle Comments</button>
            {showComments && <Comments />}
        </div>
    );
};

export default Core;
