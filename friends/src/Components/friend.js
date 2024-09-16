import React from 'react';


const Friend = (props) => {
    const { data } = props
    return (
        <div>
            <h1>{data.name} is {data.age}</h1>
        </div>
    )
};


export default Friend

