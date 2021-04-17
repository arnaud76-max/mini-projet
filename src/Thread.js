import React from "react";

const Thread = ({ messages = [] }) => {
    return (
        <div>
            {messages.reverse().map(({ id, content }) =>(
                <p key={id}>{content}</p>
            ))}
        </div>
    );
};

export default Thread;