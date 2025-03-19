import React, { useState, useEffect } from 'react';
import { getUsers, getUserDetails } from '../API/users';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showDetails, setShowDetails] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const toggleDetails = async (id) => {
        if (showDetails[id]) {
            setShowDetails((prev) => ({ ...prev, [id]: false }));
            setSelectedUser(null);
        } else {
            setShowDetails((prev) => ({ ...prev, [id]: true }));
            const userDetails = await getUserDetails(id);
            setSelectedUser(userDetails);
        }
    };

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => toggleDetails(user.id)}>
                            {showDetails[user.id] ? 'Hide Details' : 'Show Details'}
                        </button>
                        {showDetails[user.id] && selectedUser && selectedUser.id === user.id && (
                            <div>
                                <p>Email: {selectedUser.email}</p>
                                <p>Phone: {selectedUser.phone}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
