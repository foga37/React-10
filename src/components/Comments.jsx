import React, { useState, useEffect } from 'react';
import { getComments, getCommentDetails } from '../api/comments';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [selectedComment, setSelectedComment] = useState(null);
    const [showDetails, setShowDetails] = useState({});

    useEffect(() => {
        const fetchComments = async () => {
            const data = await getComments();
            setComments(data);
        };
        fetchComments();
    }, []);

    const toggleDetails = async (id) => {
        if (showDetails[id]) {
            setShowDetails((prev) => ({ ...prev, [id]: false }));
            setSelectedComment(null);
        } else {
            setShowDetails((prev) => ({ ...prev, [id]: true }));
            const commentDetails = await getCommentDetails(id);
            setSelectedComment(commentDetails);
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        {comment.name}
                        <button onClick={() => toggleDetails(comment.id)}>
                            {showDetails[comment.id] ? 'Hide Details' : 'Show Details'}
                        </button>
                        {showDetails[comment.id] && selectedComment && selectedComment.id === comment.id && (
                            <div>
                                <p>{selectedComment.body}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
