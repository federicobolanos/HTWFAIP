import React from "react";

export default function Principle({ data }) {
    return (
        <div className="ui segment">
            <p className="part">{data.part}</p>
            <p className="chapter">{data.chapter}</p>
            <p className="title">{data.title}</p>
            <div className="ui segment">
                <p className="principle">{data.principle}</p>
            </div>
        </div>
    )
}