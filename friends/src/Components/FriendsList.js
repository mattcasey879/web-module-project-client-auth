import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend'

const initialArray = []

const FriendsList = (props) => {
    const [friends, setFriends] = useState(initialArray)
    const [loading, setLoading] = useState(false)
    const [getFriendsDis, setgetFriendsDis] = useState(true)
    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true)
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data);
            setLoading(false);
            setgetFriendsDis(false)
        })
        .catch(err => alert(err))
    }

    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {getFriendsDis && <button onClick={handleClick}>Get Friends?</button>}
            {friends.map(friend => (
                <Friend key={friend.id} data={friend}/>
            ))}
        </div>
    )
}

export default FriendsList