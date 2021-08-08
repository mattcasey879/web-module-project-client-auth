import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const initialArray = []

const FriendsList = (props) => {
    const [friends, setFriends] = useState(initialArray)

    const handleClick = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log('CLICK')
            console.log(res)
        })
        .catch(err => alert(err))
    }

    return (
        <div>
            <button onClick={handleClick}>Get Friends?</button>
        </div>
    )
}

export default FriendsList