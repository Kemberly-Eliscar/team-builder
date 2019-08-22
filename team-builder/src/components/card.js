import React from 'react';

const Card = (prop) => {
    //get person out of my props
    const { person } = props;
    return (
        <div>
            <div>{person.name}</div>
            <div>{person.email}</div>
            <div>{person.role}</div>
        </div>
    );
};

export default Card;