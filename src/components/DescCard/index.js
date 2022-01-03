import React from 'react';
import './DescCard.scss'

const DescCard = (props) => {
    return <div className={"desc-card-main"}>
        <h3 className={"my-card-title"}>{props.title}</h3>
        <p className={"my-card-subtitle"}>{props.subtitle}</p>
    </div>;
};

export default DescCard;
