import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend'

const initialArray = []

const FriendsList = (props) => {
    const [friends, setFriends] = useState(initialArray)
    const [loading, setLoading] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true)
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log('CLICK')
            console.log(res)
            setFriends(res.data);
            setLoading(false);
        })
        .catch(err => alert(err))
    }

    return (
        <div>
            {loading && <h2>Loading...</h2>}
            <button onClick={handleClick}>Get Friends?</button>
            {friends.map(friend => (
                <Friend key={friend.id} data={friend}/>
            ))}
        </div>
    )
}

export default FriendsList